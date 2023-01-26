import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState from '../../../../stores/GlobalState'
import InViewComponent from '../../../common/InViewComponent'
import Select from '../../../common/MainSelect'
import OfferItem from '../../../common/OfferItem'
import Title54 from '../../../common/Title54'

const Offers = observer(() => {
  const [results, setResults] = useState(Array())
  const [filters, setFilters] = useState<any>({
    p1: null,
    p2: null,
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

  useEffect(() => {
    if (content?.offers && !filters.p1) {
      setFilters({
        ...filters,
        p1: content?.offers?.select1[0],
      })
    }
  }, [content])

  useEffect(() => {
    let res: any = cards
    if (filters.p1) {
      if (!filters.p1.includes('All')) {
        res = res.filter((r: any) => r.type == filters.p1)
      }
    }
    if (filters.p2) {
      res = res.filter((r: any) => r.location == filters.p2)
    }

    setResults(res)
  }, [filters])

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
              placeholder={''}
              dt={JSON.parse(
                JSON.stringify(content?.offers?.select1),
              ).sort((a: any, b: any) => a.localeCompare(b))}
              multiple={false}
              defaultValue={filters.p1 || ''}
              getValue={(value) => {
                setFilters({
                  ...filters,
                  p1: value,
                })
              }}
            />
            <Select
              multiple={false}
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
