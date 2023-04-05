import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useMemo, useState } from 'react'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import InViewComponent from '../../../common/InViewComponent'
import Select from '../../../common/MainSelect'
import ServiceItem from '../../../common/ServiceItem'

const ServicesList = observer(() => {
  const { content, cards } = useContentState()

  const { width } = useWindowDimensions()
  const [filters, setFilters] = useState<any>({
    p1: null,
    p2: null,
    p3: null,
  })

  const services = useMemo(() => {
    let res: any = cards
    const params = content?.paramsForFilter

    if (!filters.p1?.length && !filters.p2?.length && !filters.p3?.length) {
      return res
    }
    if (filters.p1) {
      if (params[0] == 'time') {
        filters.p1.forEach((c: any) => {
          const vals = c
            .replace(/[^0-9]/g, ' ')
            .trim()
            .split(' ')
            .filter((ci: any) => ci.length)
          if (c.includes('-')) {
            const sub = Array.from(res).filter((c: any) => {
              const r = c.time.filter((t: any) => t >= vals[0] && t <= vals[1])
              // +c.time[0] >= +vals[0] && +c.time[c.time.length - 1] <= +vals[1]
              if (r.length) {
                //.length
                return c
              }
            })
            res = sub
          } else {
            const sub = Array.from(res).filter((c: any) => {
              const r = c.time.filter((t: any) => t > vals[0]) //+c.time[c.time.length - 1] > +vals[0]

              if (r.length) {
                return c
              }
            })
            res = sub
          }
        })
      }
    }

    if (filters.p2) {
      if (params[1] == 'locations') {
        filters.p2.forEach((c: any) => {
          let sub = Array.from(res).filter((ci: any) => {
            if (ci.locations.includes(c)) {
              return ci
            }
          })
          res = sub
        })
      }
    }

    if (filters.p3) {
      res = Array.from(res)
      if (params[2] == 'bodyPart') {
        filters.p3.forEach((c: any) => {
          let sub = Array.from(res).filter((ci: any) => {
            if (ci.bodyPart.includes(c)) {
              return ci
            }
          })
          res = sub
        })
      }
      if (params[2] == 'serviceType') {
        filters.p3.forEach((c: any) => {
          res = Array.from(res).filter((ci: any) => {
            if (ci.serviceType.includes(c)) {
              return ci
            }
          })
        })
      }
    }
    return res
  }, [filters, cards, content?.paramsForFilter])

  return (
    <section className="services-list">
      <InViewComponent delay={width > 767 ? 0.5 : 0.5}>
        <div
          className={classNames(
            'services-list__selects',
            !content?.select3?.length && 'two-selects',
          )}
        >
          <Select
            placeholder={content?.select1Title}
            dt={JSON.parse(
              JSON.stringify(content?.select1),
            ).sort((a: any, b: any) => a.localeCompare(b))}
            multiple
            getValue={(value) => {
              setFilters({
                ...filters,
                p1: value,
              })
            }}
          />
          <Select
            multiple
            placeholder={content?.select2Title}
            dt={JSON.parse(
              JSON.stringify(content?.select2),
            ).sort((a: any, b: any) => a.localeCompare(b))}
            getValue={(value) => {
              setFilters({
                ...filters,
                p2: value,
              })
            }}
          />
          {content?.select3?.length > 0 && (
            <Select
              multiple
              placeholder={content?.select3Title}
              dt={JSON.parse(
                JSON.stringify(content?.select3),
              ).sort((a: any, b: any) => a.localeCompare(b))}
              getValue={(value) => {
                setFilters({
                  ...filters,
                  p3: value,
                })
              }}
            />
          )}
        </div>
      </InViewComponent>
      <div className="services-list__list">
        {services?.map((ca: any, i: number) => {
          let delay = 0
          delay = i == 1 ? 0.6 + 0.1 : 0

          if (!i) {
            delay = 0.6
          }
          if (i > 1) {
            delay = !((i + 1) % 2) ? 0.1 : 0
          }
          return (
            <InViewComponent key={i} delay={width > 767 ? delay : 0}>
              <ServiceItem item={ca} />
            </InViewComponent>
          )
        })}
      </div>
    </section>
  )
})

export default ServicesList
