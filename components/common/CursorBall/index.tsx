import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { useWindowDimensions } from '../../../hooks/getWindowDimensions'
import GlobalState from '../../../stores/GlobalState'
import { IconComponent } from '../IconComponent'

const CursorBall = observer(() => {
  const cursor = useRef<any>(null)
  const { width } = useWindowDimensions()
  const [isShow, setShow] = useState(false)
  let mouse = { x: 0, y: 0 }
  let pos = {
    x: 0,
    y: 0,
  }
  let speed = 0.1

  const updatePosition = () => {
    const cursor = document.querySelector('.cursor-ball')
    if (cursor) {
      pos.x += (mouse.x - pos.x - (cursor as any).offsetWidth / 2) * speed
      pos.y += (mouse.y - pos.y - (cursor as any).offsetHeight / 2) * speed
      ;(cursor as HTMLElement).style.transform =
        'translate(' + pos.x + 'px ,' + pos.y + 'px)'
    }
  }

  const updateCoordinates = (e: MouseEvent) => {
    mouse = { x: e.clientX, y: e.clientY }
    cursor.current && ((cursor.current as HTMLElement).style.opacity = '1')
    loop()
  }

  const loop = () => {
    updatePosition()
    requestAnimationFrame(loop)
  }

  const setClass = (e: MouseEvent) => {
    const target: EventTarget| null = e.currentTarget
    if (!target) return
    const cursor = document.querySelector('.cursor-ball')
    const className = (target as HTMLElement).getAttribute('cursor-class')
    if (className && !(cursor as HTMLElement).classList.contains(className)) {
      cursor!.classList.add(className)
    }
    loop()
  }

  const removeClass = (e: MouseEvent) => {
    const cursor = document.querySelector('.cursor-ball')
    cursor!.className = 'cursor-ball'
    loop()
  }

  useEffect(() => {
    const components = document.querySelectorAll('[cursor-class]') as any
    if (!components) return
    components.forEach((element: HTMLElement) => {
      element.addEventListener('mousemove', (e: MouseEvent) => setClass(e))
      element.addEventListener('mouseleave', removeClass)
    })

    return () => {
      const components = document.querySelectorAll('[cursor-class]') as any
      if (!components) return

      components.forEach((element: HTMLElement) => {
        element.removeEventListener('mousemove', (e: MouseEvent) => setClass(e))
        element.removeEventListener('mouseleave', removeClass)
      })
    }
  }, [])

  useEffect(() => {
    cursor.current && (cursor.current.style.opacity = '0')
    if (window.innerWidth > 1024) {
      window.addEventListener('mousemove', updateCoordinates)
      requestAnimationFrame(loop)
    }

    return () => {
      if (window.innerWidth > 1024) {
        window.removeEventListener('mousemove', updateCoordinates)
      }
    }
  }, [])

  useEffect(() => {
    if (GlobalState.isTouch) {
      document.querySelector('.cursor-ball')?.classList.add('hidden')
    } else document.querySelector('.cursor-ball')?.classList.remove('hidden')
  }, [GlobalState.isTouch])

  if (width <= 1024) {
    return <></>
  }

  return (
    <div className="cursor-ball" ref={cursor}>
      <IconComponent name={'Swipe'} />
    </div>
  )
})

export default CursorBall
