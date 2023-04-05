import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'

const ProductBanner = observer(() => {
  const { content } = useContentState()
  return (
    <section className="product-banner">
      <div className="product-banner__img">
        <ImageComponent src={content?.banner?.img} />
      </div>
      <div className="product-banner__content">
        <h2
          className="product-banner__title"
          style={{
            color: content?.banner?.title_color,
          }}
          dangerouslySetInnerHTML={{ __html: content?.banner?.title }}
        ></h2>
        <h2
          className="product-banner__text"
          style={{
            color: content?.banner?.text_color,
          }}
          dangerouslySetInnerHTML={{ __html: content?.banner?.text }}
        ></h2>
        <Button
          isLink
          link={content?.banner?.link}
          inner={
            <>
              {content?.banner?.buttonText}
              <IconComponent name={'arrow'} />
            </>
          }
          classStr="beige button-arrow button-svg p20p32"
        />
      </div>
    </section>
  )
})

export default ProductBanner
