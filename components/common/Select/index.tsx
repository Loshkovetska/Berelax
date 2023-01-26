import classNames from 'classnames'
import { observable, runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { Fragment, useEffect, useRef, useState } from 'react'
import useClickOutSide from '../../../hooks/ClickOutSide'
import { useWindowDimensions } from '../../../hooks/getWindowDimensions'
import GlobalState from '../../../stores/GlobalState'
import { UserData } from '../../pages/booking/Steps'
import { FindTabState } from '../../pages/find/Intro'
import { Airports } from '../../pages/find/PlacesList'
import Button from '../Button'
import { IconComponent } from '../IconComponent'

export const SelectState = observable({
  selected: null,
})

const Select = observer(
  ({
    placeholder,
    value,
    dt,
    isLocate = false,
    withSearch = true,
    isTimeSelect = false,
    isSearchIcon = false,
  }: {
    placeholder: string
    value: string
    dt: Array<any>
    isLocate: boolean
    withSearch?: boolean
    isTimeSelect?: boolean
    isSearchIcon?: boolean
  }) => {
    const [userLocation, setLocation] = useState<any>(null)
    const ref = useRef<any>(null)
    const outside = useClickOutSide(ref)
    const [val, setVal] = useState(value)
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<any>(null)
    const [list, setList] = useState(null)
    const getLocation = () => {
      const options = {
        enableHighAccuracy: true,
        timeout: 1000,
      }
      if (window.navigator && 'geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            setLocation({ lat: latitude, lng: longitude })
            setOpen(false)
          },
          () => {
            console.log('deny')
          },
          options,
        )
      }
    }

    const { width, height } = useWindowDimensions()
    useEffect(() => {
      if (outside) {
        setOpen(false)
      }
    }, [outside])

    useEffect(() => {
      if (!open) {
        setList(null)
        GlobalState.locoScroll && GlobalState.locoScroll.start()
      }
    }, [open])

    useEffect(() => {
      if (selected && isLocate) {
        const res: any = []
        dt.forEach((d) => {
          if (d.continent == selected?.continent && !selected?.title.length) {
            res.push(d)
            return
          }

          if (d.continent == selected?.continent && selected?.title.length) {
            const sublist = d.list.filter(
              (di: any) => di.title == selected?.title,
            )
            res.push({
              continent: d.continent,
              list: sublist,
            })
            return
          }
        })

        runInAction(() => {
          Airports.list = res
          SelectState.selected = selected
          FindTabState.location = res[0].list[0].locations
        })

        const smooth = document.querySelector('.smooth')
        const items = document.querySelector('.places')
        const header = document.querySelector('.header')
        if (!smooth || !items || !header) return

        if (width <= 900 && !FindTabState.tab) {
          GlobalState.locoScroll &&
            GlobalState.locoScroll.scrollTo(items, {
              offset: -header.getBoundingClientRect().height,
            })
        }
      }
      if (selected && isTimeSelect) {
        runInAction(() => {
          UserData.time = selected
        })
      }
    }, [selected, dt, width])

    useEffect(() => {
      if (!SelectState.selected && selected && isLocate) {
        setSelected(null)
      }
      if (!isLocate && selected && !UserData.time) {
        setSelected(null)
      }
    }, [SelectState.selected, UserData.time])

    const arrayMinDistance = (arr: any) => {
      return arr.reduce(function (p: any, v: any) {
        return p.distance < v.distance ? p : v
      })
    }

    const distance = (
      lat1: any,
      lon1: any,
      lat2: any,
      lon2: any,
      unit: any,
    ) => {
      var radlat1 = (Math.PI * lat1) / 180
      var radlat2 = (Math.PI * lat2) / 180
      var theta = lon1 - lon2
      var radtheta = (Math.PI * theta) / 180
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
      if (dist > 1) {
        dist = 1
      }
      dist = Math.acos(dist)
      dist = (dist * 180) / Math.PI
      dist = dist * 60 * 1.1515
      if (unit == 'K') {
        dist = dist * 1.609344
      }
      if (unit == 'N') {
        dist = dist * 0.8684
      }
      return dist
    }

    useEffect(() => {
      if (userLocation && isLocate) {
        const res: any = []
        const locations: any = []
        dt &&
          dt?.map((d) => {
            d?.list.forEach((el: any) => {
              locations.push(el)
            })
          })

        locations.forEach((lo: any) => {
          lo.distance = distance(
            userLocation?.lat,
            userLocation?.lng,
            lo?.locations.lat,
            lo?.locations.lng,
            'N',
          )
        })

        const min = arrayMinDistance(locations)

        dt &&
          dt?.map((d) => {
            const val = d?.list.filter((el: any) => el.title == min.title)
            if (val.length) {
              res.push({
                ...d,
                list: val,
              })
            }
          })

        runInAction(() => {
          Airports.list = res
        })
        const smooth = document.querySelector('.smooth')
        const items = document.querySelector('.places')
        const header = document.querySelector('.header')
        if (!smooth || !items || !header) return

        if (!GlobalState.isTouch) {
          GlobalState.locoScroll &&
            GlobalState.locoScroll.scrollTo(items, {
              offset: -header.getBoundingClientRect().height,
            })
        } else {
          window.scrollTo({
            top: items.getBoundingClientRect().top,
            behavior: 'smooth',
          })
        }
      }
    }, [dt, userLocation])
    useEffect(() => {
      if (val.length && isLocate && !selected) {
        const res: any = []
        dt &&
          dt?.map((d) => {
            d?.list?.map((li: any) => {
              if (
                li.title
                  .toLowerCase()
                  .slice(0, val.length)
                  .includes(val.toLowerCase().trim())
              ) {
                res.push(li)
              }
            })
          })
        setList(res)
      } else if (!val.length && isLocate) {
        setList(null)
      }
    }, [val])

    useEffect(() => {
      if (!selected && isTimeSelect) {
        setSelected(value)
      }
    }, [])

    return (
      <section className={classNames('loc-select', open && 'open')} ref={ref}>
        <div
          className="loc-select__top"
          onClick={() => {
            if (!open) {
              setOpen(true)
            }
          }}
        >
          {isTimeSelect && (
            <span className="loc-select__value">
              {selected ? selected : placeholder}
            </span>
          )}
          {!open && withSearch && (
            <span className="loc-select__value">
              {selected && selected?.title.length
                ? selected?.title
                : selected && !selected?.title.length
                ? selected?.continent
                : placeholder}
            </span>
          )}
          {open && withSearch && (
            <input
              value={val}
              placeholder={placeholder}
              className="loc-select__input"
              onChange={(e) => setVal(e.target.value)}
              autoFocus={open}
            />
          )}
          <Button
            inner={
              <>
                <IconComponent name={isSearchIcon ? 'Search' : 'ic'} />
              </>
            }
            classStr={classNames(
              'beige button-search',
              isSearchIcon ? 'search-btn' : '',
            )}
            isLink={false}
            action={() => setOpen(!open)}
          />
        </div>
        <div
          className="loc-select__list"
          onScroll={() => {
            GlobalState.locoScroll && GlobalState.locoScroll.stop()
          }}
          onMouseLeave={() =>
            GlobalState.locoScroll && GlobalState.locoScroll.start()
          }
        >
          {isLocate && !list && (
            <div className="locate-me" onClick={getLocation}>
              <IconComponent name="location-point 1" />
              Locate me
            </div>
          )}
          {isLocate && list && (
            <>
              {(list as any)
                ?.sort((a: any, b: any) => a.title.localeCompare(b.title))
                .map((li: any, id: number) => (
                  <div
                    className="loc-select__subitem"
                    key={id}
                    onClick={() => {
                      setSelected(li)
                      setVal(li.title)
                      setOpen(false)
                    }}
                  >
                    {li.title}
                  </div>
                ))}
            </>
          )}
          {isLocate &&
            !list &&
            dt?.map((d: any, i: number) => (
              <Fragment key={i}>
                <div
                  className="loc-select__item"
                  onClick={() => {
                    setSelected({
                      title: '',
                      continent: d.continent,
                    })
                    setVal(d.continent)
                    setOpen(false)
                  }}
                >
                  {d.continent}
                </div>
                <div className="loc-select__sublist">
                  {d.list
                    ?.sort((a: any, b: any) => a.title.localeCompare(b.title))
                    .map((li: any, id: number) => (
                      <div
                        className="loc-select__subitem"
                        key={id}
                        onClick={() => {
                          setSelected({
                            title: li.title,
                            continent: d.continent,
                          })
                          setVal(li.title)
                          setOpen(false)
                        }}
                      >
                        {li.title}
                      </div>
                    ))}
                </div>
              </Fragment>
            ))}
          {isTimeSelect &&
            dt
              ?.sort((a: any, b: any) => a.localeCompare(b))
              ?.map((d, i) => (
                <div
                  key={i}
                  className="loc-select__item"
                  onClick={() => {
                    setSelected(d)
                    setOpen(false)
                  }}
                >
                  {d}
                </div>
              ))}
        </div>
      </section>
    )
  },
)

export default Select
