import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ServiceCatType } from '../../../types'
import Button from '../Button'
import { IconComponent } from '../IconComponent'
import { useInView } from 'react-intersection-observer'
import ImageComponent from '../ImageComponent'
import Link from 'next/link'
import useScrollPos from '../../../hooks/useScrollPos'
import { useWindowDimensions } from '../../../hooks/getWindowDimensions'

const ServiceCat = observer(
  ({
    se,
    servicesBtn,
    isBig,
  }: {
    se: ServiceCatType
    servicesBtn: string
    isBig: boolean
  }) => {
    const { width } = useWindowDimensions()
    const [end, setEnd] = useState(false)
    const { asPath } = useRouter()
    const { ref, inView, entry } = useInView({
      threshold: 0,
    })
    useEffect(() => {
      if (!end) {
        setEnd(inView)
      }
    }, [inView, end])

    const { x, y } = useScrollPos()

    const setPos = (x: number, y: number) => {
      sessionStorage.setItem('position', JSON.stringify({ x, y }))
      sessionStorage.setItem('position_page', asPath)
    }

    return (
      <>
        {width > 480 ? (
          <a
            href={`${se.link}`}
            onClick={() => setPos(0, y)}
            className={classNames(
              'services__block',
              isBig && 'grow',
              end && 'animated',
            )}
            ref={ref}
          >
            <h2 className="services__title">{se.title}</h2>
            <ImageComponent src={se.img} alt={se.alt} />

            <Button
              isLink
              link={`${se.link}`}
              classStr="button-arrow button-svg white p24"
              inner={
                <>
                  {se.buttonText} <IconComponent name={'arrow'} />
                </>
              }
            />
          </a>
        ) : (
          <a
            href={`${se.link}`}
            onClick={() => setPos(0, y)}
            className={classNames('service-cat', end && 'animated')}
            ref={ref}
          >
            <div className="service-cat__img">
              <ImageComponent src={se.img} alt={se.alt} />
            </div>
            <div className="service-cat__content">
              <h2 className="service-cat__title">{se.title}</h2>

              <Button
                isLink
                link={`${se.link}`}
                classStr="button-arrow button-svg white p24"
                inner={
                  <>
                    {se.buttonText} <IconComponent name={'arrow'} />
                  </>
                }
              />
            </div>
          </a>
        )}
      </>
    )
  },
)

export default ServiceCat
