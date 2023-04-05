import classNames from 'classnames'
import { observable, runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import {
  useContentState,
  useRootStore,
} from '../../../../hooks/RootStoreProvider'
import InViewComponent from '../../../common/InViewComponent'
import { FindTabState } from '../Intro'
import PlaceCard from '../PlaceCard'

export const Airports = observable({
  list: [],
})

const PlacesList = observer(() => {
  const content = useContentState()
  const airports = content?.airports

  useEffect(() => {
    if (!Airports.list.length) {
      runInAction(() => {
        Airports.list = airports
      })
    }
  }, [airports])

  const { width } = useWindowDimensions()


  return (
    <section
      className={classNames(
        'places',
        width <= 900 && FindTabState.tab && 'none',
        width <= 480 && 'none',
      )}
    >
      {Airports.list?.map((a: any, i: number) => (
        <div className="places__row" key={i}>
          <InViewComponent>
            <h2 className="places__title">{a.continent}</h2>
          </InViewComponent>
          <div className="places__list">
            {a.list.map((li: any, id: number) => (
              <InViewComponent key={id} delay={0.5}>
                <PlaceCard card={li} />
              </InViewComponent>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
})

export default PlacesList
