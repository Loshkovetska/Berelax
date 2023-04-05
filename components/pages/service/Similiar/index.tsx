import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState from '../../../../stores/GlobalState'
import Button from '../../../common/Button'
import CustomSlider from '../../../common/CustomSlider'
import { IconComponent } from '../../../common/IconComponent'
import InViewComponent from '../../../common/InViewComponent'
import ProductItem from '../../../common/ProductItem'
import ServiceItem from '../../../common/ServiceItem'

const Similiar = observer(({ isProduct = false }: { isProduct?: boolean }) => {
  const { content } = useContentState()

  const { width, height } = useWindowDimensions()

  let slideToShow = 1
  if (isProduct) {
    slideToShow = width >= 1024 ? 3 : width >= 900 ? 2 : 1
  }

  if (!isProduct) {
    slideToShow = width >= 900 ? 2 : 1
  }

  if (!content?.similiar?.cards.length) return <></>
  return (
    <section className="similiar">
      <div className="similiar__container">
        <InViewComponent>
          <div className="similiar__top">
            <div className="similiar__top-col">
              <h2
                className="similiar__title"
                dangerouslySetInnerHTML={{ __html: content?.similiar?.title }}
              ></h2>
              <div
                className="similiar__text"
                dangerouslySetInnerHTML={{ __html: content?.similiar?.text }}
              ></div>
            </div>
            <Button
              isLink
              link={content?.similiar?.buttonLink}
              inner={
                <>
                  {content?.similiar?.buttonTitle}
                  <IconComponent name="arrow" />
                </>
              }
              classStr="beige button-arrow button-svg p20p28"
            />
          </div>
        </InViewComponent>
        <div className="similiar__list">
          <CustomSlider
            classSrtr={'story-slider blue-slider'}
            slidesToScroll={slideToShow}
            slidesToShow={slideToShow}
            variableWidth={width <= 900}
            showArrows={true}
            infinite={false}
          >
            {content?.similiar?.cards?.map((ca: any, i: number) => (
              <InViewComponent key={i} delay={width > 480 ? i * 0.3 : 0.3}>
                {!isProduct ? (
                  <ServiceItem item={ca} />
                ) : (
                  <ProductItem
                    item={ca}
                    buttonText={content?.similiar?.cardButton}
                  />
                )}
              </InViewComponent>
            ))}
          </CustomSlider>
        </div>
        <InViewComponent>
          <Button
            isLink
            link={content?.similiar?.buttonLink}
            inner={
              <>
                {content?.similiar?.buttonTitle}
                <IconComponent name="arrow" />
              </>
            }
            classStr="beige button-arrow button-svg p20p28"
          />
        </InViewComponent>
      </div>
    </section>
  )
})

export default Similiar
