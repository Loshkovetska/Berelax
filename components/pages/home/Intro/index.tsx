import { observer } from 'mobx-react'
import { Fragment } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'
import Title from '../../../common/Title'
import IntroVideo from '../IntroVideo'

const Intro = observer(() => {
  const {
    content: { intro },
  } = useContentState()
  return (
    <section className="intro">
      <InViewComponent animationClass="zoomin">
        <div className="intro__top">
          <Title classStr="intro__title" text={intro?.title} />
          <Button
            classStr="beige button-svg p20p28 button-arrow"
            isLink
            link="/find-us"
            inner={
              <>
                {intro?.button}
                <IconComponent name="arrow" />
              </>
            }
          />
        </div>
      </InViewComponent>
      {intro?.images?.length ? (
        <Fragment>
          <div className="intro__scroll">
            <div className="intro__gallery">
              <InViewComponent delay={0.5}>
                <div className="intro__gallery-col center middle">
                  <div className="intro__gallery-img b48 h300">
                    <ImageComponent
                      src={intro.images[0].src}
                      alt={intro.images[0].alt}
                    />
                  </div>
                </div>
              </InViewComponent>
              <InViewComponent delay={1}>
                <div className="intro__gallery-col small">
                  <div className="intro__gallery-img b104 h339">
                    <ImageComponent
                      src={intro.images[1].src}
                      alt={intro.images[1].alt}
                    />
                  </div>
                  <div className="intro__gallery-img b48 h200">
                    <ImageComponent
                      src={intro.images[2].src}
                      alt={intro.images[2].alt}
                    />
                  </div>
                </div>
              </InViewComponent>
              <IntroVideo />
              <InViewComponent delay={1}>
                <div className="intro__gallery-col small">
                  <div className="intro__gallery-img b48 h200">
                    <ImageComponent
                      src={intro.images[3].src}
                      alt={intro.images[3].alt}
                    />
                  </div>
                  <div className="intro__gallery-img b104 h339">
                    <ImageComponent
                      src={intro.images[4].src}
                      alt={intro.images[4].alt}
                    />
                  </div>
                </div>
              </InViewComponent>
              <InViewComponent delay={0.5}>
                <div className="intro__gallery-col center middle">
                  <div className="intro__gallery-img b48 h300 ">
                    <ImageComponent
                      src={intro.images[5].src}
                      alt={intro.images[5].alt}
                    />
                  </div>
                </div>
              </InViewComponent>
            </div>
          </div>
          <InViewComponent animationClass="apear" delay={1}>
            <div className="intro__img-mobile">
              <ImageComponent src={intro?.mainImg} alt={intro?.mainImgAlt} />
            </div>
          </InViewComponent>
        </Fragment>
      ) : (
        <></>
      )}
    </section>
  )
})

export default Intro
