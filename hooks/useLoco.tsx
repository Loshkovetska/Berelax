import { useEffect, useState } from 'react'
import { runInAction } from 'mobx'
import GlobalState from '../stores/GlobalState'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useWindowDimensions } from './getWindowDimensions'
export default function useLocoScroll(start: boolean) {
  const { asPath: pathname } = useRouter()
  const { width } = useWindowDimensions()

  useEffect(() => {
    if (!start) return
    let locoScroll: any = null

    const load = async () => {
      if (!document) return
      const scrollEl = document.querySelector('.smooth')

      if (!scrollEl) return

      const LocomotiveScroll = (await import('locomotive-scroll')).default
      if (LocomotiveScroll) {
        locoScroll = new LocomotiveScroll({
          el: scrollEl,
          smooth: true,
          multiplier: 0.8,
          touchMultiplier: 2,
          elMobile: scrollEl,
          firefoxMultiplier: 60,
          getDirection: true,
          smartphone: {
            breakpoint: 0,
            smooth: false, //true
          },
          tablet: {
            breakpoint: 0,
            smooth: false, //true
          },
          reloadOnContextChange: true,
        })
        runInAction(() => {
          GlobalState.locoScroll = locoScroll
        })
      }
    }

    load()

    return () => {
      if (locoScroll) {
        locoScroll.destroy()
        locoScroll = null
        runInAction(() => {
          GlobalState.locoScroll = locoScroll
        })
      }
    }
  }, [start, pathname])
}
