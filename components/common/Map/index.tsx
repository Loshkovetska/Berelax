import {
  GoogleMap,
  OverlayView,
  MarkerF,
  Marker,
  useJsApiLoader,
  InfoWindow,
  InfoBox,
} from '@react-google-maps/api'
import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { Fragment, useEffect, useRef, useState } from 'react'

import loc from '../../../assets/find/loc.png'
import useClickOutSide from '../../../hooks/ClickOutSide'
import { useWindowDimensions } from '../../../hooks/getWindowDimensions'
import { useContentState } from '../../../hooks/RootStoreProvider'
import map from '../../../mocks/map'
import GlobalState from '../../../stores/GlobalState'
import { FindTabState } from '../../pages/find/Intro'
import { Airports } from '../../pages/find/PlacesList'
import { PlaceCardState } from '../../pages/find/PlacesListMob'
import { IconComponent } from '../IconComponent'
import InViewComponent from '../InViewComponent'
const containerStyle = {
  width: '100%',
  height: '100%',
}

const Map = observer(({ coords }: any) => {
  const router = useRouter()
  const { content } = useContentState()
  const [showOver, setShow] = useState(false)
  const mapRef = useRef<any>(null)
  const [center, setCenter] = useState({
    lat: 40.866667,
    lng: 34.566667,
  })
  const [zoom, setZoom] = useState(2)
  const [currentPosition, setPosition] = useState<any>(null)

  let { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDGhdmlq3VJzRbKTvQ9zvmvN1-nqA8Q1bU',
  })

  const { width, height } = useWindowDimensions()

  const list: any = []

  coords.forEach((co: any) => {
    co.list.forEach((li: any) => {
      list.push(li)
    })
  })

  const ref = useRef<any>(null)
  useEffect(() => {
    if (!ref.current) return

    if (width <= 900) {
      document.querySelector('.smooth')?.addEventListener('click', (e) => {
        if (!ref.current) return

        if (!ref.current?.contains(e.target)) {
          GlobalState.locoScroll && GlobalState.locoScroll.start()
        }
      })
      document.querySelector('.smooth')?.addEventListener('touchend', (e) => {
        if (!ref.current) return
        if (!ref.current?.contains(e.target)) {
          GlobalState.locoScroll && GlobalState.locoScroll.start()
        }
      })
    }
  }, [width])

  useEffect(() => {
    if (width <= 900 && FindTabState.location && mapRef.current) {
      requestAnimationFrame(() => {
        mapRef.current.panTo(
          new window.google.maps.LatLng(
            +(FindTabState.location as any)?.lat,
            +(FindTabState.location as any)?.lng,
          ),
        )
        setTimeout(() => {
          setCenter({
            lat: +(FindTabState.location as any)?.lat,
            lng: +(FindTabState.location as any)?.lng,
          })
        }, 500)
      })
    }
  }, [width, FindTabState.location])

  useEffect(() => {
    if (!FindTabState.tab && width <= 900) {
      setShow(false)
    }
  }, [FindTabState.tab, width])

  const sortLocation = (el: any) => {
    const res: any = []
    coords.forEach((d: any) => {
      if (d.continent == el?.continent && el?.title.length) {
        const sublist = d.list.filter((di: any) => di.title == el?.title)
        res.push({
          continent: d.continent,
          list: sublist,
        })
        return
      }
    })

    runInAction(() => {
      Airports.list = res
      FindTabState.location = res[0].list[0].locations
      FindTabState.tab = 0
      PlaceCardState.selected = el
    })

    const smooth = document.querySelector('.smooth')
    const items = document.querySelector('.places')
    const header = document.querySelector('.header')
    if (!smooth || !items || !header) return

    if (width > 900) {
      GlobalState.locoScroll &&
        GlobalState.locoScroll.scrollTo(items, {
          offset: -header.getBoundingClientRect().height,
        })
    }

    if (width <= 900 && !FindTabState.tab) {
      GlobalState.locoScroll &&
        GlobalState.locoScroll.scrollTo(items, {
          offset: -header.getBoundingClientRect().height,
        })
    }
  }

  if (!isLoaded) return <div className="map"></div>

  const locatorSizes =
    width > 1024 ? 48 : width <= 1024 && width > 900 ? 38 : 32

  return (
    <div
      className={classNames(
        'map',
        width <= 900 && FindTabState.tab != 1 && 'none',
      )}
      ref={ref}
    >
      <InViewComponent delay={1}>
        <div className="map__zooms">
          <div className="map__zoom in" onClick={() => setZoom(zoom + 1)}>
            <IconComponent name={'menu/Plus'} />
          </div>
          <div
            className="map__zoom out"
            onClick={() => {
              if (zoom) {
                setZoom(zoom - 1)
              }
            }}
          >
            <IconComponent name={'find/Minus'} />
          </div>
        </div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          onLoad={(map: any) => {
            mapRef.current = map
          }}
          onUnmount={(map) => {
            mapRef.current = map
          }}
          options={{
            styles: map,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: true,
            panControl: true,
            streetViewControl: false,
            fullscreenControl: false,
            scrollwheel: true,
            tilt: 0,
            disableDefaultUI: true,
          }}
          onMouseOut={() =>
            GlobalState.locoScroll && GlobalState.locoScroll.start()
          }
          onMouseMove={() =>
            GlobalState.locoScroll && GlobalState.locoScroll.stop()
          }
          onClick={(e) => {
            setShow(false)
          }}
          onDrag={() => {
            GlobalState.locoScroll && GlobalState.locoScroll.stop()
          }}
          onZoomChanged={() => {
            if (mapRef.current) {
              setZoom(mapRef.current.getZoom())
            }
          }}
        >
          {coords.map((ci: any, i: number) => (
            <Fragment key={i}>
              {ci.list.map((li: any, id: number) => (
                <Fragment key={id}>
                  <Marker
                    zIndex={2}
                    icon={{
                      url: loc.src,
                      scaledSize: new window.google.maps.Size(
                        locatorSizes,
                        locatorSizes,
                      ),
                      size: new window.google.maps.Size(
                        locatorSizes,
                        locatorSizes,
                      ),
                    }}
                    onClick={() => {
                      if (showOver) {
                        setShow(false)

                        setTimeout(() => {
                          setPosition(li)
                        }, 500)
                        requestAnimationFrame(() => {
                          mapRef.current.panTo(
                            new window.google.maps.LatLng(
                              +li.locations.lat,
                              +li.locations.lng,
                            ),
                          )
                          setTimeout(() => {
                            setCenter({
                              lat: +li.locations.lat,
                              lng: +li.locations.lng,
                            })
                          }, 500)
                        })
                        setTimeout(() => {
                          setShow(true)
                        }, 501)
                        return
                      }

                      requestAnimationFrame(() => {
                        mapRef.current.panTo(
                          new window.google.maps.LatLng(
                            +li.locations.lat,
                            +li.locations.lng,
                          ),
                        )
                        setTimeout(() => {
                          setCenter({
                            lat: +li.locations.lat,
                            lng: +li.locations.lng,
                          })
                        }, 500)
                      })
                      setPosition(li)
                      setTimeout(() => {
                        setShow(true)
                      }, 500)
                    }}
                    position={{
                      lat: +li.locations.lat,
                      lng: +li.locations.lng,
                    }}
                  ></Marker>
                </Fragment>
              ))}
            </Fragment>
          ))}

          <InfoBox
            position={
              new window.google.maps.LatLng(
                +currentPosition?.locations.lat,
                +currentPosition?.locations.lng,
              )
            }
          >
            <div className={classNames('map__pop', showOver && 'show')}>
              <div className="map__pop-title">{currentPosition?.title}</div>
              <div
                className="map__pop-link"
                onClick={() => {
                  //router.push('/find-us/' + currentPosition?.skyCat?.slug)
                  sortLocation(currentPosition)

                  // setTimeout(() => {
                  //   sortLocation(currentPosition)
                  // }, 2000)
                }}
              >
                {content?.cardDetails} <IconComponent name={'arrow'} />
              </div>
              <IconComponent name={'find/loc'} className="loc-svg" />
            </div>
          </InfoBox>
        </GoogleMap>
      </InViewComponent>
    </div>
  )
})

export default Map
