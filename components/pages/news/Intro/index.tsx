import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import InViewComponent from '../../../common/InViewComponent'
import Text from '../../../common/Text'
import Title from '../../../common/Title'

const Intro = observer(() => {
  const { content } = useContentState()
  return (
    <section className="news-intro">
      <InViewComponent>
        <div className="news-intro__top">
          <Title text={content?.title} classStr={'news-intro__title'} />
          <Text text={content?.text} classStr={'news-intro__text'} />
        </div>
      </InViewComponent>
    </section>
  )
})

export default Intro
