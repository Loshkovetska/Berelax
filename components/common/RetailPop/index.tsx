import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useClickOutSide from '../../../hooks/ClickOutSide'
import { useWindowDimensions } from '../../../hooks/getWindowDimensions'
import { useContentState } from '../../../hooks/RootStoreProvider'
import { retailerLocationsList } from '../../../stores/ContentState'
import GlobalState, { changeRetailerState } from '../../../stores/GlobalState'
import { IconComponent } from '../IconComponent'
import RetailerSelect from '../RetailerSelect'

import RetailMap from '../RetailMap'
import Select from '../Select'
import Title54 from '../Title54'

const RetailPop = observer(() => {
  const { content } = useContentState()
  const [value, setState] = useState<any>(null)
  const [results, setResults] = useState(Array())
  const [show, setShow] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const { width } = useWindowDimensions()
  const ref = useRef<any>(null)
  const outSide = useClickOutSide(ref)
  const [currentLocation, setLocation] = useState({
    lat: 40.866667,
    lng: 34.566667,
  })
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 300)
  }, [])

  useEffect(() => {
    if (value?.title?.length || value) {
      search(value)
    } else {
      retailerLocationsList().then((r) => {
        setResults(r)
        setShowAdd(false)
      })
    }
  }, [value])

  const search = async (value: any) => {
    await retailerLocationsList().then((r) => {
      const res = r.filter((c: any) => {
        let lc = (c.title + c.text).toLowerCase()
        let searchText = value?.title ? value?.title : value
        if (lc.includes(searchText?.toLowerCase())) {
          return c
        }
      })

      if (res.length) {
        setShowAdd(true)
      }

      setResults(res)
    })
  }

  useEffect(() => {
    if (!GlobalState.isRetailerOpen) {
      GlobalState.locoScroll && GlobalState.locoScroll.start()
    }
  }, [GlobalState.isRetailerOpen])

  useEffect(() => {
    const cards = document.querySelectorAll('.location-card')
    if (cards) {
      cards.forEach((c: any, i: number) => {
        if (c) {
          const lat = c.dataset.coordlat,
            lng = c.dataset.coordlng

          if (+lat == +currentLocation.lat && +lng == +currentLocation.lng) {
            c.classList.add('active')
            c.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest',
            })
          } else c.classList.remove('active')
        }
      })
    }
  }, [currentLocation])

  useEffect(() => {
    if (outSide) {
      GlobalState.locoScroll && GlobalState.locoScroll.start()
    }
  }, [outSide])

  return (
    <section
      className={classNames('retail-pop', GlobalState.isRetailerOpen && 'show')}
    >
      <IconComponent
        name={'menu/close'}
        className="retail-pop__close"
        onClick={changeRetailerState}
      />

      <div className="retail-pop__container">
        <div className="retail-pop__map">
          <div className={classNames('retail-pop__tooltip', show && 'show')}>
            <div
              className="retail-pop__tooltip-text"
              dangerouslySetInnerHTML={{ __html: content?.pop?.tooltip }}
            ></div>
            <IconComponent
              name={'menu/close'}
              className="retail-pop__tooltip-close"
              onClick={() => setShow(false)}
            />
          </div>
          <RetailMap
            results={results}
            location={currentLocation}
            setPos={(value: any) => setLocation(value)}
          />
        </div>
        <div className="retail-pop__right">
          <Title54 text={content?.pop?.title} classStr="retail-pop__title" />
          <RetailerSelect
            placeholder={content?.pop?.placeholder}
            getValue={setState}
          />
          {value?.title?.length && showAdd ? (
            <div className="retail-pop__subtitle">
              {results?.length} “{value?.title}” locations
            </div>
          ) : (
            <></>
          )}
          {results.length ? (
            <div
              className="retail-pop__list"
              ref={ref}
              onScroll={() =>
                width > 1024 &&
                GlobalState.locoScroll &&
                GlobalState.locoScroll.stop()
              }
              onMouseLeave={() =>
                GlobalState.locoScroll && GlobalState.locoScroll.start()
              }
            >
              {results.map((re, id) => (
                <LocationCard
                  dt={re}
                  key={id}
                  // setLocation={setLocation}
                  isActive={
                    currentLocation &&
                    currentLocation?.lat == re.coords.lat &&
                    currentLocation?.lng == re.coords.lng
                  }
                />
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  )
})

export default RetailPop

export const LocationCard = observer(
  ({
    dt,
    // setLocation,
    isActive,
  }: {
    dt: any
    // setLocation: (value: any) => void
    isActive: boolean
  }) => {
    const [show, setShow] = useState(false)
    const ref = useRef<any>(null)

    useEffect(() => {
      if (!show) {
        ref.current && ref.current.style.setProperty('--text-height', 0 + 'px')
      } else {
        ref.current &&
          ref.current.style.setProperty(
            '--text-height',
            ref.current.scrollHeight + 12 + 'px',
          )
      }
    }, [show])

    return (
      <section
        className={classNames('location-card')}
        data-coordlat={dt.coords.lat}
        data-coordlng={dt.coords.lng}
        // onClick={() =>
        //   setLocation({
        //     lat: dt.coords.lat,
        //     lng: dt.coords.lng,
        //   })
        // }
      >
        <div className="location-card__top">
          <IconComponent
            name={'retail/plane'}
            className={classNames('', !dt.isAirport && 'visible')}
          />
          <IconComponent
            name={'retail/location'}
            className={classNames('shop', dt.isAirport && 'visible')}
          />
          <div className="location-card__title">{dt?.title}</div>
        </div>
        <div className="location-card__content">
          <div className="location-card__text">{dt?.text}</div>
          <div
            className={classNames('location-card__more', show && 'show')}
            onClick={(e) => {
              e.stopPropagation()
              setShow(!show)
            }}
          >
            {!show ? 'See' : 'Hide'} Details <IconComponent name={'ic'} />
          </div>
          <div className="location-card__addInfo" ref={ref}>
            {!dt.isAirport && <div className="location-card__text">{dt?.location}</div>}
            <div className="location-card__text">{dt?.schedule}</div>
            <div className="location-card__text">{dt?.phone}</div>
          </div>
        </div>
      </section>
    )
  },
)
