import { observer } from 'mobx-react'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'
import { useEffect } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'

const TextBlock = observer(() => {
  const {
    content: { block2 },
  } = useContentState()
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })

  

  return (
    <section className="intro-text" ref={ref}>
      <div
        className={classNames('intro-text__text', inView && 'animated')}
        dangerouslySetInnerHTML={{ __html: block2?.text }}
      ></div>
    </section>
  )
})

export default TextBlock
