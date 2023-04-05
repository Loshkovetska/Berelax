import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import { IconComponent } from '../IconComponent'
import img1 from '../../../assets/footer/4 1.png'
import img2 from '../../../assets/footer/4 1.png'
import img3 from '../../../assets/footer/4 3.png'
import GlobalState, { changeCountryState } from '../../../stores/GlobalState'
import classNames from 'classnames'
import InViewComponent from '../InViewComponent'
import { useInView } from 'react-intersection-observer'
import SocialLink from '../SocialLink'
import { useContentState } from '../../../hooks/RootStoreProvider'
import ImageComponent from '../ImageComponent'
import Link from 'next/link'
import { setSubscribe } from '../../../stores/ContentState'

type FooterColType = {
  title: string
  list: Array<{
    title: string
    link: string
  }>
}
const Footer = observer(() => {
  const { footer, header } = useContentState()
  const [email, setEmail] = useState('')

  const emailValidate = (email: string) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  }

  const subscribe = () => {
    if (email.length && emailValidate(email)) {
      setSubscribe(email).then(() => {
        setEmail('')
      })
    }
  }

  return (
    <footer className="footer">
      <div className="footer__block1">
        <ImageComponent src={img1.src} classStr="footer__block1-img" />

        <div className="footer__row">
          <InViewComponent threshold={0.4}>
            <div className={classNames('footer__left')}>
              <h2
                className="footer__title"
                dangerouslySetInnerHTML={{ __html: footer?.title }}
              ></h2>
              <div className="footer__form">
                <div className="footer__input">
                  <input
                    type={'email'}
                    value={email}
                    placeholder={footer?.placeholder}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button
                  classStr="beige button-arrow"
                  action={subscribe}
                  isLink={false}
                  inner={
                    <>
                      <IconComponent name={'arrow'} />
                    </>
                  }
                />
              </div>
            </div>
          </InViewComponent>
          <InViewComponent threshold={0.4} delay={1}>
            <div className={classNames('footer__list')}>
              {footer?.cols?.map((fi: FooterColType, i: number) => (
                <FooterCol key={i} fi={fi} />
              ))}
            </div>
          </InViewComponent>
        </div>

        <InViewComponent threshold={0.4} delay={1.3}>
          <div className="footer__block1-bottom">
            <div className="footer__socials">
              {footer?.socials?.map(
                (
                  so: {
                    link: string
                    icon: string
                  },
                  i: number,
                ) => (
                  <SocialLink link={so.link} icon={so.icon} key={i} />
                ),
              )}
            </div>
            <div className="footer__block1-right">
              <div className="footer__links">
                {footer?.docs?.map(
                  (
                    d: {
                      title: string
                      link: string
                    },
                    i: number,
                  ) => (
                    <a className="footer__link" href={d.link} key={i}>
                      {d.title}
                    </a>
                  ),
                )}
              </div>
              <div className={classNames('footer__select')}>
                <div
                  className={'footer__select-top'}
                  onClick={changeCountryState}
                >
                  <IconComponent name={'location-point 1'} />
                  <span>{GlobalState.currentLocale.country}</span>
                  <IconComponent name={'ic'} />
                </div>
              </div>
            </div>
          </div>
        </InViewComponent>
        <InViewComponent threshold={0.4} delay={1.6}>
          <div className="footer__copy">
            <div className="footer__text">
              {footer?.copyText} {new Date().getFullYear()}
            </div>
            <ImageComponent
              src={header?.logo || ''}
              classStr="footer__logo"
              alt={header?.alt}
            />
            <div className="footer__text">
              Created by
              <a
                href="https://equal.design/"
                target={'_blank'}
                rel="noreferrer"
              >
                <IconComponent name={'equal'} />
              </a>
            </div>
          </div>
        </InViewComponent>
      </div>
      <FooterBlock footer={footer} />
    </footer>
  )
})

export default Footer

const FooterCol = ({ fi }: { fi: FooterColType }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="footer__list-col">
      <div
        className={classNames('footer__subtitle', open && 'active')}
        onClick={() => setOpen(!open)}
      >
        {fi.title} <IconComponent name={'ic'} />
      </div>
      <div className={classNames('footer__list-sublist', open && 'active')}>
        {fi.list.map((l, id: number) => (
          <a className="footer__link" href={l.link} key={id}>
            {l.title}
          </a>
        ))}
      </div>
    </div>
  )
}

const FooterBlock = ({ footer }: { footer: any }) => {
  const [end, setEnd] = useState(false)
  const [slide, setSlide] = useState(0)
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  })

  useEffect(() => {
    if (!end) {
      setEnd(inView)
    }
  }, [inView, end])

  useEffect(() => {
    if (!end) return

    const interval = setTimeout(() => {
      if (slide + 1 >= footer?.last?.length) {
        setSlide(0)
      } else setSlide(slide + 1)
    }, 5000)

    return () => {
      clearTimeout(interval)
    }
  }, [slide, end])
  return (
    <div className={classNames('footer__block2', end && 'animated')} ref={ref}>
      <ImageComponent src={img1.src} classStr="footer__block2-img first" />
      <ImageComponent src={img2.src} classStr="footer__block2-img second" />
      <ImageComponent src={img3.src} classStr="footer__block2-img third" />
      <div className="footer__block2-content">
        {footer?.last?.map((c: any, i: number) => (
          <div
            className={classNames(
              'footer__block2-slide',
              slide == i && end && 'active',
            )}
            key={i}
          >
            <h3
              className="footer__block2-title title"
              dangerouslySetInnerHTML={{ __html: c?.title }}
            ></h3>
            <Button
              classStr="beige button-svg button-arrow p20p32"
              isLink
              link={c?.link}
              inner={
                <>
                  {c?.buttonTitle} <IconComponent name={'arrow'} />
                </>
              }
            />
          </div>
        ))}
      </div>
      <div className="footer__text">
        {footer?.copyText} {new Date().getFullYear()}
      </div>
    </div>
  )
}
