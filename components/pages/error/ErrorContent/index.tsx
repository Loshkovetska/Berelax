import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import Text from '../../../common/Text'
import Title from '../../../common/Title'
import Title54 from '../../../common/Title54'
import img1 from '../../../../assets/footer/4 1.png'
import img2 from '../../../../assets/footer/4 1.png'
import img3 from '../../../../assets/footer/4 3.png'
import ImageComponent from '../../../common/ImageComponent'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'

const ErrorContent = () => {
  const [end, setEnd] = useState(false)
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  })
  useEffect(() => {
    if (!end) {
      setEnd(inView)
    }
  }, [inView, end])
  const { content } = useContentState()
  return (
    <section className={classNames('error-page', end && 'animated')} ref={ref}>
      <div className="error-page__container">
        <Title classStr="" text={content?.acf?.title} />
        <Title54 classStr="" text={content?.acf?.text} />
        <Text classStr="" text={content?.acf?.sub_text} />
        <Button
          classStr="beige button-arrow button-svg p20p32"
          isLink
          link={content?.acf?.button?.url}
          inner={
            <>
              {content?.acf?.button?.title} <IconComponent name={'arrow'} />
            </>
          }
        />
      </div>
      <ImageComponent src={img1.src} classStr="footer__block2-img first" />
      <ImageComponent src={img2.src} classStr="footer__block2-img second" />
      <ImageComponent src={img3.src} classStr="footer__block2-img third" />
    </section>
  )
}

export default ErrorContent
