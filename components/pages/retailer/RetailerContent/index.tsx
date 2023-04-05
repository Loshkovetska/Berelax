import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useClickOutSide from '../../../../hooks/ClickOutSide'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import { retailerLocationsList } from '../../../../stores/ContentState'
import GlobalState from '../../../../stores/GlobalState'
import { IconComponent } from '../../../common/IconComponent'
import InViewComponent from '../../../common/InViewComponent'
import RetailerSelect from '../../../common/RetailerSelect'
import RetailMap from '../../../common/RetailMap'
import { LocationCard } from '../../../common/RetailPop'
import Select from '../../../common/Select'
import Text from '../../../common/Text'
import Title from '../../../common/Title'

const RetailerContent = observer(() => {
  const { content } = useContentState()
  const [results, setResults] = useState(Array())
  const [show, setShow] = useState(false)
  const [showAdd, setShowAdd] = useState(false)

  const [currentLocation, setLocation] = useState({
    lat: 40.866667,
    lng: 34.566667,
  })
  const [value, setState] = useState<any>(null)
  const { width } = useWindowDimensions()
  const ref = useRef<any>(null)
  const outSide = useClickOutSide(ref)
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
            <RetailerSelect
              placeholder={content?.placeholder}
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
                      currentLocation?.lat == re.coords?.lat &&
                      currentLocation?.lng == re.coords?.lng
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
