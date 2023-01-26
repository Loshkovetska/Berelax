import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import InViewComponent from '../../../common/InViewComponent'
import Title from '../../../common/Title'

const Intro = observer(() => {
  const { content } = useContentState()
  return (
    <InViewComponent>
      <section className="treat-intro">
        <div className="treat-intro__container">
          <Title classStr="treat-intro__title" text={content?.title} />
          <div
            className="treat-intro__text"
            dangerouslySetInnerHTML={{ __html: content?.text }}
          ></div>
        </div>
      </section>
    </InViewComponent>
  )
})

export default Intro
