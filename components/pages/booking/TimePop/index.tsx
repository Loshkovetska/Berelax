import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState, { changeTimeState } from '../../../../stores/GlobalState'
import { UserData } from '../Steps'

const TimePop = observer(() => {
  const { content } = useContentState()
  const card = GlobalState?.cardTime
  return (
    <section
      className={classNames('time-pop', GlobalState.isTimePop && 'open')}
      onClick={() => changeTimeState(card)}
    >
      <div className="time-pop__container" onClick={(e) => e.stopPropagation()}>
        <div className="time-pop__title">{content?.popDurationTitle}</div>
        <div className="time-pop__list">
          {card?.price?.map((p: any, i: number) => (
            <div
              className="time-pop__item"
              key={i}
              onClick={() => {
                let treats = JSON.parse(JSON.stringify(UserData.treatments))

                treats = treats.map((tr: any, i: number) => {
                  if (tr.id == card.id) {
                    tr.time = p.time
                    tr.price = p.amount
                  }
                  return tr
                })
                runInAction(() => {
                  UserData.treatments = treats
                })
                changeTimeState(card)
              }}
            >
              {p.time} mins - ${p.amount}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default TimePop
