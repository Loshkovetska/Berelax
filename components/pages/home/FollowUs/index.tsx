import { observer } from 'mobx-react'
import HomeState from '../../../../stores/ContentState'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import ImageComponent from '../../../common/ImageComponent'
import CustomSlider from '../../../common/CustomSlider'

const FollowUs = observer(() => {
  const {
    content: { follow },
  } = useContentState()

  const [end, setEnd] = useState(false)
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })
  useEffect(() => {
    if (!end) {
      setEnd(inView)
    }
  }, [inView])

  useEffect(() => {
    if (follow) {
      const items = document.querySelectorAll('.follow-us__img')
      if (items) {
        items.forEach((i, id) => {
          if (i) {
            ;(i as HTMLElement).style.transitionDelay = `${id * 0.1}s`
          }
        })
      }
    }
  }, [follow])

  return (
    <section className="follow-us">
      <div className="follow-us__container">
        <div
          className={classNames('follow-us__top', end && 'animated')}
          ref={ref}
        >
          <h2
            className="follow-us__title"
            dangerouslySetInnerHTML={{ __html: follow?.title }}
          ></h2>
          <div
            className="follow-us__text"
            dangerouslySetInnerHTML={{ __html: follow?.text }}
          ></div>
          <Button
            classStr="white button-arrow button-svg p24"
            isLink
            link={follow?.link}
            target
            inner={
              <>
                {follow?.textLink}
                <IconComponent name={'arrow'} />
              </>
            }
          />
        </div>
        <div className="follow-us__list">
          {follow?.images?.map((f: any, i: number) => (
            <FollowUsImage f={f} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
})

export default FollowUs

const FollowUsImage = ({ f }: { f: any }) => {
  const [end, setEnd] = useState(false)
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })
  useEffect(() => {
    if (!end) {
      setEnd(inView)
    }
  }, [inView])

  return (
    <div className={classNames('follow-us__img', end && 'animated')} ref={ref}>
      <ImageComponent src={f || ''} />
    </div>
  )
}
