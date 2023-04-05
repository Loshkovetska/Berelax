import { observer } from 'mobx-react'
import { useEffect, useMemo, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import InViewComponent from '../../../common/InViewComponent'
import Select from '../../../common/MainSelect'
import OfferItem from '../../../common/OfferItem'

const Offers = observer(() => {
  const [filters, setFilters] = useState<any>({
    p1: [],
    p2: [],
  })
  const { content, airports, cards } = useContentState()
  let list: any = []
  if (airports) {
    airports.forEach((a: any) => {
      a.list.forEach((li: any) => {
        list.push(li.title)
      })
    })
    list = Array.from(new Set(list)).sort((a: any, b: any) =>
      a.localeCompare(b),
    )
  }

  // useEffect(() => {
  //   if (content?.offers && !filters.p1?.length) {
  //     setFilters({
  //       ...filters,
  //       p1: content?.offers?.select1[0],
  //     })
  //   }
  // }, [content, filters])

  const results = useMemo(() => {
    let res: any = cards
    if (!filters.p1?.length && !filters.p2?.length) {
      return res
    }
    if (filters.p1) {
      filters.p1?.forEach((p: any) => {
        res = res.filter((r: any) => r.type == p)
      })
    }
    if (filters.p2) {
      filters.p2?.forEach((p: any) => {
        res = res.filter((r: any) => {
          const s = r.location.find((l: any) => l.post_title.includes(p))
          if (s) {
            return r
          }
        })
      })
    }

    return res
  }, [filters, cards])

  return (
    <section className="offers">
      <div className="offers__container">
        <InViewComponent>
          <h2
            dangerouslySetInnerHTML={{ __html: content?.offers?.title }}
            className="offers__title"
          ></h2>
        </InViewComponent>
        <InViewComponent delay={0.3}>
          <div className="offers__selects">
            <Select
              placeholder={content?.offers?.select1Placeholder}
              dt={JSON.parse(
                JSON.stringify(content?.offers?.select1),
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
              placeholder={content?.offers?.select2Placeholder}
              dt={list}
              getValue={(value) => {
                setFilters({
                  ...filters,
                  p2: value,
                })
              }}
            />
          </div>
        </InViewComponent>
        <div className="offers__list">
          {results?.map((re: any, i: number) => (
            <InViewComponent key={i} delay={i * 0.1}>
              <OfferItem item={re} buttonTitle={content?.offers?.buttonTitle} />
            </InViewComponent>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Offers
