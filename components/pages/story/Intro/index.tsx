import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import ImageComponent from '../../../common/ImageComponent'
import ImgBackground from '../../../common/ImgBackground'
import InViewComponent from '../../../common/InViewComponent'
import Text from '../../../common/Text'
import Title from '../../../common/Title'

const Intro = observer(() => {
  const { content } = useContentState()
  return (
    <section className="story-intro">
      <InViewComponent>
        <div className="story-intro__top">
          <Title classStr="story-intro__title" text={content?.title} />
          <Text classStr="story-intro__text" text={content?.text} />
        </div>
      </InViewComponent>
      <InViewComponent delay={1}>
        <ImgBackground src={content?.img} />
      </InViewComponent>
    </section>
  )
})

export default Intro
