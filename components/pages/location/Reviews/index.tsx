import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import CustomSlider from '../../../common/CustomSlider'
import { IconComponent } from '../../../common/IconComponent'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'

const Reviews = observer(() => {
  const [current, setCurrent] = useState(0)
  const { content } = useContentState()
  return (
    <section className="reviews">
      <InViewComponent>
        <h2
          className="reviews__title"
          dangerouslySetInnerHTML={{ __html: content?.reviewsTitle }}
        ></h2>
      </InViewComponent>
      <InViewComponent>
        <CustomSlider
          slidesToScroll={1}
          slidesToShow={1}
          setCurrent={setCurrent}
          autoPlay
        >
          {content?.reviews?.map((re: any, i: number) => (
            <div
              className={classNames('reviews__item', current == i && 'active')}
              key={i}
            >
              <div className="reviews__item-author">
                <div className="reviews__item-img">
                  <ImageComponent src={re.authorImg} />
                </div>
                <div className="reviews__item-icon">
                  <IconComponent name={'socials/tripadvisor'} />
                </div>
              </div>
              <div
                className="reviews__item-text"
                dangerouslySetInnerHTML={{ __html: re.text }}
              ></div>
              <div className="reviews__item-name">{re.authorName}</div>
            </div>
          ))}
        </CustomSlider>
      </InViewComponent>
    </section>
  )
})

export default Reviews
