import { observer } from 'mobx-react'
import ImageComponent from '../ImageComponent'

const ImgBackground = observer(({ src }: { src: string }) => {
  return (
    <div className="img-bg">
      <ImageComponent src={src} />
    </div>
  )
})
export default ImgBackground
