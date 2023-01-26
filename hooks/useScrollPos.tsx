import { observable, runInAction } from 'mobx'
import { useEffect, useState } from 'react'
import GlobalState from '../stores/GlobalState'

export const ScrollPos = observable({
  top: 0,
})

const useScrollPos = () => {
  const [positions, setScroll] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    if (!GlobalState.isTouch) {
      GlobalState.locoScroll &&
        GlobalState.locoScroll.on('scroll', ({ scroll }: any) => {
          setScroll({
            x: scroll.x,
            y: scroll.y,
          })
          runInAction(() => {
            ScrollPos.top = scroll.y
          })
        })
    } else {
      window.addEventListener('scroll', () => {
        setScroll({
          x: window.scrollX,
          y: window.scrollY,
        })
        runInAction(() => {
          ScrollPos.top = window.scrollY
        })
      })
    }
  }, [GlobalState.locoScroll, GlobalState.isTouch])

  return {
    x: positions.x,
    y: positions.y,
  }
}

export default useScrollPos
