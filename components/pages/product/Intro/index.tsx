import classNames from 'classnames'
import { observer } from 'mobx-react'
import { Fragment, useEffect, useState } from 'react'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'
import Text from '../../../common/Text'
import GlobalState, {
  changeRetailerState,
} from '../../../../stores/GlobalState'
import ProductAside from '../ProductAside'
const Intro = observer(() => {
  const { content } = useContentState()
  const [selectedColor, setColor] = useState('')
  const { width } = useWindowDimensions()
  useEffect(() => {
    if (content?.colors) {
      setColor(content?.colors[0].title)
    }
  }, [content?.colors])


  return (
    <section className="product-intro">
      <div className="product-intro__container">
        <div className="product-intro__gallery">
          <InViewComponent>
            <div className="product-intro__images">
              <div className="product-intro__images-item main">
                {content?.gallery?.map((g: any, i: number) => (
                  <div
                    className={classNames(
                      'image-gallery',
                      g?.color == selectedColor && 'active',
                      !g.color && 'active',
                    )}
                    key={i}
                  >
                    <ImageComponent
                      src={g.images[0].src}
                      alt={g.images[0].alt}
                    />
                  </div>
                ))}
              </div>
              {content?.gallery?.map((g: any, i: number) => (
                <Fragment key={i}>
                  {(g?.color == selectedColor || !g.color) &&
                    g.images.slice(1).map((im: any, id: any) => (
                      <div
                        className={classNames('product-intro__images-item')}
                        key={id}
                      >
                        <ImageComponent src={im.src} alt={im.alt} />
                      </div>
                    ))}
                </Fragment>
              ))}
            </div>

            <div className="product-intro__images mobile">
              {content?.gallery?.map((g: any, i: number) => (
                <Fragment key={i}>
                  {(g?.color == selectedColor || !g.color) &&
                    g.images.map((im: any, id: any) => (
                      <div
                        className={classNames(
                          'product-intro__images-item',
                          !id && 'main',
                        )}
                        key={id}
                      >
                        <ImageComponent src={im.src} alt={im.alt} />
                      </div>
                    ))}
                </Fragment>
              ))}
            </div>

            {content?.video && (
              <div
                className="product-intro__video"
                dangerouslySetInnerHTML={{ __html: content?.video }}
              ></div>
            )}
          </InViewComponent>
        </div>

        <div className="product-intro__content">
          <ProductAside
            content={
              <InViewComponent>
                <h1
                  className="product-intro__title"
                  dangerouslySetInnerHTML={{ __html: content?.title }}
                ></h1>
                {content?.colors && (
                  <div className="product-intro__colors">
                    {content?.colors?.map((re: any, i: number) => (
                      <div
                        className={classNames(
                          'product-intro__colors-item',
                          selectedColor == re.title && 'active',
                        )}
                        onClick={() => setColor(re.title)}
                        key={i}
                      >
                        <span style={{ backgroundColor: re.bg }}></span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="product-intro__response-div desk">
                  <div
                    className="product-intro__text"
                    dangerouslySetInnerHTML={{ __html: content?.text }}
                  ></div>
                  <div className="product-intro__btns">
                    {!content?.buttonLink1.includes('#') ? (
                      <Button
                        classStr="beige button-arrow button-svg p20p24"
                        isLink
                        link={content?.buttonLink1}
                        target
                        inner={
                          <>
                            {content?.buttonTitle1}
                            <IconComponent name={'arrow'} />
                          </>
                        }
                      />
                    ) : (
                      <></>
                    )}
                    <div
                      className="product-intro__link"
                      onClick={changeRetailerState}
                    >
                      {content?.buttonTitle2}
                    </div>
                  </div>
                  <div className="product-intro__bottom">
                    {content?.characteristicsList?.map((li: any, i: number) => (
                      <Fragment key={i}>
                        <Text
                          classStr="product-intro__bottom-title"
                          text={li?.title}
                        />
                        {li?.list?.map((l: any, idx: any) => (
                          <div className="product-intro__bottom-item" key={idx}>
                            <div className="product-intro__bottom-sub">
                              {l.title}
                            </div>
                            <div className="product-intro__bottom-param">
                              {l.text}
                            </div>
                          </div>
                        ))}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </InViewComponent>
            }
          />
        </div>
        <div className="product-intro__response-div mob">
          <InViewComponent>
            <div
              className="product-intro__text"
              dangerouslySetInnerHTML={{ __html: content?.text }}
            ></div>
            <div className="product-intro__btns">
              {!content?.buttonLink1.includes('#') ? (
                <Button
                  classStr="beige button-arrow button-svg p20p24"
                  isLink
                  link={content?.buttonLink1}
                  target
                  inner={
                    <>
                      {content?.buttonTitle1}
                      <IconComponent name={'arrow'} />
                    </>
                  }
                />
              ) : (
                <></>
              )}
              <div
                className="product-intro__link"
                onClick={changeRetailerState}
              >
                {content?.buttonTitle2}
              </div>
            </div>
            <div className="product-intro__bottom">
              {content?.characteristicsList?.map((li: any, i: number) => (
                <Fragment key={i}>
                  <Text
                    classStr="product-intro__bottom-title"
                    text={li?.title}
                  />
                  {li?.list?.map((l: any, idx: any) => (
                    <div className="product-intro__bottom-item" key={idx}>
                      <div className="product-intro__bottom-sub">{l.title}</div>
                      <div className="product-intro__bottom-param">
                        {l.text}
                      </div>
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>

            {content?.video && (
              <div
                className="product-intro__video"
                dangerouslySetInnerHTML={{ __html: content?.video }}
              ></div>
            )}
          </InViewComponent>
        </div>
      </div>
    </section>
  )
})

export default Intro
