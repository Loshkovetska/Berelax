import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'

const Partners = observer(() => {
  const { content } = useContentState()
  return (
    <section className="partners">
      <InViewComponent>
        <div className="partners__top">
          <h2
            className="partners__title"
            dangerouslySetInnerHTML={{ __html: content?.partnersTitle }}
          ></h2>
          <div
            className="partners__text"
            dangerouslySetInnerHTML={{ __html: content?.partnersText }}
          ></div>
        </div>
      </InViewComponent>
      <div className="partners__list">
        {content?.partners?.map((pi: any, i: number) => (
          <InViewComponent key={i} animationClass="zoomin" delay={0.1 * i}>
            <a
              className="partners__item"
              href={pi.link}
              target="_blank"
              rel="noreferrer"
            >
              <ImageComponent src={pi.src} alt={pi.alt} />
            </a>
          </InViewComponent>
        ))}
      </div>
    </section>
  )
})

export default Partners
