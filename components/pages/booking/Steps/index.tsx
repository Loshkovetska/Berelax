import classNames from 'classnames'
import { observable, runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState from '../../../../stores/GlobalState'
import BookAside from '../BookAside'
import BookFinal from '../BookFinal'
import BookTab from '../BookTab'
import FirstStep from '../FirstStep'
import ForthStep from '../ForthStep'
import ThirdScreen from '../ThirdStep'

export type UserDataType = {
  location: any
  treatments: Array<{
    id: number | string
    time: number | string
    section: string
    img: string | null
    name: string
    price: number | string
  }>
  date: string | null
  time: string | null
  fname: string
  lname: string
  email: string
  phone: string
  addInfo: string
  check1: boolean
  check2: boolean
}

export const UserData: UserDataType = observable({
  location: null,
  treatments: [],
  date: null,
  time: null,
  fname: '',
  lname: '',
  email: '',
  phone: '',
  addInfo: '',
  check1: true,
  check2: true,
})

export const BookingStep = observable({
  tab: 0,
  show: false,
})

const BookingSteps = observer(() => {
  const { content } = useContentState()

  useEffect(() => {
    if (!GlobalState.isTouch) {
      GlobalState.locoScroll &&
        GlobalState.locoScroll.scrollTo(0, 0, {
          duration: 0,
          disableLerp: true,
        })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
    setTimeout(() => {
      runInAction(() => {
        BookingStep.show = true
      })
    }, 600)
  }, [BookingStep.tab, GlobalState.isTouch])

  useEffect(() => {
    if (!UserData.location) {
      if (localStorage.getItem('location')) {
        const loc = JSON.parse(localStorage.getItem('location')!)
        if (loc) {
          runInAction(() => {
            UserData.location = loc
          })
          localStorage.removeItem('location')
        }
      }
      if (localStorage.getItem('treatment')) {
        const treat = JSON.parse(localStorage.getItem('treatment')!)
        if (treat) {
          runInAction(() => {
            UserData.treatments = [treat]
          })
          localStorage.removeItem('treatment')
        }
      }
    }
  }, [])

  if (BookingStep.tab == 3) {
    return <BookFinal />
  }
  return (
    <section className={classNames('book-steps', BookingStep.show && 'show')}>
      <div className="book-steps__cont">
        <div className="book-steps__content">
          <div className="book-steps__tabs">
            {content?.tabs?.map((t: any, i: number) => (
              <BookTab
                key={i}
                isActive={BookingStep.tab == i}
                isDisable={
                  i == BookingStep.tab
                    ? true
                    : !i
                    ? false
                    : i == 1 && UserData.location && UserData.treatments.length
                    ? false
                    : i == 2 &&
                      UserData.location &&
                      UserData.treatments.length &&
                      UserData.date &&
                      UserData.time
                    ? false
                    : true
                }
                text={t.title}
                isFirst={!i}
                isLast={i + 1 == content?.tabs?.length}
                setTab={() => {
                  runInAction(() => {
                    BookingStep.show = false
                  })
                  setTimeout(() => {
                    runInAction(() => {
                      BookingStep.tab = i
                    })
                  }, 600)
                }}
              />
            ))}
          </div>
          {!BookingStep.tab && <FirstStep />}
          {BookingStep.tab == 1 && <ThirdScreen />}
          {BookingStep.tab == 2 && <ForthStep />}
        </div>
        <div className="book-steps__aside">
          <BookAside />
        </div>
      </div>
    </section>
  )
})

export default BookingSteps
