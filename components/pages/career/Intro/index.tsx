import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import CustomSlider from '../../../common/CustomSlider'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'
import Text from '../../../common/Text'
import Title from '../../../common/Title'
import Title40 from '../../../common/Title40'

const Intro = observer(() => {
  const { content } = useContentState()
  return (
    <section className="career-intro">
      <div className="career-intro__container">
        <InViewComponent>
          <Title text={content?.title} classStr="career-intro__title" />
          <Text text={content?.text} classStr="career-intro__text" />
        </InViewComponent>
        <div className="career-intro__list">
          {content?.blocks?.map((bl: any, i: number) => (
            <InViewComponent delay={0.1 * i} key={i}>
              <div className="career-intro__item">
                <div className="career-intro__item-img">
                  <ImageComponent src={bl.img} />
                </div>
                <Title40 text={bl.title} classStr="career-intro__item-title" />
                <div
                  className="career-intro__item-text"
                  dangerouslySetInnerHTML={{ __html: bl.text }}
                ></div>
              </div>
            </InViewComponent>
          ))}
        </div>
        <div className="career-intro__slider">
          <CustomSlider
            slidesToShow={1}
            slidesToScroll={1}
            showArrows={false}
            variableWidth
            infinite={false}
          >
            {content?.blocks?.map((bl: any, i: number) => (
              <InViewComponent delay={0} key={i}>
                <div className="career-intro__item">
                  <div className="career-intro__item-img">
                    <ImageComponent src={bl.img} />
                  </div>
                  <Title40
                    text={bl.title}
                    classStr="career-intro__item-title"
                  />
                  <div
                    className="career-intro__item-text"
                    dangerouslySetInnerHTML={{ __html: bl.text }}
                  ></div>
                </div>
              </InViewComponent>
            ))}
          </CustomSlider>
        </div>
      </div>
    </section>
  )
})
export default Intro
