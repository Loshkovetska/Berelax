import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { getDate } from '../../../funcs/dates'
import { IconComponent } from '../IconComponent'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'
import ImageComponent from '../ImageComponent'
import useScrollPos from '../../../hooks/useScrollPos'
import Link from 'next/link'

const NewsPost = observer(({ post }: { post: any }) => {
  const [colors, setColors] = useState('rgba(255, 255, 255, 0.3)')
  const [end, setEnd] = useState(false)
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (!end) {
      setEnd(inView)
    }
  }, [inView, end])

  const { x, y } = useScrollPos()

  const setPos = (x: number, y: number) => {
    sessionStorage.setItem('position', JSON.stringify({ x, y }))
  }

  return (
    <a
      className={classNames('news-post', end && 'animated')}
      href={post.link}
      ref={ref}
      onClick={() => setPos(0, y)}
      style={{ backgroundColor: colors }}
    >
      <div className="news-post__img">
        <ImageComponent
          src={post.img}
          alt={post.alt}
          getColors={(colors) =>
            setColors(`rgba(${colors.r},${colors.g},${colors.b}, 0.3)`)
          }
        />
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
            {post.readTime + ' mins'}
          </div>
          <div className="news-post__item">{getDate(post.datetime)}</div>
        </div>
      </div>
    </a>
  )
})

export default NewsPost
