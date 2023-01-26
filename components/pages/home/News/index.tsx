import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { NewsType } from '../../../../types'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import NewsPost from '../../../common/NewsPost'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import InViewComponent from '../../../common/InViewComponent'
import CustomSlider from '../../../common/CustomSlider'

const News = observer(() => {
  const {
    content: { news },
    news: newsList,
  } = useContentState()

  const navigate = useRouter()

  const [end, setEnd] = useState(false)
  const { ref, inView, entry } = useInView({
    threshold: 0,
  })
  useEffect(() => {
    if (!end) {
      setEnd(inView)
    }
  }, [inView])

  useEffect(() => {
    if (news) {
      const items = document.querySelectorAll('.news-post')
      if (items) {
        items.forEach((i, id) => {
          if (i) {
            ;(i as HTMLElement).style.transitionDelay = `${id * 0.1}s`
          }
        })
      }
    }
  }, [news])

  return (
    <section className="news">
      <div className="news__container">
        <div className={classNames('news__top', end && 'animated')} ref={ref}>
          <h2
            className="news__title"
            dangerouslySetInnerHTML={{ __html: news?.title }}
          ></h2>
          <Button
            isLink
            link="/news"
            inner={
              <>
                {news?.buttonTitle} <IconComponent name="arrow" />
              </>
            }
            classStr="button-arrow button-svg beige p20p40"
          />
        </div>
        <div className="news__list">
          {JSON.parse(JSON.stringify(newsList))
            ?.sort(
              (a: NewsType, b: NewsType) =>
                new Date(b.datetime).getTime() - new Date(a.datetime).getTime(),
            )
            .slice(0, 3)
            .map((ni: NewsType, i: number) => (
              <NewsPost post={ni} key={i} />
            ))}
        </div>
        <div className="news__slider">
          <CustomSlider slidesToShow={1} slidesToScroll={1} variableWidth infinite={false}>
            {JSON.parse(JSON.stringify(newsList))
              ?.sort(
                (a: NewsType, b: NewsType) =>
                  new Date(b.datetime).getTime() -
                  new Date(a.datetime).getTime(),
              )
              .slice(0, 3)
              .map((ni: NewsType, i: number) => (
                <NewsPost post={ni} key={i} />
              ))}
          </CustomSlider>
        </div>
        <InViewComponent>
          <Button
            isLink
            link="/news"
            inner={
              <>
                {news?.buttonTitle} <IconComponent name="arrow" />
              </>
            }
            classStr="button-arrow button-svg beige p20p40"
          />
        </InViewComponent>
      </div>
    </section>
  )
})

export default News
