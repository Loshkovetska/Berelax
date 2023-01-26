import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import GlobalState from '../../../stores/GlobalState'

const ScrollTop = observer(() => {
  const router = useRouter()
  useEffect(() => {
    router.beforePopState(({ as }): any => {
      console.log(as, router.asPath)
      console.log('back')

      if (as !== router.asPath) {
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
        }, 600)
      }
      return true
    })

    return () => {
      router.beforePopState(() => true)
    }
  }, [router, GlobalState.locoScroll, GlobalState.isTouch])

  return <></>
})

export default ScrollTop
