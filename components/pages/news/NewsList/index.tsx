import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState from '../../../../stores/GlobalState'
import { NewsType } from '../../../../types'
import Button from '../../../common/Button'
import InViewComponent from '../../../common/InViewComponent'
import Select from '../../../common/MainSelect'
import NewsPost from '../../../common/NewsPost'

const NewsList = observer(() => {
  const [results, setResults] = useState<Array<any>>(Array())
  const [showCount, setCount] = useState(6)
  const { content, cards } = useContentState()
  const [filters, setFilters] = useState<any>({
    p1: '',
    p2: '',
    p3: '',
  })

  useEffect(() => {
    let sel1 = '',
      sel2 = '',
      sel3 = ''
    if (content?.select1) {
      sel1 = content?.select1[0]
    }
    if (content?.select2) {
      sel2 = content?.select2[0]
    }
    if (content?.select3) {
      sel3 = content?.select3[0]
    }
    setFilters({
      ...filters,
      p1: sel1,
      p2: sel2,
      p3: sel3,
    })
  }, [])

  useEffect(() => {
    let res = cards

    if (filters.p1.length) {
      if (filters.p1.includes('New')) {
        const sub = res.sort(
          (r: NewsType, b: NewsType) =>
            new Date(b.datetime).getTime() - new Date(r.datetime).getTime(),
        )
        res = sub
      }
      if (filters.p1.includes('Popular')) {
        const sub = res.sort((r: NewsType, b: NewsType) => b.views - r.views)
        res = sub
      }
    }
    if (filters.p2.length) {
      if (filters.p2.includes('All')) {
        const sub = res
        res = sub
      } else {
        const sub = res.filter((r: NewsType) => r.cat == filters.p2)
        res = sub
      }
    }
    if (filters.p3.length) {
      if (filters.p3.includes('All')) {
        const sub = res
        res = sub
      } else {
        const sub = res.filter((r: NewsType) => {
          const tim1 = +r.readTime.replaceAll('min', '').replaceAll('s', '')
          const tim2 = +filters.p3.replaceAll('min', '').replaceAll('s', '')
          if (tim1 == tim2) return r
        })
        res = sub
      }
    }

    setResults(res)
    setCount(6)
   
  }, [filters, cards])

  return (
    <section className="news-list">
      <div className="news-list__container">
        <InViewComponent delay={0.3}>
          <div className="news-list__selects">
            <Select
              placeholder={''}
              dt={JSON.parse(
                JSON.stringify(content?.select1),
              ).sort((a: any, b: any) => a.localeCompare(b))}
              defaultValue={filters.p1}
              multiple={false}
              getValue={(value) => {
                if (!value.length) return

                setFilters({
                  ...filters,
                  p1: value,
                })
              }}
            />
            <Select
              multiple={false}
              placeholder={''}
              defaultValue={filters.p2}
              dt={JSON.parse(
                JSON.stringify(content?.select2),
              ).sort((a: any, b: any) => a.localeCompare(b))}
              getValue={(value) => {
                if (!value.length) return

                setFilters({
                  ...filters,
                  p2: value,
                })
              }}
            />
            <Select
              defaultValue={filters.p3}
              multiple={false}
              placeholder={''}
              dt={JSON.parse(
                JSON.stringify(content?.select3),
              ).sort((a: any, b: any) => a.localeCompare(b))}
              getValue={(value) => {
                if (!value.length) return
                setFilters({
                  ...filters,
                  p3: value,
                })
              }}
            />
          </div>
        </InViewComponent>
        <div className="news-list__list">
          {results?.slice(0, showCount).map((re, i) => (
            <InViewComponent key={i}>
              <NewsPost post={re} />
            </InViewComponent>
          ))}
        </div>

        <InViewComponent>
          <Button
            isLink={false}
            action={() => {
              setCount(showCount + 6)
            
            }}
            classStr={classNames(
              'beige p20p28',
              showCount >= results?.length && 'hidden',
            )}
            inner={<>{content?.loadButton}</>}
          />
        </InViewComponent>
      </div>
    </section>
  )
})

export default NewsList
