import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import ImgBackground from '../../../common/ImgBackground'
import InViewComponent from '../../../common/InViewComponent'
import SocialLink from '../../../common/SocialLink'
import Text from '../../../common/Text'
import Title from '../../../common/Title'
import doc from '../../../../assets/news/doc.svg'
import loc from '../../../../assets/location-point 1.svg'
import calendar from '../../../../assets/news/calendar.svg'
import { IconComponent } from '../../../common/IconComponent'
import { getDateShortMonth } from '../../../../funcs/dates'
import Button from '../../../common/Button'
import Title54 from '../../../common/Title54'
import { useEffect } from 'react'
import GlobalState from '../../../../stores/GlobalState'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
const Intro = observer(() => {
  const { content } = useContentState()

  const translate = (scroll: any) => {
    const smooth = document.querySelector('.smooth'),
      main = document?.querySelector('.vacancy-intro__row'),
      vect = document.querySelector('.vacancy-intro__aside-scroll')
    if (!smooth || !vect || !main) return

    var bodyRect = smooth!.getBoundingClientRect(),
      elemRect = main.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top,
      offsetBottom =
        offset + elemRect.height - vect.getBoundingClientRect().height
    if (scroll.y < offset) {
      requestAnimationFrame(() => {
        ;(vect as HTMLElement).style.transform = `translate3d(0, ${-32}px, 0)`
      })
    }
    if (scroll.y >= offset - 32 && scroll.y <= offsetBottom) {
      requestAnimationFrame(() => {
        ;(vect as HTMLElement).style.transform = `translate3d(0, ${
          scroll.y - offset
        }px, 0)`
      })
    }
  }

  const { width } = useWindowDimensions()

  useEffect(() => {
    if (width <= 1023) return

    if (!GlobalState.isTouch) {
      GlobalState.locoScroll &&
        GlobalState.locoScroll.on('scroll', ({ scroll }: any) => {
          translate(scroll)
        })
    } else {
      window.addEventListener('scroll', () => {
        translate({
          y: window.scrollY,
        })
      })
    }
  }, [GlobalState.locoScroll, GlobalState.isTouch])
  return (
    <section className="vacancy-intro">
      <div className="vacancy-intro__container">
        <InViewComponent>
          <Title text={content?.title} classStr="vacancy-intro__title" />
          <Text text={content?.text} classStr="vacancy-intro__text" />
        </InViewComponent>
        <InViewComponent delay={1}>
          <ImgBackground src={content?.img} />
        </InViewComponent>
        <InViewComponent>
          <div className="vacancy-intro__row">
            <div className="vacancy-intro__content">
              <div className="vacancy-intro__content-block">
                <InViewComponent>
                  <Title54
                    text={content?.positionTitle}
                    classStr="vacancy-intro__content-title"
                  />
                  <Text
                    classStr="vacancy-intro__content-text"
                    text={content?.positionText}
                  />
                </InViewComponent>
              </div>

              <div className="vacancy-intro__content-block">
                <InViewComponent>
                  <Title54
                    text={content?.responsibilitiesTitle}
                    classStr="vacancy-intro__content-title"
                  />
                  <Text
                    classStr="vacancy-intro__content-text"
                    text={content?.responsibilitiesText}
                  />
                </InViewComponent>
              </div>

              <div className="vacancy-intro__content-block">
                <InViewComponent>
                  <Title54
                    text={content?.profileTitle}
                    classStr="vacancy-intro__content-title"
                  />
                  <Text
                    classStr="vacancy-intro__content-text"
                    text={content?.profileText}
                  />
                </InViewComponent>
              </div>
              <div className="vacancy-intro__content-block">
                <InViewComponent>
                  <Title54
                    text={content?.benefitsTitle}
                    classStr="vacancy-intro__content-title"
                  />
                  <Text
                    classStr="vacancy-intro__content-text"
                    text={content?.benefitsText}
                  />
                </InViewComponent>
              </div>
            </div>
            <aside className="vacancy-intro__aside">
              <div className="vacancy-intro__aside-scroll">
                <div className="vacancy-intro__aside-row">
                  <SocialLink
                    isClickable={false}
                    classStr="footer__socials-item"
                    icon={doc}
                  />
                  {content?.typeContract}
                </div>
                <div className="vacancy-intro__aside-row">
                  <SocialLink
                    isClickable={false}
                    classStr="footer__socials-item"
                    icon={loc}
                  />
                  {content?.location}
                </div>
                <div className="vacancy-intro__aside-row">
                  <SocialLink
                    isClickable={false}
                    classStr="footer__socials-item"
                    icon={calendar}
                  />
                  {content?.dateTimeText} {getDateShortMonth(content?.datetime)}
                </div>
                <Button
                  classStr="beige button-arrow button-svg p16p20"
                  isLink={false}
                  action={() => {
                    const form = document.querySelector('.resume-form')
                    GlobalState.locoScroll &&
                      GlobalState.locoScroll.scrollTo(form, {
                        offset: 120,
                      })
                  }}
                  inner={
                    <>
                      {content?.buttonTitle}
                      <IconComponent name="arrow" />
                    </>
                  }
                />
              </div>
            </aside>
          </div>
        </InViewComponent>
      </div>
    </section>
  )
})

export default Intro
