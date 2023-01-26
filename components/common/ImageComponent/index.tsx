import { observer } from 'mobx-react'
import Image from 'next/image'

const ImageComponent = observer(
  ({
    src,
    classStr = '',
    onClick = () => {},
  }: {
    src: string | null
    classStr?: string
    onClick?: () => void
  }) => {
    return (
      <img
        src={src || ''}
        alt="be relax"
        className={classStr}
        onClick={onClick}
      />
    )
  },
)

export default ImageComponent
