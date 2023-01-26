import { observer } from 'mobx-react'
import { Fragment, useEffect, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState from '../../../../stores/GlobalState'
import ImageComponent from '../../../common/ImageComponent'
import { BookingStep, UserData } from '../Steps'

const BookAside = observer(() => {
  const {
    content: { bookDetails },
  } = useContentState()

  const [scrollValue, setScroll] = useState<any>(0)

  const translate = (y: number) => {
    const smooth = document.querySelector('.smooth'),
      main = document?.querySelector('.book-steps'),
      container = document?.querySelector('.book-steps__content'),
      vect = document.querySelector('.book-aside')
    if (!smooth || !container || !vect || !main) return

    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = container.getBoundingClientRect(),
      mainRect = main.getBoundingClientRect(),
      offset = mainRect.top - bodyRect.top + 115,
      offsetBottom =
        offset + elemRect.height - vect.getBoundingClientRect().height
    if (BookingStep.tab == 1) {
      requestAnimationFrame(() => {
        ;(vect as HTMLElement).style.transform = `translate3d(0, ${0}px, 0)`
      })
      return
    }

    if (vect.getBoundingClientRect().height >= elemRect.height) {
      requestAnimationFrame(() => {
        ;(vect as HTMLElement).style.transform = `translate3d(0, ${0}px, 0)`
      })

      return
    }

    if (y >= offset && y <= offsetBottom) {
      requestAnimationFrame(() => {
        ;(vect as HTMLElement).style.transform = `translate3d(0, ${
          y - offset
        }px, 0)`
      })
    }
  }

  useEffect(() => {
    const aside = document.querySelector('.book-aside'),
      container = document.querySelector('.book-steps__content')

    if (!aside || !container) return
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          translate(scrollValue)
        }
      }
    })

    resizeObserver.observe(aside)
    resizeObserver.observe(container)
  }, [scrollValue])

  useEffect(() => {
    if (
      window.innerWidth <= 1023 ||
      (window.innerWidth > 1023 && GlobalState.isTouch)
    )
      return

    if (!GlobalState.isTouch) {
      GlobalState.locoScroll &&
        GlobalState.locoScroll.on('scroll', ({ scroll }: any) => {
          setScroll(scroll.y)
          translate(scroll.y)
        })
    } else {
      window?.addEventListener('scroll', (e: any) => {
        setScroll(window.scrollY)
        translate(window.scrollY)
      })
    }
  }, [GlobalState.locoScroll, GlobalState.isTouch])

  return (
    <aside className="book-aside">
      <div className="book-aside__title">{bookDetails?.title}</div>
      <div className="book-aside__img">
        {UserData.treatments.length ? (
          <ImageComponent src={UserData.treatments[0].img} />
        ) : (
          <></>
        )}
      </div>
      <div className="book-aside__row">
        <div className="book-aside__subtitle">{bookDetails?.locateTitle}</div>
        <div className="book-aside__text">
          {UserData.location ? (
            <>
              {UserData.location?.title}
              <br />
              {UserData.location?.text}
            </>
          ) : (
            ''
          )}
        </div>
      </div>
      {UserData.treatments.length ? (
        UserData.treatments?.map((tr, i) => (
          <Fragment key={i}>
            <div className="book-aside__row">
              <div className="book-aside__subtitle">
                {bookDetails?.treatTitle}
              </div>
              <div className="book-aside__text">{tr.name}</div>
            </div>
            <div className="book-aside__row">
              <div className="book-aside__subtitle">
                {bookDetails?.duratTitle}
              </div>
              <div className="book-aside__text">
                {tr.time} min - ${tr.price}
              </div>
            </div>
          </Fragment>
        ))
      ) : (
        <Fragment>
          <div className="book-aside__row">
            <div className="book-aside__subtitle">
              {bookDetails?.treatTitle}
            </div>
            <div className="book-aside__text"></div>
          </div>
          <div className="book-aside__row">
            <div className="book-aside__subtitle">
              {bookDetails?.duratTitle}
            </div>
            <div className="book-aside__text"></div>
          </div>
        </Fragment>
      )}
      <div className="book-aside__row">
        <div className="book-aside__subtitle">{bookDetails?.dateTitle}</div>
        <div className="book-aside__text">
          {UserData.date ? new Date(UserData.date).toLocaleDateString() : ''}
        </div>
      </div>
      <div className="book-aside__row">
        <div className="book-aside__subtitle">{bookDetails?.startTitle}</div>
        <div className="book-aside__text">{UserData.time}</div>
      </div>
    </aside>
  )
})

export default BookAside
