import classNames from 'classnames'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const InViewComponent = ({
  children,
  threshold = 0,
  delay = 0,
  animationClass = 'fadein',
}: {
  children: Array<ReactNode>|ReactNode
  threshold?: number
  delay?: number
  animationClass?: string
}) => {
  const itemRef = useRef<HTMLElement | null>(null)
  const { ref, inView, entry } = useInView({
    threshold: threshold,
    triggerOnce: true,
  })

  useEffect(() => {
    if (itemRef.current) {
      ;(itemRef.current as HTMLElement).style.transitionDelay = `${delay}s`
    }
  }, [delay])

  return (
    <div
      className={classNames('in-view', animationClass, inView && 'animated')}
      ref={(item) => {
        ref(item)
        itemRef.current = item
      }}
    >
      {children}
    </div>
  )
}

export default InViewComponent
