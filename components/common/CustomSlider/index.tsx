import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { Fragment, ReactElement, useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { useWindowDimensions } from '../../../hooks/getWindowDimensions'
import GlobalState from '../../../stores/GlobalState'
import { SliderState } from '../../pages/story/RoadMap'
import Button from '../Button'
import { IconComponent } from '../IconComponent'

const CustomSlider = observer(
  ({
    children,
    slidesToShow,
    slidesToScroll,
    variableWidth = false,
    autoPlay = false,
    setCurrent,
    showArrows = true,
    infinite = true,
    classSrtr = '',
  }: {
    children: Array<ReactElement>
    slidesToShow: number
    slidesToScroll: number
    variableWidth?: boolean
    autoPlay?: boolean
    setCurrent?: (value: number) => void
    showArrows?: boolean
    infinite?: boolean
    classSrtr?: string
  }) => {
    const [slide, setSlide] = useState(0)
    const { width } = useWindowDimensions()
    const ref = useRef<any>(null)
    const settings = {
      dots: true,
      speed: width > 480 ? 1000 : 500,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToScroll,
      arrows: false,
      variableWidth: variableWidth,
      autoplay: autoPlay,
      infinite: infinite,
      autoplaySpeed: 10000,
      pauseOnHover: false,
    }

    useEffect(() => {
      runInAction(() => {
        SliderState.slider = ref.current
        SliderState.id = 0
      })
    }, [])

    return (
      <Fragment>
        <section className={classNames('slider', classSrtr)}>
          {showArrows && (
            <Button
              isLink={false}
              classStr={classNames(
                'beige button-search',

                // !slide && 'hidden'
              )}
              action={() => {
                ref.current && ref.current.slickPrev()
              }}
              inner={
                <>
                  <IconComponent name={'arrow'} />
                </>
              }
            />
          )}
          <div
            className="slider__list"
            onTouchStart={() => {
              const html: HTMLHtmlElement | null = document.querySelector(
                'html',
              )
              if (html && GlobalState.isTouch) {
                html.style.overflow = 'hidden'
              }
            }}
            onTouchEnd={() => {
              const html: HTMLHtmlElement | null = document.querySelector(
                'html',
              )
              if (html && GlobalState.isTouch) {
                html.style.overflow = 'initial'
              }
            }}
          >
            <Slider
              {...settings}
              ref={ref}
              beforeChange={(index: number, newIndex: number) => {
                setCurrent && setCurrent(newIndex)
                runInAction(() => {
                  SliderState.id = newIndex
                })
              }}
              afterChange={(index: number) => {
                setSlide(index)
              }}
            >
              {children}
            </Slider>
          </div>
          {showArrows && (
            <Button
              isLink={false}
              action={() => {
                ref.current && ref.current.slickNext()
              }}
              classStr={classNames(
                'beige button-search',
                // slide * slidesToShow + 1 == children.length && 'hidden',
              )}
              inner={
                <>
                  <IconComponent name={'arrow'} />
                </>
              }
            />
          )}
        </section>
      </Fragment>
    )
  },
)

export default CustomSlider
