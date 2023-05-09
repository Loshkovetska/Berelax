import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useRef } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState, { resetScrollPos } from '../../../../stores/GlobalState'
import CustomSlider from '../../../common/CustomSlider'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'

const Categories = ({
  isFixed = false,
  isTreats = true,
}: {
  isFixed?: boolean
  isTreats?: boolean
}) => {
  const { content } = useContentState()

  const { asPath } = useRouter()
  useEffect(() => {
    if (!isFixed) {
      const smooth = document.querySelector('.smooth')
      if (!smooth) return

      const el = document.querySelector('.treat-cats:not(.fixed)')
      const fixedEl = document.querySelector('.treat-cats.fixed')

      const rectBottom = (el as HTMLElement).getBoundingClientRect().bottom
      const offset = rectBottom - smooth.getBoundingClientRect().top

      GlobalState.locoScroll &&
        GlobalState.locoScroll.on('scroll', ({ scroll }: any) => {
          const header = document.querySelector('.header.fixed')
          if (!header) return
          if (scroll.y >= offset) {
            if (!header.classList.contains('show')) {
              fixedEl?.classList.add('show')
            } else fixedEl?.classList.remove('show')
          } else fixedEl?.classList.remove('show')
        })
    }
  }, [GlobalState.locoScroll, isFixed])

  return (
    <section
      className={classNames(
        'treat-cats',
        isFixed && 'fixed',
        isTreats && 'treats',
      )}
    >
      <div className="treat-cats__container">
        {content?.categories?.map((ci: any, i: number) => (
          <Fragment key={i}>
            {isFixed ? (
              <a
                className={classNames(
                  'treat-cats__item',
                  asPath.includes(ci.link) && 'active',
                )}
                onClick={resetScrollPos}
                href={ci.link}
              >
                <span> {ci.title}</span>
                <ImageComponent src={ci?.img} alt={ci?.alt} />
              </a>
            ) : (
              <InViewComponent animationClass="zoomin" delay={i * 0.1}>
                <a
                  className={classNames(
                    'treat-cats__item',
                    asPath.includes(ci.link) && 'active',
                  )}
                  onClick={resetScrollPos}
                  href={ci.link}
                >
                  <span> {ci.title}</span>
                  <ImageComponent src={ci?.img} alt={ci?.alt} />
                </a>
              </InViewComponent>
            )}
          </Fragment>
        ))}
      </div>
      <div className="treat-cats__slider">
        <CustomSlider
          slidesToShow={1}
          slidesToScroll={1}
          infinite={false}
          variableWidth
        >
          {content?.categories?.map((ci: any, i: number) => (
            <Fragment key={i}>
              {isFixed ? (
                <a
                  className={classNames(
                    'treat-cats__item',
                    asPath.includes(ci.link) && 'active',
                  )}
                  href={ci.link}
                >
                  <span> {ci.title}</span>
                  <ImageComponent src={ci?.img} alt={ci?.alt} />
                </a>
              ) : (
                <InViewComponent animationClass="zoomin" delay={i * 0.1}>
                  <a
                    className={classNames(
                      'treat-cats__item',
                      asPath.includes(ci.link) && 'active',
                    )}
                    href={ci.link}
                  >
                    <span> {ci.title}</span>
                    <ImageComponent src={ci?.img} alt={ci?.alt} />
                  </a>
                </InViewComponent>
              )}
            </Fragment>
          ))}
        </CustomSlider>
      </div>
    </section>
  )
}

export default observer(Categories)
