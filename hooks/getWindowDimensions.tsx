import { runInAction } from 'mobx'
import { useEffect, useState } from 'react'
import GlobalState from '../stores/GlobalState'

export const useWindowDimensions = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)



  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    window.addEventListener('resize', () => {
      GlobalState.locoScroll && (GlobalState.locoScroll as any).update(),
        setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    })
  }, [GlobalState.locoScroll])

  return {
    width,
    height,
  }
}
