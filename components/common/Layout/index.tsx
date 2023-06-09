import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect, useRef } from 'react'
import GlobalState from '../../../stores/GlobalState'
import { UserData } from '../../pages/booking/Steps'
import Categories from '../../pages/treatcat/Categories'
import Cookie from '../Cookie'
import CountryPop from '../CountryPop'
import CursorBall from '../CursorBall'
import Footer from '../Footer'
import Header from '../Header'
import Menu from '../Menu'
import MusicBox from '../MusicBox'
import ScrollTop from '../ScrollTop'
import ScrollTopButton from '../ScrollTopButton'
import SearchBox from '../SearchBox'
import { isMobile, isTablet } from 'react-device-detect'
const Layout = observer(
  ({
    children,
    isMain = false,
    isTreatCat = false,
    delay = 2,
    isTreats = true,
    withFooter = true,
    isTransparentHeader = false,
  }: {
    children: Array<ReactNode> | ReactNode
    isMain?: boolean
    isTreatCat?: boolean
    delay?: number
    isTreats?: boolean
    withFooter?: boolean
    isTransparentHeader?: boolean
  }) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const router = useRouter()

    const isTouch = () => {
      return isTablet || isMobile
    }

    const updateScroll = () => {
      const smooth = document.querySelector('.smooth')
      if (smooth && window.ResizeObserver) {
        const resizeObserver = new ResizeObserver((entries) => {
          for (const entry of entries) {
            if (entry.contentBoxSize) {
              GlobalState.locoScroll && GlobalState.locoScroll.update()
            }
          }
        })
        resizeObserver.observe(smooth)
      }
    }
    useEffect(() => {
      setTimeout(() => {
        updateScroll()
      }, 3000)
    }, [])

    useEffect(() => {
      runInAction(() => {
        GlobalState.isMenuOpen = false
        UserData.date = null
      })
    }, [router.asPath])

    useEffect(() => {
      runInAction(() => {
        GlobalState.isTouch = isTouch()
      })

      if (isTouch()) {
        document.querySelector('html')?.classList.add('touch-device')
      } else document.querySelector('html')?.classList.remove('touch-device')
    }, [])

    return (
      <>
        <ScrollTop />

        <Header delay={delay} />
        <Menu />

        {isMain && <MusicBox />}
        {isTreatCat && <Categories isFixed isTreats={isTreats} />}

        <div className="smooth" ref={ref} data-scroll-container>
          <Header
            isAbsolute
            delay={delay}
            isTransparentHeader={isTransparentHeader}
          />
          {children}
          {withFooter && <Footer />}
        </div>
        {!GlobalState.isCountryOpen &&
          !GlobalState.isMenuOpen &&
          !GlobalState.isSearchOpen &&
          !GlobalState.isRetailerOpen && <ScrollTopButton />}
        <CountryPop />
        <CursorBall />
        <SearchBox />
        <Cookie />
        <canvas
          id="canvas"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0,
            visibility: 'hidden',
          }}
        />
      </>
    )
  },
)

export default Layout
