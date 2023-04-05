import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import CustomSlider from '../../../common/CustomSlider'
import { IconComponent } from '../../../common/IconComponent'
import InViewComponent from '../../../common/InViewComponent'
import Text from '../../../common/Text'
import Title from '../../../common/Title'

const Faq = observer(() => {
  const [tab, setTab] = useState(0)
  const { content } = useContentState()
  const [active, setActive] = useState(-1)
  const { width } = useWindowDimensions()

  useEffect(() => {
    const ars = document.querySelectorAll('.faq-page .faqs__item-text')
    if (!ars?.length) return
    ars.forEach((re: any, i: number) => {
      if (re) {
        if (active == i) {
          const height = (re as HTMLElement).scrollHeight
          requestAnimationFrame(() => {
            ;(re as HTMLElement).style.height = `${height}px`
          })
        } else {
          ;(re as HTMLElement).style.height = '0'
        }
      }
    })
  }, [active, tab])

  useEffect(() => {
    setActive(-1)
  }, [tab])

  return (
    <section className="faq-page">
      <div className="faq-page__container">
        <InViewComponent>
          <Title text={content?.title} classStr="faq-page__title" />
          <Text text={content?.text} classStr="faq-page__text" />
        </InViewComponent>

        <div className="faq-page__row">
          <div className="faq-page__tabs">
            {content?.list
              ?.map((l: any) => l.section)
              ?.map((li: any, i: number) => (
                <InViewComponent
                  delay={i * 0.1 + (width > 900 ? 0 : 0.5)}
                  key={i}
                  animationClass={width > 900 ? 'fadein' : 'apear'}
                >
                  <div
                    className={classNames(
                      'faq-page__tab',
                      i == tab && 'active',
                    )}
                    onClick={() => setTab(i)}
                  >
                    {li}
                  </div>
                </InViewComponent>
              ))}
          </div>
          <div className="faq-page__slider">
            <CustomSlider
              slidesToScroll={2}
              slidesToShow={2}
              infinite={false}
              variableWidth
            >
              {content?.list
                ?.map((l: any) => l.section)
                ?.map((li: any, i: number) => (
                  <InViewComponent
                    delay={i * 0.1 + (width > 900 ? 0 : 0.5)}
                    key={i}
                    animationClass={width > 900 ? 'fadein' : 'apear'}
                  >
                    <div
                      className={classNames(
                        'faq-page__tab',
                        i == tab && 'active',
                      )}
                      onClick={() => setTab(i)}
                    >
                      {li}
                    </div>
                  </InViewComponent>
                ))}
            </CustomSlider>
          </div>
          <InViewComponent delay={0.1}>
            <div className="faq-page__content">
              <div className="faqs__list">
                {content?.list &&
                  content?.list[tab]?.list?.map((li: any, i: number) => (
                    <InViewComponent key={i} delay={i * 0.1}>
                      <div
                        onClick={() => {
                          if (active == i) {
                            setActive(-1)
                          } else setActive(i)
                        }}
                        className={classNames(
                          'faqs__item',
                          active == i && 'active',
                        )}
                      >
                        <div className="faqs__item-top">
                          <span className="faqs__item-title">{li.title}</span>
                          <IconComponent name={'arrow'} />
                        </div>
                        <div className="faqs__item-content">
                          <div
                            className="faqs__item-text"
                            dangerouslySetInnerHTML={{ __html: li.text }}
                          ></div>
                        </div>
                      </div>
                    </InViewComponent>
                  ))}
              </div>
            </div>
          </InViewComponent>
        </div>
      </div>
    </section>
  )
})

export default Faq
