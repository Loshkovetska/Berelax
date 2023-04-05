import { observer } from 'mobx-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useWindowDimensions } from '../../../hooks/getWindowDimensions'
import useScrollPos from '../../../hooks/useScrollPos'
import Button from '../Button'
import { IconComponent } from '../IconComponent'
import ImageComponent from '../ImageComponent'

const ServiceItem = observer(({ item }: any) => {
  const ref = useRef<any>(null)
  const { width } = useWindowDimensions()
  const getTime = (time: any) => {
    if (time.length == 1) {
      return `${time[0]} minutes`
    }
    const first = time[0],
      last = time[time.length - 1]
    return `${first}-${last} minutes`
  }

  useEffect(() => {
    if (width < 1024) return
    if (!ref.current) return
    const countLines = parseInt(getComputedStyle(ref.current).webkitLineClamp)
    const lineHeight = parseInt(getComputedStyle(ref.current).lineHeight)

    ;(ref.current as HTMLElement).style.height = `${lineHeight * countLines}px`
  }, [width])

  const { x, y } = useScrollPos()

  const setPos = (x: number, y: number) => {
    sessionStorage.setItem('position', JSON.stringify({ x, y }))
  }

  return (
    <>
      {width > 480 ? (
        <a
          className="service-item"
          href={`${item.link}`}
          onMouseEnter={() => {
            if (width < 1024) return
            if (!ref.current) return
            const height = (ref.current as HTMLElement).scrollHeight
            requestAnimationFrame(() => {
              ;(ref.current as HTMLElement).style.height = `${height}px`
            })
          }}
          onClick={() => setPos(0, y)}
          onMouseLeave={() => {
            if (width < 1024) return
            if (!ref.current) return
            const countLines = parseInt(
              getComputedStyle(ref.current).webkitLineClamp,
            )
            const lineHeight = parseInt(
              getComputedStyle(ref.current).lineHeight,
            )
            requestAnimationFrame(() => {
              ;(ref.current as HTMLElement).style.height = `${
                lineHeight * countLines
              }px`
            })
          }}
        >
          <div className="service-item__img">
            <ImageComponent src={item.img} alt={item.alt} />
          </div>
          <div className="service-item__content">
            <div className="service-item__content-top">
              <div className="service-item__content-time">
                {getTime(item.time)}
              </div>
              <div className="service-item__content-title">{item.title}</div>
              <div
                className="service-item__content-text"
                ref={ref}
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></div>
            </div>
            <Button
              classStr="beige button-search"
              isLink
              link={item.link}
              inner={
                <>
                  <IconComponent name="arrow" />
                </>
              }
            />
          </div>
        </a>
      ) : (
        <a className="service-item2" href={`${item.link}`}>
          <div className="service-item2__img">
            <ImageComponent src={item.img} alt={item.alt} />
            <div className="service-item2__time">
              <IconComponent name={'news/duration'} />

              {getTime(item.time).replaceAll('minutes', 'min')}
            </div>
          </div>
          <div className="service-item2__content">
            <div className="service-item2__title">{item.title}</div>

            <Button
              classStr="white button-arrow button-svg"
              isLink
              link={item.link}
              inner={
                <>
                  See Details
                  <IconComponent name="arrow" />
                </>
              }
            />
          </div>
        </a>
      )}
    </>
  )
})

export default ServiceItem
