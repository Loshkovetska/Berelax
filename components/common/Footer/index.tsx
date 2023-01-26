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

const Footer = observer(() => {
  const { footer, header } = useContentState()
  const [email, setEmail] = useState('')

  const subscribe = () => {
    const fd = new FormData()
    fd.append('status', 'subscribe')
    fd.append('email', email)
    fetch('', {
      method: 'POST',
      body: fd,
    }).then(() => {})
  }

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    const s = document.querySelector('.footer')

    if (!s) return
    ;(s as any).style.setProperty('--vh', `${vh}px`)

    window.addEventListener('resize', function (e) {
      let vh = window.innerHeight * 0.01
      const s = document.querySelector('.footer')
      if (!s) return
      ;(s as any).style.setProperty('--vh', `${vh}px`)
    })
  }, [GlobalState.locoScroll])

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
              {footer?.cols?.map((fi: any, i: number) => (
                <FooterCol key={i} fi={fi} />
              ))}
            </div>
          </InViewComponent>
        </div>

        <InViewComponent threshold={0.4} delay={1.3}>
          <div className="footer__block1-bottom">
            <div className="footer__socials">
              {footer?.socials?.map((so: any, i: number) => (
                <SocialLink link={so.link} icon={so.icon} key={i} />
              ))}
            </div>
            <div className="footer__block1-right">
              <div className="footer__links">
                {footer?.docs?.map((d: any, i: number) => (
                  <Link href={d.link} key={i}>
                    <a className="footer__link">{d.title}</a>
                  </Link>
                ))}
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
            <img
              src={header?.logo || ''}
              className="footer__logo"
              alt="be_relax"
            />
            <div className="footer__text">
              Created by
              <a
                href="https://equal.design/"
                target={'_blank'}
                rel="noreferrer"
              >
                {' '}
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

const FooterCol = ({ fi }: { fi: any }) => {
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
        {fi.list.map((l: any, id: number) => (
          <Link href={l.link} key={id}>
            <a className="footer__link"> {l.title}</a>
          </Link>
        ))}
      </div>
    </div>
  )
}

const FooterBlock = ({ footer }: { footer: any }) => {
  const [end, setEnd] = useState(false)
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  })

  useEffect(() => {
    if (!end) {
      setEnd(inView)
    }
  }, [inView])

  return (
    <div className={classNames('footer__block2', end && 'animated')} ref={ref}>
      <ImageComponent src={img1.src} classStr="footer__block2-img first" />
      <ImageComponent src={img2.src} classStr="footer__block2-img second" />
      <ImageComponent src={img3.src} classStr="footer__block2-img third" />
      <div className="footer__block2-content">
        <h3 className="footer__block2-title title">{footer?.last.title}</h3>
        <Button
          classStr="beige button-svg button-arrow p20p32"
          isLink
          link={footer?.last.link}
          inner={
            <>
              {footer?.last.buttonTitle} <IconComponent name={'arrow'} />
            </>
          }
        />
      </div>
      <div className="footer__text">
        {footer?.copyText} {new Date().getFullYear()}
      </div>
    </div>
  )
}
