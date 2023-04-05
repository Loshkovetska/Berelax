import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import CustomSlider from '../../../common/CustomSlider'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'
import google from '../../../../assets/location/google (1).png'
import yelp from '../../../../assets/location/yelp (2).png'

const Reviews = observer(() => {
  const [current, setCurrent] = useState(0)
  const { content } = useContentState()

  if (!content?.reviews?.length) return <></>

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
          {content?.reviews?.map(
            (
              re: {
                authorImg: string
                text: string
                authorName: string
                review_service: string
                image: string
                alt: string
              },
              i: number,
            ) => (
              <div
                className={classNames(
                  'reviews__item',
                  current == i && 'active',
                )}
                key={i}
              >
                <div className="reviews__item-author">
                  <div className="reviews__item-img">
                    <ImageComponent src={re?.image} alt={re?.alt} />
                  </div>
                  <div className="reviews__item-icon">
                    <ImageComponent
                      src={
                        re.review_service == 'Google' ? google.src : yelp.src
                      }
                      alt={''}
                    />

                    {/* <IconComponent name={'socials/tripadvisor'} /> */}
                  </div>
                </div>
                <div
                  className="reviews__item-text"
                  dangerouslySetInnerHTML={{ __html: re.text }}
                ></div>
                <div className="reviews__item-name">{re.authorName}</div>
              </div>
            ),
          )}
        </CustomSlider>
      </InViewComponent>
    </section>
  )
})

export default Reviews
