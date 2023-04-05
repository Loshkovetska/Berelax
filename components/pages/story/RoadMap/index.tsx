import { observable, runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState from '../../../../stores/GlobalState'
import CustomSlider from '../../../common/CustomSlider'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'
import Title54 from '../../../common/Title54'
import RoadMapYears from '../RoadMapYears'

export const SliderState: {
  id: number
  slider: any
} = observable({
  id: 0,
  slider: null,
})

const RoadMap = observer(() => {
  const { content } = useContentState()
  const { width } = useWindowDimensions()

  return (
    <section className="roadmap">
      <Title54 text={content?.roadmap?.title} classStr="roadmap__title" />
      <div
        className="roadmap__list"
        ref={(el) =>
          runInAction(() => {
            GlobalState.cursorRefs.push(el)
          })
        }
      >
        <CustomSlider
          classSrtr="story-slider"
          slidesToScroll={1}
          slidesToShow={1}
          variableWidth={width >= 1024 ? true : false}
          showArrows={true}
          infinite={false}
        >
          {content?.roadmap?.list?.map((ca: any, i: number) => (
            <InViewComponent key={i} delay={0.1}>
              <div className="roadmap__item">
                <div className="roadmap__item-img">
                  <ImageComponent src={ca.img} alt={ca.alt} />
                </div>
                <div className="roadmap__item-content">
                  <div className="roadmap__item-year">{ca.year}</div>
                  <div className="roadmap__item-col">
                    <div
                      className="roadmap__item-title"
                      dangerouslySetInnerHTML={{ __html: ca.title }}
                    ></div>
                    <div
                      className="roadmap__item-text"
                      dangerouslySetInnerHTML={{ __html: ca.text }}
                    ></div>
                  </div>
                </div>
              </div>
            </InViewComponent>
          ))}
        </CustomSlider>
      </div>
      <InViewComponent delay={0.3}>
        <RoadMapYears list={content?.roadmap?.list} />
      </InViewComponent>
    </section>
  )
})

export default RoadMap
