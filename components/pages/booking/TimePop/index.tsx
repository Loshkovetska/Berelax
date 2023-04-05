import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { Fragment } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState, { changeTimeState } from '../../../../stores/GlobalState'
import { UserData } from '../Steps'

const TimePop = observer(() => {
  const { content } = useContentState()
  const card = GlobalState?.cardTime
  let prices = []

  if (UserData.location) {
    prices = card?.prices.map((f: any) => {
      let amount = f.amount.find((a: any) =>
        a.country.includes(UserData.location.country),
      )
      return {
        time: f.time,
        amount: amount?.value + ' ' + amount?.currency,
      }
    })
  } else {
    prices = card?.prices.map((f: any) => {
      let amount = f.amount.find((a: any) =>
        a.country.includes('United State of America'),
      )
      if (!amount) {
        // amount = f.amount[0]
      }
      return {
        time: f.time,
        amount: amount?.currency + ' ' + amount?.value,
      }
    })
  }
  return (
    <section
      className={classNames('time-pop', GlobalState.isTimePop && 'open')}
      onClick={() => changeTimeState(card)}
    >
      <div className="time-pop__container" onClick={(e) => e.stopPropagation()}>
        <div className="time-pop__title">
          {!['nail-care', 'beauty'].includes(card?.category || '')
            ? content?.popDurationTitle
            : 'Choose'}
        </div>
        <div className="time-pop__list">
          {prices?.map((p: any, i: number) => {
            if (p.amount.includes('undefined')) {
              return <Fragment key={i}></Fragment>
            }
            return (
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
                {p.time}{' '}
                {!['nail-care', 'beauty'].includes(card?.category || '') &&
                  'mins'}{' '}
                - {p.amount}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default TimePop
