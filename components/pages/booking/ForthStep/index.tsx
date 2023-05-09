import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useRef, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import { bookService } from '../../../../stores/ContentState'
import Button from '../../../common/Button'
import CheckBox from '../../../common/CheckBox'
import { IconComponent } from '../../../common/IconComponent'
import PhoneSelect from '../../../common/PhoneSelect'
import { BookingStep, UserData } from '../Steps'
import ReCAPTCHA from 'react-google-recaptcha'

const ForthStep = observer(() => {
  const ref = useRef<any>(null),
    recaptchaRef = useRef<any>(null)
  const [isVerify, setVerify] = useState(false)

  const { content } = useContentState()
  const submit = () => {
    if (!isVerify) return

    if (UserData.check1) {
      bookService(UserData).then(() => {
        runInAction(() => {
          BookingStep.tab = 3
        })
      })
    }
  }

  const onReCAPTCHAChange = (captchaCode: any) => {
    if (!captchaCode) {
      setVerify(false)
      return
    }
    setVerify(true)
  }

  return (
    <section className={classNames('first-step forth-step')}>
      <div className="book-steps__container">
        <div
          className="first-step__back"
          onClick={() => {
            runInAction(() => {
              BookingStep.show = false
            })
            setTimeout(() => {
              BookingStep.tab = 1
            }, 600)
          }}
        >
          <IconComponent name={'ic'} />
          <span>
            {content?.backTitle} {content?.tabs[BookingStep.tab - 1].title}
          </span>
        </div>
        <div
          className="book-steps__title"
          dangerouslySetInnerHTML={{ __html: content?.block4?.title }}
        ></div>
        <div
          className="book-steps__text"
          dangerouslySetInnerHTML={{ __html: content?.block4?.text }}
        ></div>
        <form
          ref={ref}
          onSubmit={(e) => {
            e.preventDefault()
            submit()
          }}
        >
          <input
            className="input"
            name="fname"
            value={UserData.fname}
            onChange={(e) => {
              runInAction(() => {
                UserData.fname = e.target.value
              })
            }}
            placeholder={content?.block4?.fnamePlaceholder}
            required
          />
          <input
            className="input"
            name="lname"
            value={UserData.lname}
            onChange={(e) => {
              runInAction(() => {
                UserData.lname = e.target.value
              })
            }}
            placeholder={content?.block4?.lnamePlaceholder}
            required
          />
          <input
            className="input grow"
            type={'email'}
            name="email"
            value={UserData.email}
            onChange={(e) => {
              runInAction(() => {
                UserData.email = e.target.value
              })
            }}
            placeholder={content?.block4?.emailPlaceholder}
            required
          />
          <PhoneSelect
            placeholder={content?.block4?.phonePlaceholder}
            isRequired
          />
          <textarea
            name="addInfo"
            className="input textarea grow"
            value={UserData.addInfo}
            onChange={(e) => {
              runInAction(() => {
                UserData.addInfo = e.target.value
              })
            }}
            placeholder={content?.block4?.addInfoPlaceholder}
          />
          <div className="forth-step__bottom">
            <CheckBox
              value={UserData.check1}
              label={content?.block4?.onecheck}
              returnValue={(value) => {
                runInAction(() => {
                  UserData.check1 = value
                })
              }}
            />
            <CheckBox
              value={UserData.check2}
              label={content?.block4?.secondcheck}
              returnValue={(value) => {
                runInAction(() => {
                  UserData.check2 = value
                })
              }}
            />
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Legy0ojAAAAAOWqwkihlGuTyRkgTOVGR9HhBFIe"
              render="explicit"
              onChange={onReCAPTCHAChange}
            />
            <button
              type="submit"
              className={classNames(
                'button beige button-arrow button-svg p20p40',
                (!UserData.fname.length ||
                  !isVerify ||
                  !UserData.lname.length ||
                  !UserData.email.length ||
                  !UserData.phone.length) &&
                  'disabled',
              )}
            >
              {content?.block4?.buttonTitle}
              <IconComponent name="arrow" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
})

export default ForthStep
