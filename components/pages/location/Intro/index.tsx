import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'
import Title from '../../../common/Title'

const Intro = observer(() => {
  const { content } = useContentState()

  const book = () => {
    localStorage.setItem(
      'location',
      JSON.stringify({
        id: content?.id,
        title: content?.title,
        text: content?.text,
        img: content?.img,
        link: content?.link,
      }),
    )
    window.location.href = '/booking'
  }
  return (
    <section className="place-intro">
      <InViewComponent>
        <div className="place-intro__top">
          <Title classStr="place-intro__title" text={content?.title} />
          <div className="place-intro__text">{content?.text.toLowerCase()}</div>
          <Button
            classStr="beige button-arrow button-svg p16p28 f16"
            isLink={false}
            action={book}
            inner={
              <>
                {content?.buttonTitle}
                <IconComponent name={'arrow'} />
              </>
            }
          />
        </div>
      </InViewComponent>
      <InViewComponent delay={1}>
        <div className="place-intro__img">
          <ImageComponent src={content?.img} alt={content?.alt} />
        </div>
      </InViewComponent>
    </section>
  )
})

export default Intro
