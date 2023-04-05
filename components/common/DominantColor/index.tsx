import { ReactNode, useCallback, useEffect, useRef } from 'react'

const DominantColor = ({
  src,
  children,
  getColors,
}: {
  src: string
  children: ReactNode
  getColors?: (value: any) => void
}) => {
  const ref = useRef<any>(null)
  const getColor = useCallback((imageData: any) => {
    var rgb = {
        r: 0,
        g: 0,
        b: 0,
      },
      yuv = {
        y: 0,
        u: 0,
        v: 0,
      },
      count = 0,
      step = Math.ceil(imageData.data.length / 40000) * 4,
      sigma = function (x: any) {
        return x / (Math.abs(x) + 0.4)
      }

    for (var i = 0; i < imageData.data.length; i += step) {
      if (
        imageData.data[i] !== 255 ||
        imageData.data[i + 1] !== 255 ||
        imageData.data[i + 2] !== 255
      ) {
        rgb.r = imageData.data[i] / 255
        rgb.g = imageData.data[i + 1] / 255
        rgb.b = imageData.data[i + 2] / 255

        yuv.y += 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b
        yuv.u += -0.147 * rgb.r - 0.289 * rgb.g + 0.436 * rgb.b
        yuv.v += 0.615 * rgb.r - 0.515 * rgb.g - 0.1 * rgb.b

        count++
      }
    }

    yuv.y = sigma(yuv.y / count)
    yuv.u = sigma(yuv.u / count)
    yuv.v = sigma(yuv.v / count)

    rgb.r = yuv.y + 1.3983 * yuv.v
    rgb.g = yuv.y - 0.3946 * yuv.u - 0.5806 * yuv.v
    rgb.b = yuv.y + 2.0321 * yuv.u

    rgb.r = isNaN(Math.round(rgb.r * 255)) ? 255 : Math.round(rgb.r * 255)
    rgb.g = isNaN(Math.round(rgb.g * 255)) ? 255 : Math.round(rgb.g * 255)
    rgb.b = isNaN(Math.round(rgb.b * 255)) ? 255 : Math.round(rgb.b * 255)

    return rgb
  }, [])

  const getCanvas = useCallback(() => {
    if (!ref.current) return
    const img: HTMLImageElement = ref.current?.nextSibling
    const w = img.getBoundingClientRect().width,
      h = img.getBoundingClientRect().height

    let context = ref.current?.getContext('2d'),
      imageData = null,
      rgb = null
    ;(ref.current as HTMLElement).setAttribute('width', String(w))
    ;(ref.current as HTMLElement).setAttribute('height', String(h))
    if (!img) return;
    context.fillStyle = 'rgb(255, 255, 255)'
    context.fillRect(0, 0, w, h)
    context.drawImage(img, 0, 0, w, h)
    try {
      imageData = context.getImageData(0, 0, w, h)
      rgb = getColor(imageData)
      getColors && getColors(rgb)
    } catch (e) {
      //   console.log(e)
    }
  }, [children, getColor])

  useEffect(() => {
    setTimeout(() => {
      getCanvas()
    }, 300)
  }, [getCanvas])

  return (
    <>
      <canvas
        ref={ref}
        style={{
          display: 'none',
        }}
      ></canvas>
      {children}
    </>
  )
}

export default DominantColor
