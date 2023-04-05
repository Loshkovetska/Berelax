import { useEffect } from 'react'

const SeoBlock = ({ seo }: { seo: any }) => {
  useEffect(() => {
    if (!seo) return
    document.head.insertAdjacentHTML('afterbegin', seo)
  }, [seo])
  return <div></div>
}

export default SeoBlock
