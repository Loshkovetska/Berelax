import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const InViewComponent = ({
  children,
  threshold = 0,
  delay = 0,
  animationClass = 'fadein',
}: {
  children: any
  threshold?: number
  delay?: number
  animationClass?: string
}) => {
  const itemRef = useRef<any>(null)
  const { ref, inView, entry } = useInView({
    threshold: threshold,
    triggerOnce: true,
  })

  useEffect(() => {
    if (itemRef.current) {
      ;(itemRef.current as HTMLElement).style.transitionDelay = `${delay}s`
    }
  }, [])

  return (
    <div
      className={classNames(
        'in-view',
        animationClass,
        inView  && 'animated',
      )}
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
