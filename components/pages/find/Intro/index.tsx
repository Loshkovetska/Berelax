import classNames from 'classnames'
import { observable, runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import InViewComponent from '../../../common/InViewComponent'
import Map from '../../../common/Map'
import Select from '../../../common/Select'
import Title from '../../../common/Title'

export const FindTabState = observable({
  tab: 0,
  location: null,
})

const Intro = observer(() => {
  const router = useRouter()
  const ctx = useContentState()
  const { content } = ctx
  const [zoom, setZoom] = useState(1)
  const [localeCat, setCat] = useState<any>(null)

  const searchLocs = (airport: any, list: Array<any>) => {
    if (typeof airport != 'string') return
    list?.forEach((p: any) => {
      const loc = p.list?.find((di: any) => di.skyCat?.slug == airport)
      if (loc) {
        setCat(loc)
        return
      }
    })
  }

  useEffect(() => {
    if (router.query?.airport && ctx.airports) {
      searchLocs(router.query.airport, ctx.airports)
    }

    if (!router.query?.airport && ctx.airports) {
      let airport = sessionStorage.getItem('airport')
      if (airport) {
        airport = JSON.parse(airport)

        if (airport) {
          setTimeout(() => {
            searchLocs(airport, ctx.airports)
            sessionStorage.removeItem('airport')
          }, 200)
        }
      }
    }
  }, [router.query, ctx.airports])

  return (
    <section className="find-intro">
      <InViewComponent>
        <div className="find-intro__top">
          <Title text={content?.title} classStr="find-intro__title" />

          <div
            className="find-intro__text"
            dangerouslySetInnerHTML={{ __html: content?.text }}
          ></div>
          <Select
            placeholder={content?.selectPlaceholder}
            dt={ctx?.airports}
            value={''}
            isLocate
            isFindUs={true}
            findUsValue={localeCat}
          />
        </div>
      </InViewComponent>
      <InViewComponent>
        <div className="find-intro__tabs">
          {content?.tabs?.map((ta: any, i: number) => (
            <div
              className={classNames(
                'find-intro__tab',
                FindTabState.tab == i && 'active',
              )}
              onClick={() => {
                runInAction(() => {
                  FindTabState.tab = i
                })
              }}
              key={i}
            >
              {ta}
            </div>
          ))}
        </div>
      </InViewComponent>
      {ctx?.airports && ctx?.airports.length ? (
        <Map coords={ctx?.airports} zoom={zoom} />
      ) : (
        <></>
      )}
    </section>
  )
})

export default Intro
