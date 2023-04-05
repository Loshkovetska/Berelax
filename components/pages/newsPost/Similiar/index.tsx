import { observer } from 'mobx-react'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import CustomSlider from '../../../common/CustomSlider'
import { IconComponent } from '../../../common/IconComponent'
import InViewComponent from '../../../common/InViewComponent'
import SmallPost from '../../../common/SmallPost'

const Similiar = observer(() => {
  const { content } = useContentState()

  const { width, height } = useWindowDimensions()

  if (!content?.similiar?.cards?.length) return <></>
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
              link="/news"
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
            slidesToScroll={
              width > 1024 ? 3 : width <= 1024 && width >= 768 ? 2 : 1
            }
            slidesToShow={
              width > 1024 ? 3 : width <= 1024 && width >= 768 ? 2 : 1
            }
            variableWidth={width > 767 ? false : true}
            showArrows={true}
            infinite={false}
            classSrtr="story-slider blue-slider"
          >
            {content?.similiar?.cards?.map((ca: any, i: number) => (
              <InViewComponent
                key={i}
                delay={width > 480 ? i * 0.3 : 0.3}
              >
                <SmallPost item={ca} />
              </InViewComponent>
            ))}
          </CustomSlider>
        </div>
        <InViewComponent>
          <Button
            isLink
            link="/news"
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
