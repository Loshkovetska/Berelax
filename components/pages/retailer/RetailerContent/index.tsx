import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useClickOutSide from '../../../../hooks/ClickOutSide'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState from '../../../../stores/GlobalState'
import { IconComponent } from '../../../common/IconComponent'
import InViewComponent from '../../../common/InViewComponent'
import RetailMap from '../../../common/RetailMap'
import { LocationCard } from '../../../common/RetailPop'
import Select from '../../../common/Select'
import Text from '../../../common/Text'
import Title from '../../../common/Title'

const RetailerContent = observer(() => {
  const { content } = useContentState()
  const [results, setResults] = useState(Array())
  const [show, setShow] = useState(false)
  const [currentLocation, setLocation] = useState({
    lat: 40.866667,
    lng: 34.566667,
  })
  const [value, setState] = useState('')
  const { width } = useWindowDimensions()
  const ref = useRef<any>(null)
  const outSide = useClickOutSide(ref)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 300)

    setResults([
      {
        isAirport: true,

        title: 'New York Airport',
        text: 'McNamara Terminal Gate A18',
        schedule: 'Every day from 7am to 8pm',
        phone: '(1) 734 229 0042',
        coords: {
          lat: 10,
          lng: 20,
        },
      },
      {
        title: 'New York Airport',
        text: 'McNamara Terminal Gate A18',
        schedule: 'Every day from 7am to 8pm',
        phone: '(1) 734 229 0042',
        isAirport: false,
        coords: {
          lat: -100,
          lng: 20,
        },
      },
      {
        title: 'New York Airport',
        text: 'McNamara Terminal Gate A18',
        schedule: 'Every day from 7am to 8pm',
        phone: '(1) 734 229 0042',
        isAirport: false,
        coords: {
          lat: 100,
          lng: 20,
        },
      },
      {
        title: 'New York Airport',
        text: 'McNamara Terminal Gate A18',
        schedule: 'Every day from 7am to 8pm',
        phone: '(1) 734 229 0042',
        isAirport: false,
        coords: {
          lat: 10,
          lng: -20,
        },
      },
      {
        title: 'New York Airport',
        text: 'McNamara Terminal Gate A18',
        schedule: 'Every day from 7am to 8pm',
        phone: '(1) 734 229 0042',
        isAirport: false,
        coords: {
          lat: 10,
          lng: -40,
        },
      },
      {
        title: 'New York Airport',
        text: 'McNamara Terminal Gate A18',
        schedule: 'Every day from 7am to 8pm',
        phone: '(1) 734 229 0042',
        isAirport: false,
        coords: {
          lat: 20,
          lng: -30,
        },
      },
      {
        title: 'New York Airport',
        text: 'McNamara Terminal Gate A18',
        schedule: 'Every day from 7am to 8pm',
        phone: '(1) 734 229 0042',
        isAirport: false,
        coords: {
          lat: 10,
          lng: 30,
        },
      },
    ])
  }, [])

  const search = (value: string) => {
    const fd = new FormData()
    fd.append('status', 'location-search')
    fd.append('value', value)
    // fetch('/', {
    //   method: 'POST',
    //   body: fd,
    // }).then(() => {
    //   //   setResults([
    //   //     {
    //   //       isAirport: true,
    //   //       title: 'New York Airport',
    //   //       text: 'McNamara Terminal Gate A18',
    //   //       schedule: 'Every day from 7am to 8pm',
    //   //       phone: '(1) 734 229 0042',
    //   //       coords: {
    //   //         lat: 10,
    //   //         lng: 20,
    //   //       },
    //   //     },
    //   //     {
    //   //       title: 'New York Airport',
    //   //       text: 'McNamara Terminal Gate A18',
    //   //       schedule: 'Every day from 7am to 8pm',
    //   //       phone: '(1) 734 229 0042',
    //   //       isAirport: false,
    //   //       coords: {
    //   //         lat: -100,
    //   //         lng: 20,
    //   //       },
    //   //     },
    //   //     {
    //   //       title: 'New York Airport',
    //   //       text: 'McNamara Terminal Gate A18',
    //   //       schedule: 'Every day from 7am to 8pm',
    //   //       phone: '(1) 734 229 0042',
    //   //       isAirport: false,
    //   //       coords: {
    //   //         lat: 100,
    //   //         lng: 20,
    //   //       },
    //   //     },
    //   //     {
    //   //       title: 'New York Airport',
    //   //       text: 'McNamara Terminal Gate A18',
    //   //       schedule: 'Every day from 7am to 8pm',
    //   //       phone: '(1) 734 229 0042',
    //   //       isAirport: false,
    //   //       coords: {
    //   //         lat: 10,
    //   //         lng: -20,
    //   //       },
    //   //     },
    //   //     {
    //   //       title: 'New York Airport',
    //   //       text: 'McNamara Terminal Gate A18',
    //   //       schedule: 'Every day from 7am to 8pm',
    //   //       phone: '(1) 734 229 0042',
    //   //       isAirport: false,
    //   //       coords: {
    //   //         lat: 10,
    //   //         lng: -20,
    //   //       },
    //   //     },
    //   //   ])
    // })
    setResults([
      {
        isAirport: true,

        title: 'New York Airport',
        text: 'McNamara Terminal Gate A18',
        schedule: 'Every day from 7am to 8pm',
        phone: '(1) 734 229 0042',
        coords: {
          lat: 10,
          lng: 20,
        },
      },
      {
        title: 'New York Airport',
        text: 'McNamara Terminal Gate A18',
        schedule: 'Every day from 7am to 8pm',
        phone: '(1) 734 229 0042',
        isAirport: false,
        coords: {
          lat: -100,
          lng: 20,
        },
      },
      {
        title: 'New York Airport',
        text: 'McNamara Terminal Gate A18',
        schedule: 'Every day from 7am to 8pm',
        phone: '(1) 734 229 0042',
        isAirport: false,
        coords: {
          lat: 100,
          lng: 20,
        },
      },
      {
        title: 'New York Airport',
        text: 'McNamara Terminal Gate A18',
        schedule: 'Every day from 7am to 8pm',
        phone: '(1) 734 229 0042',
        isAirport: false,
        coords: {
          lat: 10,
          lng: -20,
        },
      },
      {
        title: 'New York Airport',
        text: 'McNamara Terminal Gate A18',
        schedule: 'Every day from 7am to 8pm',
        phone: '(1) 734 229 0042',
        isAirport: false,
        coords: {
          lat: 10,
          lng: -40,
        },
      },
      {
        title: 'New York Airport',
        text: 'McNamara Terminal Gate A18',
        schedule: 'Every day from 7am to 8pm',
        phone: '(1) 734 229 0042',
        isAirport: false,
        coords: {
          lat: 20,
          lng: -30,
        },
      },
      {
        title: 'New York Airport',
        text: 'McNamara Terminal Gate A18',
        schedule: 'Every day from 7am to 8pm',
        phone: '(1) 734 229 0042',
        isAirport: false,
        coords: {
          lat: 10,
          lng: 30,
        },
      },
    ])
  }

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    const s = document.querySelector('.retail-pop__container')
    if (!s) return
    ;(s as any).style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', function (e) {
      let vh = window.innerHeight * 0.01
      const s = document.querySelector('.retail-pop__container')
      if (!s) return
      ;(s as any).style.setProperty('--vh', `${vh}px`)
    })
  }, [])
  useEffect(() => {
    if (outSide) {
      GlobalState.locoScroll && GlobalState.locoScroll.start()
    }
  }, [outSide])

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

  return (
    <section className="retailer">
      <div
        className="retailer__container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <InViewComponent>
          <Title classStr="retailer__title" text={content?.title} />
        </InViewComponent>
        <InViewComponent delay={0.3}>
          <Text classStr="retailer__text" text={content?.text} />
        </InViewComponent>
      </div>

      <InViewComponent delay={0.5}>
        <div className="retail-pop__container">
          <div className="retail-pop__map">
            <div className={classNames('retail-pop__tooltip', show && 'show')}>
              <div
                className="retail-pop__tooltip-text"
                dangerouslySetInnerHTML={{ __html: content?.tooltip }}
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
            <Select
              placeholder={content?.placeholder}
              withSearch
              isLocate
              value={''}
              isSearchIcon
              dt={content?.locations}
            />
            {value.length ? (
              <div className="retail-pop__subtitle">
                {results?.length} “{value}” locations
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
      </InViewComponent>
    </section>
  )
})

export default RetailerContent
