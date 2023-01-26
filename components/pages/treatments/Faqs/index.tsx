import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import InViewComponent from '../../../common/InViewComponent'
const Faqs = observer(() => {
  const { content } = useContentState()
  const [active, setActive] = useState(-1)
  const refs = useRef<any>(Array())

  useEffect(() => {
    if (!refs.current) return
    refs.current.forEach((re: any, i: number) => {
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
  }, [active])
  return (
    <section className="faqs">
      <div className="faqs__container">
        <div className="faqs__col">
          <h2
            className="faqs__title"
            dangerouslySetInnerHTML={{ __html: content?.faq?.title }}
          ></h2>
          <Button
            classStr="white button-arrow button-svg p24"
            isLink
            link={content?.faq?.link}
            inner={
              <>
                {content?.faq?.buttonTitle}
                <IconComponent name="arrow" />
              </>
            }
          />
        </div>
        <div className="faqs__list">
          {content?.faq?.list?.map((li: any, i: number) => (
            <InViewComponent key={i} delay={i * 0.1}>
              <div
                onClick={() => {
                  if (active == i) {
                    setActive(-1)
                  } else setActive(i)
                }}
                className={classNames('faqs__item', active == i && 'active')}
              >
                <div className="faqs__item-top">
                  <span className="faqs__item-title">{li.title}</span>
                  <IconComponent name={'arrow'} />
                </div>
                <div className="faqs__item-content">
                  <div
                    className="faqs__item-text"
                    ref={(r) =>
                      !refs.current.includes(r) && refs.current.push(r)
                    }
                    dangerouslySetInnerHTML={{ __html: li.text }}
                  ></div>
                </div>
              </div>
            </InViewComponent>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Faqs
