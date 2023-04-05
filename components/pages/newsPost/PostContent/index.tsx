import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { getDate } from '../../../../funcs/dates'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import { IconComponent } from '../../../common/IconComponent'
import ImageComponent from '../../../common/ImageComponent'
import ImgBackground from '../../../common/ImgBackground'
import InViewComponent from '../../../common/InViewComponent'
import Text from '../../../common/Text'
import Title from '../../../common/Title'

const PostContent = observer(() => {
  const [host, setHost] = useState('')
  const { content } = useContentState()

  const copy = useCallback(() => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(window.location.href)
    }
  }, [])

  useEffect(() => {
    setHost(window.location.href)
  }, [])

  return (
    <section className="post-content">
      <div className="post-content__container">
        <InViewComponent>
          <Title text={content?.title} classStr="post-content__title" />
          <Text text={content?.text} classStr="post-content__text" />
        </InViewComponent>
        <InViewComponent delay={0.3}>
          <ImgBackground src={content?.img} alt={content?.alt} />
        </InViewComponent>
        <InViewComponent delay={0.5}>
          <div className="post-content__info">
            <div className="post-content__info-row">
              {content?.author && (
                <div className="post-content__info-col author-col">
                  <div className="post-content__info-title">
                    {content?.written}
                  </div>
                  <div className="post-content__info-text">
                    {content?.author}
                  </div>
                </div>
              )}
              <div className="post-content__info-col">
                <div className="post-content__info-title">
                  {content?.publish}
                </div>
                <div className="post-content__info-text">
                  {getDate(content?.datetime)}
                </div>
              </div>
            </div>
            <div className="post-content__info-share">
              <div className="post-content__info-but">
                <span>{content?.share}</span>{' '}
                <IconComponent name={'news/share'} />
              </div>
              <div className="post-content__socials">
                <div className="post-content__socials-item" onClick={copy}>
                  <IconComponent name={'news/link'} />
                </div>
                {content?.socials?.map((so: any, id: number) => (
                  <a
                    href={so.link + host}
                    target={'_blank'}
                    key={id}
                    rel="noreferrer"
                    className="post-content__socials-item"
                  >
                    <ImageComponent src={so.icon} alt={so.alt} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </InViewComponent>
        <InViewComponent>
          <div
            className="post-content__content"
            dangerouslySetInnerHTML={{ __html: content?.content }}
          ></div>
        </InViewComponent>
      </div>
    </section>
  )
})

export default PostContent
