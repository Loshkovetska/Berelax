import { observer } from 'mobx-react'
import { useContentState } from '../../../hooks/RootStoreProvider'
import Button from '../Button'
import { IconComponent } from '../IconComponent'
import Title40 from '../Title40'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

const Cookie = observer(() => {
  const {
    footer: { cookie },
  } = useContentState()
  const [isShow, setShow] = useState(false)

  const applyAll = () => {
    document.querySelector('.cookie')?.classList.remove('anim')

    if (document.cookie.length) {
      Cookies.set('hideModal', 'true', { expires: 7 })
    } else {
      Cookies.set('hideModal', 'true', { expires: 7 })
    }
    setShow(false)
  }

  useEffect(() => {
    if (!Cookies.get('hideModal')) {
      setTimeout(() => {
        setShow(true)
      }, 3000)
    }
  }, [])

  useEffect(() => {
    if (isShow) {
      document.querySelector('.cookie')?.classList.add('anim')
    } else {
      document.querySelector('.cookie')?.classList.remove('anim')
    }
  }, [isShow])

  return (
    <section
      className={classNames('cookie', isShow && 'show')}
      style={{
        visibility: 'hidden',
      }}
    >
      <div className="cookie__container">
        <div className="cookie__close" onClick={() => setShow(false)}>
          <IconComponent name={'close'} />
        </div>
        <Title40 classStr="cookie__title" text={cookie?.title} />
        <div
          className="cookie__text"
          dangerouslySetInnerHTML={{ __html: cookie?.text }}
        ></div>
        <Button
          isLink={false}
          action={applyAll}
          classStr="white button-arrow button-svg p16p20 f16"
          inner={
            <>
              {cookie?.acceptTitle}
              <IconComponent name="arrow" />
            </>
          }
        />
      </div>
    </section>
  )
})
export default Cookie
