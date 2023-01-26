import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { Fragment, useEffect, useRef, useState } from 'react'
import loc from '../../../assets/find/loc.png'
import shoploc from '../../../assets/retail/shop.png'
import { useWindowDimensions } from '../../../hooks/getWindowDimensions'
import map from '../../../mocks/map'
import GlobalState from '../../../stores/GlobalState'
import { IconComponent } from '../IconComponent'
const containerStyle = {
  width: '100%',
  height: '100%',
}

const RetailMap = ({ results, location, setPos }: any) => {
  const mapRef = useRef<any>(null)
  const [zoom, setZoom] = useState(2)
  const [currentPosition, setPosition] = useState<any>(null)
  const [center, setCenter] = useState({
    lat: 40.866667,
    lng: 34.566667,
  })

  let { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDGhdmlq3VJzRbKTvQ9zvmvN1-nqA8Q1bU',
  })

  useEffect(() => {
    if(!mapRef.current)return ;
    requestAnimationFrame(() => {
      mapRef.current?.panTo(
        new window.google.maps.LatLng(+location.lat, +location.lng),
      )
      setTimeout(() => {
        setCenter({
          lat: +location.lat,
          lng: +location.lng,
        })
      }, 500)
    })
  }, [location])

  const { width, height } = useWindowDimensions()

  if (!isLoaded) return <div className="map"></div>

  const locatorSizes =
    width > 1024 ? 48 : width <= 1024 && width > 900 ? 38 : 32

  return (
    <div className="map">
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
        onDrag={() => {
          GlobalState.locoScroll && GlobalState.locoScroll.stop()
        }}
        onDragEnd={() => {
          GlobalState.locoScroll && GlobalState.locoScroll.start()
        }}
        onZoomChanged={() => {
          if (mapRef.current) {
            setZoom(mapRef.current.getZoom())
          }
        }}
      >
        {results?.map((ci: any, i: number) => (
          <Fragment key={i}>
            <Marker
              onClick={() => {
                setPos(ci.coords)
                requestAnimationFrame(() => {
                  mapRef.current?.panTo(
                    new window.google.maps.LatLng(
                      +ci.coords.lat,
                      +ci.coords.lng,
                    ),
                  )
                  setTimeout(() => {
                    setCenter({
                      lat: +ci.coords.lat,
                      lng: +ci.coords.lng,
                    })
                  }, 500)
                })
              }}
              zIndex={2}
              icon={{
                url: ci.isAirport ? loc.src : shoploc.src,
                scaledSize: new window.google.maps.Size(
                  locatorSizes,
                  locatorSizes,
                ),
                size: new window.google.maps.Size(locatorSizes, locatorSizes),
              }}
              position={{
                lat: +ci.coords.lat,
                lng: +ci.coords.lng,
              }}
            ></Marker>
          </Fragment>
        ))}
      </GoogleMap>
    </div>
  )
}

export default RetailMap
