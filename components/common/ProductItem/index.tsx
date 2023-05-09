import { observer } from 'mobx-react'
import { useEffect, useRef } from 'react'
import useScrollPos from '../../../hooks/useScrollPos'
import Button from '../Button'
import { IconComponent } from '../IconComponent'
import ImageComponent from '../ImageComponent'
import { useRouter } from 'next/router'

const ProductItem = observer(
  ({ item, buttonText }: { item: any; buttonText: string }) => {
    const { asPath } = useRouter();
    const titleRef = useRef<any>(null),
      ref = useRef<any>(null),
      textRef = useRef<any>(null),
      contentRef = useRef<HTMLDivElement | null>(null),
      imgRef = useRef<any>(null)

    const changeValues = () => {
      let textHeight = 0

      if (textRef.current) {
        const countLines = parseInt(
          getComputedStyle(textRef.current).webkitLineClamp,
        )
        const lineHeight = parseInt(
          getComputedStyle(textRef.current).lineHeight,
        )
        textHeight = lineHeight * countLines
      }

      ref.current?.style.setProperty(
        '--content-height',
        titleRef.current.scrollHeight + textHeight + 'px',
      )
    }

    useEffect(() => {
      if (window.innerWidth > 900) {
        changeValues()

        window.addEventListener('resize', () => {
          changeValues()
        })
      }
    }, [item])

    const { x, y } = useScrollPos()

    const setPos = (x: number, y: number) => {
      sessionStorage.setItem('position', JSON.stringify({ x, y }))
      sessionStorage.setItem('position_page', asPath)
    }

    const img = {
      img: item.img,
      alt: item.alt,
    }

    return (
      <a
        className="product-item"
        ref={ref}
        onClick={() => setPos(0, y)}
        href={item.link}
      >
        <div className="product-item__img" ref={imgRef}>
          <ImageComponent src={img.img} alt={img.alt} />
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
    )
  },
)

export default ProductItem
