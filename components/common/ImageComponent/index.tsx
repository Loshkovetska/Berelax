import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import DominantColor from '../DominantColor'

const ImageComponent = observer(
  ({
    src,
    classStr = '',
    onClick = () => {},
    alt = 'be relax',
    getColors,
  }: {
    src: string | null
    classStr?: string
    onClick?: () => void
    alt?: string
    getColors?: (colors: any) => void
  }) => {
    const [image, setImage] = useState('')
    const isLoaded = useRef<any>(false)
    useEffect(() => {
      if (!src) return
      if (src?.includes('svg')) {
        setImage(src)
        return
      }
      try {
        fetch(src)
          .then((fetchResponse) => {
            if (fetchResponse.ok) {
              return fetchResponse
            }
          })
          .then((response: any) => {
            if (response) {
              return src.includes('svg')
                ? response!.arrayBuffer()
                : response!.blob()
            }
          })
          .then((imageBlob) => {
            if (imageBlob) {
              let imageObjectURL: any

              if (src.includes('svg')) {
                const buffer = new Buffer(imageBlob)
                setImage(
                  'data:image/svg+xml;base64,' + buffer.toString('base64'),
                )
              } else {
                imageObjectURL = URL.createObjectURL(imageBlob)
                setImage(imageObjectURL)
              }
            }
          })
          .catch((e) => console.log(e))
      } catch (e) {
        console.log('image', e)
      }
    }, [src])
    return (
      <>
        <DominantColor src={image || src || ''} getColors={getColors}>
          <img
            src={image || src || ''}
            alt={alt}
            className={classStr}
            onClick={onClick}
          />
        </DominantColor>
      </>
    )
  },
)

export default ImageComponent
