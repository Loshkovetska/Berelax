import classNames from 'classnames'
import { observer } from 'mobx-react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { SliderState } from '../RoadMap'

const RoadMapYears = observer(({ list }: { list: any }) => {
  const ref = useRef<any>(null)
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    setSlide(SliderState.id)
  }, [SliderState.id])

  const getTranslate = (el: any) => {
    if (!el) return 0

    let string = getComputedStyle(el as any).transform
    const regex = /scale\([0-1]\)/gi
    let arr = string
      .replaceAll(regex, '')
      .replaceAll('(', '')
      .replaceAll(')', '')
      .replaceAll('matrix', '')
      .replaceAll('px', '')
      .split(',')
    return arr[0] == 'none' ? 0 : +arr[4]
  }

  const translate = (value: any) => {
    requestAnimationFrame(() => {
      ref.current.style.transform = `translate3d(-${value}px,0,0)`
    })
  }

  useEffect(() => {
    if (ref.current) {
      const lines = document.querySelectorAll('.roadmap__years-line')
      if (!lines) return
      const width = (ref.current as HTMLElement).scrollWidth
      const parentWidth = (ref.current as HTMLElement).parentElement!.getBoundingClientRect()
        .width
      const translateValue = getTranslate(ref.current)
      const diff = width - parentWidth
      const part = diff / (lines.length + 1)
      if (!slide) {
        translate(part * slide)
      } else translate(part * (slide + 1))

    }
  }, [slide])
  return (
    <div className="roadmap__years">
      <div className="roadmap__years-cont" ref={ref}>
        {list?.map((ye: any, id: number) => (
          <Fragment key={id}>
            <div
              className={classNames(
                'roadmap__years-item',
                id == slide && 'current',
              )}
              onClick={() => {
                SliderState.slider && (SliderState.slider as any).slickGoTo(id)
              }}
            >
              <div className="roadmap__years-year">{ye.year}</div>
              <div className="roadmap__years-point"></div>
            </div>
            {id + 1 != list?.length ? (
              <div className="roadmap__years-line"></div>
            ) : (
              <></>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
})

export default RoadMapYears
