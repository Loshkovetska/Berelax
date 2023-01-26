import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import CustomSlider from '../../../common/CustomSlider'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'
import Text from '../../../common/Text'
import Title40 from '../../../common/Title40'
import Title54 from '../../../common/Title54'

const CompanyValues = observer(() => {
  const { content } = useContentState()
  return (
    <section className="company-values">
      <div className="company-values__container">
        <InViewComponent>
          <Title54
            classStr="company-values__title"
            text={content?.values?.title}
          />
        </InViewComponent>
        <div className="company-values__list">
          {content?.values?.list?.map((li: any, i: any) => (
            <InViewComponent key={i} delay={i * 0.1 + 0.1}>
              <div className="company-values__item">
                <div className="company-values__item-icon">
                  <ImageComponent src={li.icon} />
                </div>
                <Title40
                  classStr="company-values__item-title"
                  text={li.title}
                />
                <Text classStr="company-values__item-text" text={li.text} />
              </div>
            </InViewComponent>
          ))}
        </div>
        <div className="company-values__slider">
          <CustomSlider
            slidesToShow={1}
            slidesToScroll={1}
            showArrows={false}
            variableWidth
            infinite={false}
          >
            {content?.values?.list?.map((li: any, i: any) => (
              <InViewComponent key={i} delay={0}>
                <div className="company-values__item">
                  <div className="company-values__item-icon">
                    <ImageComponent src={li.icon} />
                  </div>
                  <Title40
                    classStr="company-values__item-title"
                    text={li.title}
                  />
                  <Text classStr="company-values__item-text" text={li.text} />
                </div>
              </InViewComponent>
            ))}
          </CustomSlider>
        </div>
      </div>
    </section>
  )
})

export default CompanyValues
