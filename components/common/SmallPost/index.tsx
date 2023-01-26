import { observer } from 'mobx-react'
import Link from 'next/link'

import { getDate } from '../../../funcs/dates'
import useScrollPos from '../../../hooks/useScrollPos'
import { IconComponent } from '../IconComponent'
import ImageComponent from '../ImageComponent'

const SmallPost = ({ item }: { item: any }) => {
  const { x, y } = useScrollPos()

  const setPos = (x: number, y: number) => {
    sessionStorage.setItem('position', JSON.stringify({ x, y }))
  }
  return (
    <Link href={item.link}>
      <a className="small-post" onClick={() => setPos(0, y)}>
        <div className="small-post__img">
          <ImageComponent src={item.img} />
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
              {item.readTime}
            </div>
            <div className="news-post__item">{getDate(item.datetime)}</div>
          </div>
        </div>
      </a>
    </Link>
  )
}
export default observer(SmallPost)
