import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import gif from '../../../assets/home/sound-icon.gif'
import { IconComponent } from '../IconComponent'
import { useContentState } from '../../../hooks/RootStoreProvider'
import ImageComponent from '../ImageComponent'
import { useWindowDimensions } from '../../../hooks/getWindowDimensions'
import { observable } from 'mobx'

export const MusicBoxState = observable({
  isPlay: false,
})

const MusicBox = observer(() => {
  const ref = useRef<any>(null)
  const [play, setPlay] = useState(true)
  const { content } = useContentState()
  const { width } = useWindowDimensions()
  const { audio } = content

  useEffect(() => {
    if (!audio) return
    document
      .querySelector('.smooth')
      ?.addEventListener('mousemove', function () {
        ref.current && ref.current.play()
      })
  }, [audio])

  useEffect(() => {
    if (!ref.current) return
    if (play) {
      ref.current.play()
    } else ref.current.pause()
  }, [play])

  if (width <= 1023) return <></>
  return (
    <div className="musicbox">
      <div className="musicbox__bg"></div>
      <div className="musicbox__btn" onClick={() => setPlay(!play)}>
        {play ? (
          <ImageComponent src={gif.src} />
        ) : (
          <IconComponent name={'home/sound-icon'} />
        )}
      </div>
      <span>Turn audio on</span>
      <audio
        autoPlay={play}
        controls={false}
        src={audio}
        muted={!play}
        preload={'preload'}
        loop={true}
        ref={ref}
      >
        <source src={audio} type="audio/mpeg" />
      </audio>
    </div>
  )
})

export default MusicBox
