import { useEffect, useState } from 'react'

const useClickOutSide = (ref: any) => {
  const [outSide, setOutSide] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const inside = (e: any) => {
      if (!ref.current) return
      if (!ref.current.contains(e.target)) {
        setOutSide(true)
      } else {
        setOutSide(false)
      }
    }

    document.addEventListener('click', inside)

    return () => document.removeEventListener('click', inside)
  }, [])

  return outSide
}
export default useClickOutSide
