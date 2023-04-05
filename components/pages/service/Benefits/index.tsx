import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'

const Benefits = observer(() => {
  const { content } = useContentState()

  if (!content?.benefits?.list?.length) return <></>
  return (
    <section className="benefits">
      <InViewComponent>
        <h2
          className="benefits__title"
          dangerouslySetInnerHTML={{ __html: content?.benefits?.title }}
        ></h2>
      </InViewComponent>
      <div className="benefits__list">
        {content?.benefits?.list?.map((b: any, i: number) => (
          <InViewComponent key={i} delay={i * 0.3}>
            <div className="benefits__item">
              <div className="benefits__item-img">
                <ImageComponent src={b.src} alt={b.alt} />
              </div>
              <div className="benefits__item-col">
                <div className="benefits__item-title">{b?.title}</div>
                <div className="benefits__item-text">{b?.text}</div>
              </div>
            </div>
          </InViewComponent>
        ))}
      </div>
    </section>
  )
})

export default Benefits
