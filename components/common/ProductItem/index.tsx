import { observer } from 'mobx-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import useScrollPos from '../../../hooks/useScrollPos'
import Button from '../Button'
import { IconComponent } from '../IconComponent'
import ImageComponent from '../ImageComponent'

const ProductItem = observer(
  ({ item, buttonText }: { item: any; buttonText: string }) => {
    const titleRef = useRef<any>(null),
      ref = useRef<any>(null),
      textRef = useRef<any>(null),
      contentRef = useRef<any>(null),
      imgRef = useRef<any>(null)

    const changeValues = () => {
      let titleHeight = 0,
        textHeight = 0
      if (titleRef.current) {
        const countLines = parseInt(
          getComputedStyle(titleRef.current).webkitLineClamp,
        )
        const lineHeight = parseInt(
          getComputedStyle(titleRef.current).lineHeight,
        )
        if (lineHeight * countLines >= titleRef.current.scrollHeight) {
          ;(titleRef.current as HTMLElement).style.minHeight = `${titleRef.current.scrollHeight}px`
          titleHeight = titleRef.current.scrollHeight
        } else {
          ;(titleRef.current as HTMLElement).style.minHeight = `${
            lineHeight * countLines
          }px`
          titleHeight = lineHeight * countLines
        }
        ref.current.style.setProperty('--title-height', titleHeight + 'px')
      }

      if (textRef.current) {
        const countLines = parseInt(
          getComputedStyle(textRef.current).webkitLineClamp,
        )
        const lineHeight = parseInt(
          getComputedStyle(textRef.current).lineHeight,
        )
        ;(textRef.current as HTMLElement).style.minHeight = `${
          lineHeight * countLines
        }px`
        textHeight = lineHeight * countLines

        ref.current.style.setProperty('--text-height', textHeight + 'px')
      }
    }

    useEffect(() => {
      if (window.innerWidth > 900) {
        changeValues()
        window.addEventListener('resize', () => {
          changeValues()
        })
      }
    }, [])

    const { x, y } = useScrollPos()

    const setPos = (x: number, y: number) => {
      sessionStorage.setItem('position', JSON.stringify({ x, y }))
    }
    return (
      <Link href={item.link}>
        <a className="product-item" ref={ref} onClick={() => setPos(0, y)}>
          <div className="product-item__img" ref={imgRef}>
            <ImageComponent src={item.img} />
          </div>
          <div className="product-item__content" ref={contentRef}>
            <div
              className="product-item__title"
              dangerouslySetInnerHTML={{ __html: item.title }}
              ref={titleRef}
            ></div>
            <div
              className="product-item__text"
              dangerouslySetInnerHTML={{ __html: item.text }}
              ref={textRef}
            ></div>
            <Button
              isLink
              link={item.link}
              inner={
                <>
                  {buttonText}
                  <IconComponent name={'arrow'} />
                </>
              }
              classStr="white button-arrow button-svg p16p20"
            />
          </div>
        </a>
      </Link>
    )
  },
)

export default ProductItem
