import { observer } from 'mobx-react'
import ImageComponent from '../ImageComponent'

const ImgBackground = observer(
  ({ src, alt = '' }: { src: string; alt: string }) => {
    return (
      <div className="img-bg">
        <ImageComponent src={src} alt={alt} />
      </div>
    )
  },
)
export default ImgBackground
