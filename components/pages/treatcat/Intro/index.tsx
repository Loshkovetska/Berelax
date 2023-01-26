import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import InViewComponent from '../../../common/InViewComponent'
import Title from '../../../common/Title'

const Intro = observer(() => {
  const { content } = useContentState()
  const mainclass = 'treatcat-intro'
  return (
    <section className={mainclass}>
      <InViewComponent delay={0.5}>
        <div className={mainclass + '__top'}>
          <Title classStr={mainclass + '__title'} text={content?.title} />
          <div
            className={mainclass + '__text'}
            dangerouslySetInnerHTML={{ __html: content?.text }}
          ></div>
        </div>
      </InViewComponent>
    </section>
  )
})

export default Intro
