import { observer } from 'mobx-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getDate } from '../../../funcs/dates'
import useScrollPos from '../../../hooks/useScrollPos'
import { IconComponent } from '../IconComponent'
import ImageComponent from '../ImageComponent'
import { useRouter } from 'next/router'

const SmallPost = ({ item }: { item: any }) => {
  const [colors, setColors] = useState('rgba(255, 255, 255, 0.3)')
  const { asPath } = useRouter()
  const { x, y } = useScrollPos()

  const setPos = (x: number, y: number) => {
    sessionStorage.setItem('position', JSON.stringify({ x, y }))
    sessionStorage.setItem('position_page', asPath)
  }
  return (
    <a
      href={item.link}
      className="small-post"
      onClick={() => setPos(0, y)}
      style={{ backgroundColor: colors }}
    >
      <div className="small-post__img">
        <ImageComponent
          src={item.img}
          alt={item.alt}
          getColors={(colors) =>
            setColors(`rgba(${colors.r},${colors.g},${colors.b}, 0.3)`)
          }
        />
      </div>
      <div className="small-post__content">
        <span
          className="small-post__title"
          dangerouslySetInnerHTML={{ __html: item.title }}
        ></span>
        <div className="news-post__bottom">
          <div className="news-post__cat">{item.cat}</div>
          <div className="news-post__item">
            <IconComponent name={'news/duration'} />
            {item.readTime + ' mins'}
          </div>
          <div className="news-post__item">{getDate(item.datetime)}</div>
        </div>
      </div>
    </a>
  )
}
export default observer(SmallPost)
