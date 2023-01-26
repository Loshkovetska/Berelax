import { observable, runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import { Airports } from '../PlacesList'
import { IconComponent } from '../../../common/IconComponent'
import classNames from 'classnames'
import Button from '../../../common/Button'
import Link from 'next/link'
import { FindTabState } from '../Intro'
import InViewComponent from '../../../common/InViewComponent'

const PlaceListMob = observer(() => {
  const [tab, setTab] = useState(0)
  const [selected, setSelected] = useState('')
  const [airport, setAirport] = useState({
    title: '',
    item: null,
  })
  const content = useContentState()
  const { width } = useWindowDimensions()
  const airports = content?.airports

  useEffect(() => {
    if (!Airports.list.length) {
      runInAction(() => {
        Airports.list = airports
      })
    }
  }, [airports])

  const getUnicList = (list: any) => {
    const res: any = []
    list.forEach((li: any) => {
      if (res.length) {
        const sub = res.filter((r: any) => r.title == li.title)
        if (!sub.length) {
          res.push(li)
        }
      } else res.push(li)
    })
    return res
  }

  const sublist: any = Airports.list.find((a: any) => a.continent == selected)
  let airp: any = []

  if (sublist) {
    airp = sublist?.list?.filter((a: any) => a.title == airport.title)
  }

  return (
    <section
      className={classNames(
        'find-block',
        width > 480 && 'none',
        width <= 480 && FindTabState.tab && 'none',
      )}
    >
      <InViewComponent>
        {tab > 0 && (
          <div className="find-block__tabs">
            {selected.length > 0 && (
              <div className="find-block__tab">
                <IconComponent
                  name={'ic'}
                  className="find-block__arrow left"
                  onClick={() => {
                    setTab(0)
                    setSelected('')
                    setAirport({
                      ...airport,
                      title: '',
                      item: null,
                    })
                  }}
                />
                &nbsp;&nbsp;
                {selected}
              </div>
            )}
            {airport.title.length > 0 && (
              <div className="find-block__tab">
                <IconComponent
                  name={'ic'}
                  className="find-block__arrow left"
                  onClick={() => {
                    setTab(1)
                    setAirport({
                      ...airport,
                      title: '',
                      item: null,
                    })
                  }}
                />
                &nbsp;&nbsp;
                {(airport?.item as any)?.shortTitle}
              </div>
            )}
          </div>
        )}
        <div className="find-block__sections">
          <div
            className={classNames(
              'find-block__section',
              !tab && 'show',
              tab && 'off',
            )}
          >
            {Airports.list?.map((ai: any, i: number) => (
              <div
                className="find-block__item"
                key={i}
                onClick={() => {
                  setTab(1)
                  setSelected(ai.continent)
                }}
              >
                <div className="find-block__item-left">
                  {ai.continent}&nbsp;<span>({ai.list.length})</span>
                </div>
                <IconComponent name={'ic'} className="find-block__arrow" />
              </div>
            ))}
          </div>
          <div
            className={classNames('find-block__section', tab == 1 && 'show')}
          >
            {sublist &&
              getUnicList(sublist?.list)?.map((ai: any, i: number) => (
                <div
                  className="find-block__item"
                  key={i}
                  onClick={() => {
                    setTab(2)
                    setAirport({
                      ...airport,
                      title: ai.title,
                      item: ai,
                    })
                  }}
                >
                  <div className="find-block__item-block">
                    <span>{ai.shortTitle}</span>
                    <div className="find-block__item-left">
                      {ai.title}&nbsp;
                      <span>
                        (
                        {
                          sublist?.list?.filter((a: any) => a.title == ai.title)
                            ?.length
                        }
                        )
                      </span>
                    </div>
                  </div>
                  <IconComponent name={'ic'} className="find-block__arrow" />
                </div>
              ))}
          </div>
          <div
            className={classNames('find-block__section', tab == 2 && 'show')}
          >
            {airp?.map((ai: any, i: number) => (
              <PlaceMob key={i} item={ai} />
            ))}
          </div>
        </div>
      </InViewComponent>
    </section>
  )
})

export default PlaceListMob

const PlaceMob = observer(({ item }: { item: any }) => {
  const content = useContentState()?.content
  const { cardBookBtn, cardDetails } = content
  const book = () => {
    localStorage.setItem('location', JSON.stringify(item))
    window.location.href = '/booking'
  }

  return (
    <div className="find-block__place">
      <div className="find-block__place-title">{item.title}</div>
      <div className="find-block__place-text">{item.text}</div>
      <div className="find-block__place-bottom">
        <Button
          classStr="button-arrow button-svg beige p8p16"
          inner={
            <>
              {cardBookBtn}
              <IconComponent name={'arrow'} />
            </>
          }
          isLink={false}
          action={book}
        />
        <Link href={`${item.link}`}>
          <a className="place-card__content-link">{cardDetails}</a>
        </Link>
      </div>
    </div>
  )
})
