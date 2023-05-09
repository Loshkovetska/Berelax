import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import GlobalState from '../../../stores/GlobalState'
const ScrollTop = observer(() => {
  const router = useRouter()

  const scrollToPos = () => {
    setTimeout(() => {
      const pos = sessionStorage.getItem('position')
      if (!pos) return
      const posObj = JSON.parse(pos)
      if (!posObj) return
      if (!GlobalState.isTouch) {
        GlobalState.locoScroll &&
          GlobalState.locoScroll.scrollTo(posObj.y, {
            duration: 2000,
          })
      } else {
        window.scrollTo({
          top: posObj.y,
          behavior: 'smooth',
        })
      }
      sessionStorage.removeItem('position')
      sessionStorage.removeItem('position_page')
    }, 600)
  }

  useEffect(() => {
    let positionPage = sessionStorage.getItem('position_page')
    if (positionPage) {
      if (positionPage == router.asPath) {
        scrollToPos()
      }
    }

  }, [router, GlobalState.locoScroll, GlobalState.isTouch])

  return <></>
})

export default ScrollTop
