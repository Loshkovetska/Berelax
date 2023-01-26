import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { useContentState } from '../../../hooks/RootStoreProvider'
import { DatePicker, RangePicker } from 'react-trip-date'
import { useWindowDimensions } from '../../../hooks/getWindowDimensions'
import classNames from 'classnames'
import GlobalState, { changeCalendarState } from '../../../stores/GlobalState'
import { runInAction } from 'mobx'
import { UserData } from '../../pages/booking/Steps'

const CustomCalendar = observer(
  ({
    beforeDate = false,
    afterDate = false,
  }: {
    beforeDate?: boolean
    afterDate?: boolean
  }) => {
    const [date, setDate] = useState('2022-12')

    const [after, setAfter] = useState('2022-12-21')
    const ref = useRef<any>(null)
    const { content } = useContentState()

    const { width, height } = useWindowDimensions()

    useEffect(() => {
      const actions = document.querySelectorAll('.calendar .action')
      if (actions) {
        actions.forEach((a) => {
          a &&
            (a.innerHTML = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.34375 5.64328L8.00042 11.3L13.6571 5.64328L12.7144 4.69995L8.00042 9.41462L3.28642 4.69995L2.34375 5.64328Z" fill="#13233B"/>
</svg>
`)
        })
      }
    }, [])

    useEffect(() => {
      const now = new Date()
      setDate(`${now.getFullYear()}-${now.getMonth() + 1}`)

      setAfter(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`)
    }, [])

    let addOpt: any = {}

    if (afterDate) {
      addOpt = {
        disabledAfterDate: after,
      }
    }


    return (
      <section
        className={classNames('calendar', GlobalState.isCalendar && 'open')}
        onClick={changeCalendarState}
      >
        <div
          className="calendar__container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="calendar__row">
            <DatePicker
              disabledBeforeToday={beforeDate}
              {...addOpt}
              initialMonthAndYear={date}
              onChange={(value) => {
                runInAction(() => {
                  UserData.date = value[0]
                })
                changeCalendarState()
              }}
              autoResponsive={false}
              numberOfMonths={width > 900 ? 2 : 1}
              numberOfSelectableDays={1}
            />
          </div>
          <div className="calendar__text">{content?.popCalendarText}</div>
        </div>
      </section>
    )
  },
)

export default CustomCalendar
