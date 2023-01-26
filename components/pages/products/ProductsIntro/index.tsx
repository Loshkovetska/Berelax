import { observer } from 'mobx-react'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import CustomSlider from '../../../common/CustomSlider'
import InViewComponent from '../../../common/InViewComponent'
import ProductCat from '../../../common/ProductCat'
import Title from '../../../common/Title'

const ProductsIntro = observer(() => {
  const { content } = useContentState()
  const { width } = useWindowDimensions()
  return (
    <section className="products-intro">
      <div className="products-intro__container">
        <InViewComponent>
          <div className="products-intro__top">
            <Title classStr="products-intro__title" text={content?.title} />
            <div
              className="products-intro__text"
              dangerouslySetInnerHTML={{ __html: content?.text }}
            ></div>
          </div>
        </InViewComponent>
        <div className="products-intro__list">
          {content?.list?.map((li: any, i: number) => (
            <InViewComponent delay={i * 0.1} key={i}>
              <ProductCat
                pr={li}
                buttonTitle={content?.buttonTitle}
                isDark={(i + 1) % 2 == 0}
              />
            </InViewComponent>
          ))}
        </div>
        <div className="products-intro__slider">
          <CustomSlider
            slidesToShow={width > 576 ? 2 : 1}
            slidesToScroll={width > 576 ? 2 : 1}
            showArrows={false}
            variableWidth
            infinite={false}
          >
            {content?.list?.map((li: any, i: number) => (
              <InViewComponent delay={i * 0.1} key={i}>
                <ProductCat
                  pr={li}
                  buttonTitle={content?.buttonTitle}
                  isDark={(i + 1) % 2 == 0}
                />
              </InViewComponent>
            ))}
          </CustomSlider>
        </div>
      </div>
    </section>
  )
})

export default ProductsIntro
