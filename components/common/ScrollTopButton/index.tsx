import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import GlobalState from '../../../stores/GlobalState'
import { IconComponent } from '../IconComponent'

const ScrollTopButton = observer(() => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!GlobalState.isTouch) {
      GlobalState.locoScroll &&
        GlobalState.locoScroll.on('scroll', (args: any) => {
          if (args.scroll.y > 150) {
            setShow(true)
          } else setShow(false)
        })
    } else {
      window.addEventListener('scroll', (e) => {
        if (window.scrollY > 150) {
          setShow(true)
        } else setShow(false)
      })
    }
  }, [GlobalState.locoScroll, GlobalState.isTouch])
  return (
    <div
      className={classNames(
        'scroll-button',
        show && 'show',
        GlobalState.isTouch && 'visible',
      )}
      onClick={() => {
        if (!GlobalState.isTouch) {
          GlobalState.locoScroll && GlobalState.locoScroll.scrollTo(0, 0)
        } else
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
      }}
    >
      <IconComponent name={'ic'} />
    </div>
  )
})

export default ScrollTopButton
