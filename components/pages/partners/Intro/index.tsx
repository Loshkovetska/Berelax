import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import InViewComponent from '../../../common/InViewComponent'
import Text from '../../../common/Text'
import Title from '../../../common/Title'

const Intro = observer(() => {
  const { content } = useContentState()
  return (
    <section className="career-intro">
      <div className="career-intro__container">
        <InViewComponent>
          <Title text={content?.title} classStr="career-intro__title" />
          <Text text={content?.text} classStr="career-intro__text" />
        </InViewComponent>
      </div>
    </section>
  )
})

export default Intro
