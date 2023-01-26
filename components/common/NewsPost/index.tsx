import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { getDate } from '../../../funcs/dates'
import { NewsType } from '../../../types'
import { IconComponent } from '../IconComponent'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'
import ImageComponent from '../ImageComponent'
import useScrollPos, { ScrollPos } from '../../../hooks/useScrollPos'
import Link from 'next/link'

const NewsPost = observer(({ post }: { post: NewsType }) => {
  const [end, setEnd] = useState(false)
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (!end) {
      setEnd(inView)
    }
  }, [inView])

  const { x, y } = useScrollPos()

  const setPos = (x: number, y: number) => {
    sessionStorage.setItem('position', JSON.stringify({ x, y }))
  }


  return (
    <Link href={post.link}>
      <a
        className={classNames('news-post', end && 'animated')}
        ref={ref}
        onClick={() => setPos(0, y)}
      >
        <div className="news-post__img">
          <ImageComponent src={post.img} />
        </div>
        <div className="news-post__content">
          <div className="news-post__top">
            <span
              className="news-post__title"
              dangerouslySetInnerHTML={{ __html: post.title }}
            ></span>
            <div className="news-post__text">{post.text}</div>
          </div>
          <div className="news-post__bottom">
            <div className="news-post__cat">{post.cat}</div>
            <div className="news-post__item">
              <IconComponent name={'news/duration'} />
              {post.readTime}
            </div>
            <div className="news-post__item">{getDate(post.datetime)}</div>
          </div>
        </div>
      </a>
    </Link>
  )
})

export default NewsPost
