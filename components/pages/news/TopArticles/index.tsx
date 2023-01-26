import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import CustomSlider from '../../../common/CustomSlider'
import InViewComponent from '../../../common/InViewComponent'
import SmallPost from '../../../common/SmallPost'
import Title54 from '../../../common/Title54'

const TopArticles = observer(() => {
  const { content } = useContentState()
  return (
    <section className="top-arts">
      <div className="top-arts__container">
        <InViewComponent delay={0.3}>
          <Title54 text={content?.top?.title} classStr="top-arts__title" />
        </InViewComponent>
        <InViewComponent delay={0.6}>
          <div className="top-arts__list">
            {content?.top?.list?.map((ti: any, i: number) => (
              <InViewComponent key={i} delay={0.1 * i}>
                <SmallPost item={ti} />
              </InViewComponent>
            ))}
          </div>
          <div className="top-arts__slider">
            <CustomSlider
              slidesToScroll={1}
              slidesToShow={1}
              variableWidth
              infinite={false}
            >
              {content?.top?.list?.map((ti: any, i: number) => (
                <InViewComponent key={i} delay={0.1 * i}>
                  <SmallPost item={ti} />
                </InViewComponent>
              ))}
            </CustomSlider>
          </div>
        </InViewComponent>
      </div>
    </section>
  )
})

export default TopArticles
