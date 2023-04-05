import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import CustomSlider from '../../../common/CustomSlider'
import { IconComponent } from '../../../common/IconComponent'
import InViewComponent from '../../../common/InViewComponent'
import Text from '../../../common/Text'
import Title40 from '../../../common/Title40'
import Title54 from '../../../common/Title54'

const Stories = observer(() => {
  const { content } = useContentState()
  return (
    <section className="stories">
      <div className="stories__container">
        <InViewComponent>
          <Title54 text={content?.stories?.title} classStr="stories__title" />
        </InViewComponent>
        <div className="stories__list">
          {content?.stories?.list?.map(
            (
              li: {
                video: string | null
                text: string
                title: string
                link: string
              },
              i: number,
            ) => (
              <InViewComponent delay={0.1 * i} key={i}>
                <div className="stories__item">
                  <div
                    className="stories__item-video"
                    dangerouslySetInnerHTML={{ __html: li.video || '' }}
                  ></div>
                  <div className="stories__item-content">
                    <div className="stories__item-top">
                      <Title40 classStr="stories__item-title" text={li.title} />
                      <Text classStr="stories__item-text" text={li.text} />
                    </div>
                    <Button
                      isLink
                      link={li.link}
                      classStr="white button-arrow button-svg p24"
                      inner={
                        <>
                          {content?.stories?.buttonTitle}
                          <IconComponent name={'arrow'} />
                        </>
                      }
                    />
                  </div>
                </div>
              </InViewComponent>
            ),
          )}
        </div>
        <div className="stories__slider">
          <CustomSlider
            slidesToScroll={1}
            slidesToShow={1}
            infinite={false}
            variableWidth
          >
            {content?.stories?.list?.map(
              (
                li: {
                  video: string | null
                  text: string
                  title: string
                  link: string
                },

                i: number,
              ) => (
                <InViewComponent delay={0.1} key={i}>
                  <div className="stories__item">
                    <div
                      className="stories__item-video"
                      dangerouslySetInnerHTML={{ __html: li.video || '' }}
                    ></div>
                    <div className="stories__item-content">
                      <div className="stories__item-top">
                        <Title40
                          classStr="stories__item-title"
                          text={li.title}
                        />
                        <Text classStr="stories__item-text" text={li.text} />
                      </div>
                      <Button
                        isLink
                        link={li.link}
                        classStr="white button-arrow button-svg p24"
                        inner={
                          <>
                            {content?.stories?.buttonTitle}
                            <IconComponent name={'arrow'} />
                          </>
                        }
                      />
                    </div>
                  </div>
                </InViewComponent>
              ),
            )}
          </CustomSlider>
        </div>
      </div>
    </section>
  )
})
export default Stories
