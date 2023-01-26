import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState from '../../../../stores/GlobalState'
import InViewComponent from '../../../common/InViewComponent'
import Select from '../../../common/MainSelect'
import ServiceItem from '../../../common/ServiceItem'

const ServicesList = observer(() => {
  const [services, setServices] = useState<Array<any> | null>(null)
  const { content, cards } = useContentState()

  const { width } = useWindowDimensions()
  const [filters, setFilters] = useState<any>({
    p1: null,
    p2: null,
    p3: null,
  })

  useEffect(() => {
    if (!services) {
      setServices(cards)
    }
  }, [cards])

  useEffect(() => {
    let res: any = cards
    const params = content?.paramsForFilter

    if (!filters.p1 && !filters.p2 && !filters.p3) {
      setServices(cards)
     
      return
    }
    if (filters.p1) {
      if (params[0] == 'time') {
        filters.p1.forEach((c: any) => {
          const vals = c.replaceAll('from', '').replaceAll('to', '').trim()
          const ars = vals.split(' ').filter((c: any) => c != '')

          if (c.includes('to') && c.includes('from')) {
            const sub = Array.from(res).filter((c: any) => {
              const r = c.time.filter((t: any) => t >= ars[0] && t <= ars[1])
              if (r.length) {
                return c
              }
            })
            res = sub
          }
          if (c.includes('to') && !c.includes('from')) {
            const sub = Array.from(res).filter((c: any) => {
              const r = c.time.filter((t: any) => t <= ars[0])
              if (r.length) {
                return c
              }
            })
            res = sub
          }

          if (!c.includes('to') && c.includes('from')) {
            const sub = Array.from(res).filter((c: any) => {
              const r = c.time.filter((t: any) => t >= ars[0])
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
          let sub = Array.from(res).filter((ci: any) => {
            if (ci.serviceType.includes(c)) {
              return ci
            }
          })
          res = sub
        })
      }
    }
    setServices(res)
   
  }, [filters])

  return (
    <section className="services-list">
      <InViewComponent delay={width > 767 ? 0.5 : 0.5}>
        <div className="services-list__selects">
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
