import { observer } from 'mobx-react'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'

const ProductAside = observer(({ content }: { content: any }) => {
  const translate = (scroll: any) => {
    const smooth = document.querySelector('.smooth'),
      container = document?.querySelector('.product-intro__container'),
      vect = document.querySelector('.product-intro__scroll')
    if (!smooth || !container || !vect) return

    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = container.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top,
      offsetBottom =
        offset + elemRect.height - vect.getBoundingClientRect().height
    if (scroll.y >= offset && scroll.y <= offsetBottom) {
      requestAnimationFrame(() => {
        ;(vect as HTMLElement).style.transform = `translate3d(0, ${
          scroll.y - offset
        }px, 0)`
      })
    } else if (scroll.y < offset) {
      requestAnimationFrame(() => {
        ;(vect as HTMLElement).style.transform = `translate3d(0, ${0}px, 0)`
      })
    }
  }

  useEffect(() => {
    if (
      window.innerWidth <= 1023 ||
      (window.innerWidth > 1023 && GlobalState.isTouch)
    )
      return


    if (!GlobalState.isTouch) {
      GlobalState.locoScroll &&
        GlobalState.locoScroll.on('scroll', ({ scroll }: any) => {
          translate(scroll)
        })
    } else {
      // window.addEventListener('scroll', () => {
      //   translate({
      //     y: window.scrollY,
      //   })
      // })
    }
  }, [GlobalState.locoScroll, GlobalState.isTouch])

  return <div className="product-intro__scroll">{content}</div>
})

export default ProductAside
