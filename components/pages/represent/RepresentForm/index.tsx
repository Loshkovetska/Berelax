import { observer } from 'mobx-react'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState, {
  changeSmallPopState,
} from '../../../../stores/GlobalState'
import { IconComponent } from '../../../common/IconComponent'
import Input from '../../../common/Input'
import InViewComponent from '../../../common/InViewComponent'
import Title40 from '../../../common/Title40'
import ReCAPTCHA from 'react-google-recaptcha'
import PhoneSelect from '../../../common/PhoneSelect'
import { airForm } from '../../../../stores/ContentState'

const RepresentForm = observer(() => {
  const ref = useRef<any>(null),
    recaptchaRef = useRef<any>(null)

  const [isVerify, setVerify] = useState(false)

  const { content } = useContentState()
  const form = content?.form

  const [resetState, setReset] = useState(false)

  const [state, setState] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    file: null,
  })
  const fileLoad = (e: any) => {
    if (!e.target.files.length) {
      setState({ ...state, file: null })
      return
    }

    var reader = new FileReader()
    var url = reader.readAsDataURL(e.target.files[0])
    setState({
      ...state,
      file: e.target.files[0],
    })
  }

  const submit = () => {
    if (!ref.current || !isVerify || !state.message.length) return

    airForm(state).then(() => {
      changeSmallPopState()
    })
  }

  useEffect(() => {
    if (GlobalState.isSmallOpen) {
      setState({
        ...state,
        fname: '',
        lname: '',
        file: null,
        email: '',
        message: '',
        phone: '',
        company: '',
      })
      recaptchaRef.current?.reset()
      setReset(true)
    }
  }, [GlobalState.isSmallOpen])

  const onReCAPTCHAChange = (captchaCode: any) => {
    if (!captchaCode) {
      setVerify(false)
      return
    }
    setVerify(true)
  }
  return (
    <section className="partner-form">
      <InViewComponent>
        <div className="partner-form__container">
          <form
            className="partner-form__form"
            ref={ref}
            onSubmit={(e) => {
              e.preventDefault()
              submit()
            }}
          >
            <Title40 text={form?.title} classStr="partner-form__title" />
            <div
              className="partner-form__text"
              dangerouslySetInnerHTML={{ __html: form?.text }}
            ></div>
            <div className="partner-form__row">
              <Input
                value={state.fname}
                setValue={(value) =>
                  setState({
                    ...state,
                    fname: value,
                  })
                }
                name="fname"
                isRequired
                placeHolder={form?.fnamePlaceholder}
                classStr="mr"
              />
              <Input
                value={state.lname}
                setValue={(value) =>
                  setState({
                    ...state,
                    lname: value,
                  })
                }
                name="lname"
                isRequired
                placeHolder={form?.lnamePlaceholder}
                classStr=""
              />
            </div>
            <div className="partner-form__row">
              <Input
                value={state.email}
                setValue={(value) =>
                  setState({
                    ...state,
                    email: value,
                  })
                }
                name="email"
                type="email"
                isRequired
                placeHolder={form?.emailPlaceholder}
                classStr=""
              />
            </div>
            <div className="partner-form__row">
              <PhoneSelect
                isRequired
                placeholder={form?.phoneNumberPlaceholder}
                resetField={resetState}
                setPhoneNumber={(value) =>
                  setState({
                    ...state,
                    phone: value,
                  })
                }
              />
            </div>
            <div className="partner-form__row">
              <Input
                value={state.company}
                setValue={(value) =>
                  setState({
                    ...state,
                    company: value,
                  })
                }
                name="company"
                isRequired
                placeHolder={form?.companyPlaceholder}
                classStr=""
              />
            </div>
            <div className="partner-form__row">
              <textarea
                className="input"
                required
                value={state.message}
                placeholder={form?.msgPlaceholder}
                onChange={(e) =>
                  setState({ ...state, message: e.target.value })
                }
              ></textarea>
            </div>
            <div className="partner-form__row">
              <div
                className={classNames(
                  'product-reg__form-bg',
                  state.file && 'selected',
                )}
              >
                <div className={classNames('product-reg__form-file')}>
                  <input
                    type={'file'}
                    onChange={fileLoad}
                    accept=".doc,.docx,.pdf"
                  />
                  <div className="product-reg__form-text">
                    <IconComponent
                      name={'form/close+delete'}
                      className={classNames(state.file && 'show')}
                    />
                    <IconComponent
                      name={'form/upload'}
                      className={classNames(!state.file && 'show')}
                    />

                    {state.file ? (
                      <>{(state?.file as any)?.name}</>
                    ) : (
                      <>{form?.upload}</>
                    )}
                  </div>
                </div>
              </div>
            </div>
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
              )}
            >
              {form?.buttonTitle}
              <IconComponent name="arrow" />
            </button>
          </form>
        </div>
      </InViewComponent>
    </section>
  )
})

export default RepresentForm
