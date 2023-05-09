import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import { changeCalendarState } from '../../../../stores/GlobalState'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import Select from '../../../common/Select'
import { BookingStep, UserData } from '../Steps'

const ThirdScreen = observer(() => {
  const { content } = useContentState()

  const getDay = (date: string | null, location: typeof UserData.location) => {
    if (!date || !location) return []

    const day = new Date(date).toLocaleString('en', {
      weekday: 'short',
    })

    const timeData = JSON.parse(JSON.stringify(location.time))

    const times = timeData.find((c: any) => c.day == day)

    if (times) {
      return times?.time
    }
    return []
  }

  return (
    <div className={classNames('first-step')}>
      <div className="book-steps__container pt32">
        <div
          className="first-step__back"
          onClick={() => {
            runInAction(() => {
              BookingStep.show = false
            })

            setTimeout(() => {
              BookingStep.tab = 0
            }, 600)
          }}
        >
          <IconComponent name={'ic'} />
          <span>
            {content?.backTitle} {content?.tabs[BookingStep.tab - 1].title}
          </span>
        </div>
        <div
          className="book-steps__title"
          dangerouslySetInnerHTML={{ __html: content?.block3?.title }}
        ></div>
        <div
          className="book-steps__text"
          dangerouslySetInnerHTML={{ __html: content?.block3?.text }}
        ></div>
        <div className="book-steps__selects">
          <section className={classNames('loc-select')}>
            <div className="loc-select__top">
              <span className="loc-select__value">
                {UserData?.date
                  ? new Date(UserData.date).toLocaleDateString()
                  : content?.block3?.datePlaceholder}
              </span>

              <Button
                inner={
                  <>
                    <IconComponent name="socials/calendar" />
                  </>
                }
                classStr="beige button-search"
                isLink={false}
                action={changeCalendarState}
              />
            </div>
          </section>

          <Select
            isLocate={false}
            isTimeSelect={true}
            withSearch={false}
            placeholder={content?.block3?.timePlaceholder}
            value={UserData.time || ''}
            dt={getDay(UserData.date, UserData.location)}
          />
        </div>
        <Button
          classStr={classNames(
            'beige button-arrow button-svg p20p40',
            (!UserData.date || !UserData.time) && 'disabled',
          )}
          isLink={false}
          action={() => {
            runInAction(() => {
              BookingStep.show = false
            })
            setTimeout(() => {
              BookingStep.tab = 2
            }, 600)
          }}
          inner={
            <>
              {content?.block3?.buttonTitle}
              <IconComponent name="arrow" />
            </>
          }
        />
      </div>
    </div>
  )
})

export default ThirdScreen
