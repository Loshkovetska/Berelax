import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import HomeState from '../../../../stores/ContentState'
import { ProductCatType } from '../../../../types'
import CustomSlider from '../../../common/CustomSlider'
import ProductCat from '../../../common/ProductCat'

const Products = observer(() => {
  const {
    content: { products },
  } = useContentState()
  const navigate = useRouter()
  const { width } = useWindowDimensions()
  useEffect(() => {
    if (products) {
      const items = document.querySelectorAll('.products__item')
      if (items) {
        items.forEach((i, id) => {
          if (i) {
            ;(i as HTMLElement).style.transitionDelay = `${id * 0.1}s`
          }
        })
      }
    }
  }, [products])
  return (
    <section className="products">
      <div className="products__container">
        <div className="products__top">
          <h2
            className={classNames('products__title')}
            dangerouslySetInnerHTML={{ __html: products?.title }}
          ></h2>
          <div
            className="products__text"
            dangerouslySetInnerHTML={{ __html: products?.text }}
          ></div>
        </div>
        <div className="products__list">
          {products?.list?.map((pr: ProductCatType, i: number) => (
            <ProductCat
              pr={pr}
              key={i}
              isDark={(i + 1) % 2 == 0}
              buttonTitle={products?.buttonTitle}
            />
          ))}
        </div>
        <div className="products__slider">
          <CustomSlider
            slidesToShow={width > 576 ? 2 : 1}
            slidesToScroll={width > 576 ? 2 : 1}
            showArrows={false}
            variableWidth
            infinite={false}
          >
            {products?.list?.map((pr: ProductCatType, i: number) => (
              <ProductCat
                pr={pr}
                key={i}
                isDark={(i + 1) % 2 == 0}
                buttonTitle={products?.buttonTitle}
              />
            ))}
          </CustomSlider>
        </div>
      </div>
    </section>
  )
})

export default Products
