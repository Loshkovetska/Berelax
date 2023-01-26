import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'
const Banner = observer(({ theme = 'beige' }: { theme?: string }) => {
  const { content } = useContentState()

  return (
    <section className={classNames('banner', theme == 'blue' && 'blue')}>
      <InViewComponent>
        <div className="banner__container">
          <div className="banner__content">
            <div className="banner__top">
              <h3
                className="banner__title"
                dangerouslySetInnerHTML={{ __html: content?.banner?.title }}
              ></h3>
              {content?.banner?.text && (
                <div
                  className="banner__text"
                  dangerouslySetInnerHTML={{ __html: content?.banner?.text }}
                ></div>
              )}
            </div>
            <Button
              classStr="white button-arrow button-svg p24"
              isLink
              link={content?.banner?.link}
              inner={
                <>
                  {content?.banner?.buttonText}
                  <IconComponent name="arrow" />
                </>
              }
            />
          </div>
          <div className="banner__img">
            <ImageComponent src={content?.banner?.img} />
          </div>
        </div>
      </InViewComponent>
    </section>
  )
})

export default Banner
