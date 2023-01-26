import { observer } from 'mobx-react'
import { useEffect, useRef } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import InViewComponent from '../../../common/InViewComponent'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import ImageComponent from '../../../common/ImageComponent'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'

const IntroVideo = observer(() => {
  const {
    content: { intro },
  } = useContentState()

  const { width } = useWindowDimensions()

  useEffect(() => {
    if (intro) {
      const scroll = document.querySelector('.intro__scroll')
      const smooth = document.querySelector('.smooth')
      const gallery = document.querySelector('.intro__gallery')
      const bigCol = document.querySelector('.intro__gallery-col.big')
      const video = document.querySelector('.intro__gallery-img.video')
      const imgBig = document.querySelector('.intro__gallery-img.b72')

      const galleryColsSmall = document.querySelectorAll(
        '.intro__gallery-col.small',
      )
      const galleryColsMiddle = document.querySelectorAll(
        '.intro__gallery-col.middle',
      )

      //----
      if (
        scroll &&
        smooth &&
        gallery &&
        bigCol &&
        video &&
        imgBig &&
        galleryColsSmall &&
        galleryColsMiddle
      ) {
        const v = video.querySelector('video'),
          img = video.querySelector('img')
        //----
        const height = gallery.getBoundingClientRect().height
        const bodyTop = smooth.getBoundingClientRect().top
        const rectTop = scroll.getBoundingClientRect().top
        const windowDiff = (window.innerHeight - height) / 2

        const offset = rectTop - bodyTop - windowDiff

        const bottom =
          scroll.getBoundingClientRect().bottom - height - windowDiff
        const columnGap = 32 / (window.innerWidth / 100)

        if (!GlobalState.isTouch) {
          GlobalState.locoScroll &&
            (GlobalState.locoScroll as any).on('scroll', ({ scroll }: any) => {
              if (window.innerWidth >= 1024) {
                if (scroll.y < offset) {
                  requestAnimationFrame(() => {
                    ;(gallery as HTMLElement).style.transform = `translate3d(0, ${0}px, 0)`
                    ;(bigCol as HTMLElement).style.clipPath = `
                 inset(18% 23% round 72px)`
                    ;(galleryColsSmall[0] as HTMLElement).style.transform = `translate3d(${0}px,0,0)`
                    ;(galleryColsSmall[1] as HTMLElement).style.transform = `translate3d(-${0}px,0,0)`
                    ;(galleryColsMiddle[0] as HTMLElement).style.transform = `translate3d(${0}px,0,0)`
                    ;(galleryColsMiddle[1] as HTMLElement).style.transform = `translate3d(-${0}px,0,0)`
                  })
                }

                if (scroll.y >= offset && scroll.y <= bottom) {
                  const diff = bottom - offset
                  const lastDiff = (scroll.y - offset) / diff
                  if (lastDiff >= 0.6) {
                    v?.classList.add('hidden')
                    img?.classList.remove('hidden')
                  } else {
                    v?.classList.remove('hidden')
                    img?.classList.add('hidden')
                  }

                  const marginMinus =
                    lastDiff * (16 + columnGap) < 16 + columnGap
                      ? lastDiff * (16 + columnGap)
                      : 16 + columnGap

                  requestAnimationFrame(() => {
                    ;(gallery as HTMLElement).style.transform = `translate3d(0, ${
                      scroll.y - offset >= 1500 ? 1500 : scroll.y - offset
                    }px, 0)`
                    ;(bigCol as HTMLElement).style.clipPath = `
                 inset(${18 - lastDiff * 18 < 0 ? 0 : 18 - lastDiff * 18}% ${
                      23 - lastDiff * 23 < 0 ? 0 : 23 - lastDiff * 23
                    }% round ${
                      78 - lastDiff * 48 < 48 ? 48 : 78 - lastDiff * 48
                    }px)`
                    ;(galleryColsSmall[0] as HTMLElement).style.transform = `translate3d(-${marginMinus}vw,0,0)`
                    ;(galleryColsSmall[1] as HTMLElement).style.transform = `translate3d(${marginMinus}vw,0,0)`
                    ;(galleryColsMiddle[0] as HTMLElement).style.transform = `translate3d(-${marginMinus}vw,0,0)`
                    ;(galleryColsMiddle[1] as HTMLElement).style.transform = `translate3d(${marginMinus}vw,0,0)`
                  })
                }
              }
              if (window.innerWidth < 1024) {
                const viewportMargin = window.innerWidth > 900 ? 32 : 16
                if (scroll.y < offset) {
                  requestAnimationFrame(() => {
                    ;(gallery as HTMLElement).style.transform = `translate3d(0, ${0}px, 0)`
                    ;(bigCol as HTMLElement).style.clipPath = `inset(${viewportMargin} round 48px)`
                  })
                }
                if (scroll.y >= offset && scroll.y <= bottom) {
                  const diff = bottom - offset
                  const lastDiff = (scroll.y - offset) / diff
                  if (lastDiff >= 0.8) {
                    v?.classList.add('hidden')
                    img?.classList.remove('hidden')
                  } else {
                    v?.classList.remove('hidden')
                    img?.classList.add('hidden')
                  }

                  const insetOffset =
                    viewportMargin - lastDiff * viewportMargin < 0
                      ? 0
                      : viewportMargin - lastDiff * viewportMargin

                  requestAnimationFrame(() => {
                    ;(gallery as HTMLElement).style.transform = `translate3d(0, ${
                      scroll.y - offset >= 1500 ? 1500 : scroll.y - offset
                    }px, 0)`
                    ;(bigCol as HTMLElement).style.clipPath = `inset(${insetOffset}px round ${
                      48 - lastDiff * 48 < 0 ? 0 : 48 - lastDiff * 48
                    }px)`
                  })
                }
              }
            })
        } else {
          window.addEventListener('scroll', () => {
            const scroll = {
              y: window.scrollY,
            }
            if (window.innerWidth >= 1024) {
              if (scroll.y < offset) {
                requestAnimationFrame(() => {
                  ;(gallery as HTMLElement).style.transform = `translate3d(0, ${0}px, 0)`
                  ;(bigCol as HTMLElement).style.clipPath = `
                 inset(18% 23% round 72px)`
                  ;(galleryColsSmall[0] as HTMLElement).style.transform = `translate3d(${0}px,0,0)`
                  ;(galleryColsSmall[1] as HTMLElement).style.transform = `translate3d(-${0}px,0,0)`
                  ;(galleryColsMiddle[0] as HTMLElement).style.transform = `translate3d(${0}px,0,0)`
                  ;(galleryColsMiddle[1] as HTMLElement).style.transform = `translate3d(-${0}px,0,0)`
                })
              }

              if (scroll.y >= offset && scroll.y <= bottom) {
                const diff = bottom - offset
                const lastDiff = (scroll.y - offset) / diff
                if (lastDiff >= 0.6) {
                  v?.classList.add('hidden')
                  img?.classList.remove('hidden')
                } else {
                  v?.classList.remove('hidden')
                  img?.classList.add('hidden')
                }

                const marginMinus =
                  lastDiff * (16 + columnGap) < 16 + columnGap
                    ? lastDiff * (16 + columnGap)
                    : 16 + columnGap

                requestAnimationFrame(() => {
                  ;(gallery as HTMLElement).style.transform = `translate3d(0, ${
                    scroll.y - offset >= 1500 ? 1500 : scroll.y - offset
                  }px, 0)`
                  ;(bigCol as HTMLElement).style.clipPath = `
                 inset(${18 - lastDiff * 18 < 0 ? 0 : 18 - lastDiff * 18}% ${
                    23 - lastDiff * 23 < 0 ? 0 : 23 - lastDiff * 23
                  }% round ${
                    78 - lastDiff * 48 < 48 ? 48 : 78 - lastDiff * 48
                  }px)`
                  ;(galleryColsSmall[0] as HTMLElement).style.transform = `translate3d(-${marginMinus}vw,0,0)`
                  ;(galleryColsSmall[1] as HTMLElement).style.transform = `translate3d(${marginMinus}vw,0,0)`
                  ;(galleryColsMiddle[0] as HTMLElement).style.transform = `translate3d(-${marginMinus}vw,0,0)`
                  ;(galleryColsMiddle[1] as HTMLElement).style.transform = `translate3d(${marginMinus}vw,0,0)`
                })
              }
            }
            if (window.innerWidth < 1024) {
              const viewportMargin = window.innerWidth > 900 ? 32 : 16
              if (scroll.y < offset) {
                requestAnimationFrame(() => {
                  ;(gallery as HTMLElement).style.transform = `translate3d(0, ${0}px, 0)`
                  ;(bigCol as HTMLElement).style.clipPath = `inset(${viewportMargin} round 48px)`
                })
              }
              if (scroll.y >= offset && scroll.y <= bottom) {
                const diff = bottom - offset
                const lastDiff = (scroll.y - offset) / diff
                if (lastDiff >= 0.8) {
                  v?.classList.add('hidden')
                  img?.classList.remove('hidden')
                } else {
                  v?.classList.remove('hidden')
                  img?.classList.add('hidden')
                }

                const insetOffset =
                  viewportMargin - lastDiff * viewportMargin < 0
                    ? 0
                    : viewportMargin - lastDiff * viewportMargin

                requestAnimationFrame(() => {
                  ;(gallery as HTMLElement).style.transform = `translate3d(0, ${
                    scroll.y - offset >= 1500 ? 1500 : scroll.y - offset
                  }px, 0)`
                  ;(bigCol as HTMLElement).style.clipPath = `inset(${insetOffset}px round ${
                    48 - lastDiff * 48 < 0 ? 0 : 48 - lastDiff * 48
                  }px)`
                })
              }
            }
          })
        }
      }
    }
  }, [intro, GlobalState.locoScroll, GlobalState.isTouch])

  if (width <= 1023) return <></>

  return (
    <InViewComponent delay={1.5}>
      <div className="intro__gallery-col big center">
        <div className="intro__gallery-img video b72">
          <video
            src={intro?.mainVideo.video}
            autoPlay
            muted
            poster={intro?.mainVideo.poster}
            playsInline
            loop
          >
            <source type="video/mp4" src={intro?.mainVideo.video} />
          </video>
          <ImageComponent src={intro?.mainImg} classStr="hidden intro-img" />
        </div>
      </div>
    </InViewComponent>
  )
})

export default IntroVideo
