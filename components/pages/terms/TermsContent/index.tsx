import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import InViewComponent from '../../../common/InViewComponent'
import Title from '../../../common/Title'

const TermsContent = observer(() => {
  const { content } = useContentState()
  return (
    <section className="terms-content">
      <div className="terms-content__container">
        <InViewComponent>
          <Title classStr="terms-content__title" text={content?.title} />
        </InViewComponent>
        <InViewComponent>
          <div
            className="terms-content__block"
            dangerouslySetInnerHTML={{ __html: content?.content }}
          ></div>
        </InViewComponent>
      </div>
    </section>
  )
})

export default TermsContent
