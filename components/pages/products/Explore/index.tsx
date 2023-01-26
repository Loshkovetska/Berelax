import { observer } from 'mobx-react-lite'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import CustomSlider from '../../../common/CustomSlider'
import InViewComponent from '../../../common/InViewComponent'
import ProductItem from '../../../common/ProductItem'

const Explore = observer(() => {
  const { content } = useContentState()
  return (
    <section className="explore-block">
      <div className="explore-block__container">
        <InViewComponent>
          <h2
            className="explore-block__title"
            dangerouslySetInnerHTML={{ __html: content?.explore?.title }}
          ></h2>
        </InViewComponent>
        <div className="explore-block__list">
          {content?.explore?.list?.map((li: any, id: number) => (
            <InViewComponent key={id} delay={id * 0.2}>
              <ProductItem
                item={li}
                buttonText={content?.explore?.buttonText}
              />
            </InViewComponent>
          ))}
        </div>
        <div className="explore-block__slider">
          <CustomSlider
            slidesToScroll={1}
            slidesToShow={1}
            infinite={false}
            variableWidth
          >
            {content?.explore?.list?.map((li: any, id: number) => (
              <InViewComponent key={id} delay={id * 0.2}>
                <ProductItem
                  item={li}
                  buttonText={content?.explore?.buttonText}
                />
              </InViewComponent>
            ))}
          </CustomSlider>
        </div>
      </div>
    </section>
  )
})

export default Explore
