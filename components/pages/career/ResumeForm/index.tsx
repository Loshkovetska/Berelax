import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState, {
  changeSmallPopState,
} from '../../../../stores/GlobalState'
import { IconComponent } from '../../../common/IconComponent'
import Input from '../../../common/Input'
import Select, { SelectState } from '../../../common/Select'
import Title40 from '../../../common/Title40'
import { UserData } from '../../booking/Steps'
import ReCAPTCHA from 'react-google-recaptcha'
import PhoneSelect from '../../../common/PhoneSelect'
import { vacancyForm } from '../../../../stores/ContentState'

const ResumeForm = observer(({ isCareerPage }: { isCareerPage: boolean }) => {
  const ref = useRef<any>(null),
    recaptchaRef = useRef<any>(null)

  const [isVerify, setVerify] = useState(false)

  const [state, setState] = useState({
    fname: '',
    lname: '',
    email: '',
    city: '',
    country: '',
    phone: '',
    profType: '',
    location: null,
    message: '',
    file2: null,
    file: null,
  })
  const [resetState, setReset] = useState(false)

  const { content, airports } = useContentState()
  const form = content?.form

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

  const fileLoad2 = (e: any) => {
    if (!e.target.files.length) {
      setState({ ...state, file2: null })
      return
    }

    var reader = new FileReader()
    var url = reader.readAsDataURL(e.target.files[0])
    setState({
      ...state,
      file2: e.target.files[0],
    })
  }

  const submit = () => {
    if (!ref.current || !isVerify) return
    if (isCareerPage && (!state.profType.length || !state.location)) return

    vacancyForm({
      ...state,
      lmail: (state.location as any)?.continent.includes('North America')
        ? 1
        : 0,
    }).then(() => {
      changeSmallPopState()
    })
  }

  useEffect(() => {
    if (SelectState.selected) {
      setState({
        ...state,
        location: SelectState.selected,
      })
    }
  }, [SelectState.selected])
  useEffect(() => {
    if (UserData.time) {
      setState({
        ...state,
        profType: UserData.time || '',
      })
    }
  }, [UserData.time])

  useEffect(() => {
    if (GlobalState.isSmallOpen) {
      setState({
        ...state,
        fname: '',
        lname: '',
        file: null,
        file2: null,
        profType: '',
        location: null,
        email: '',
        message: '',
        phone: '',
        city: '',
        country: '',
      })

      runInAction(() => {
        UserData.time = null
        SelectState.selected = null
      })
      setReset(true)

      recaptchaRef.current?.reset()
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
    <section className="resume-form">
      <div className="resume-form__container">
        <Title40 text={form?.title} classStr="resume-form__title" />
        <div
          className="resume-form__text"
          dangerouslySetInnerHTML={{ __html: form?.text }}
        ></div>
        <form
          className="resume-form__form"
          ref={ref}
          onSubmit={(e) => {
            e.preventDefault()
            submit()
          }}
        >
          <div className="resume-form__form-cont">
            <div className="resume-form__form-row">
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
            <div className="resume-form__form-row">
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
            <div className="resume-form__form-row">
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
            <div className="resume-form__form-row">
              <Input
                value={state.city}
                setValue={(value) =>
                  setState({
                    ...state,
                    city: value,
                  })
                }
                name="city"
                isRequired
                placeHolder={form?.cityPlaceHolder}
                classStr="mr"
              />
              <Input
                value={state.country}
                setValue={(value) =>
                  setState({
                    ...state,
                    country: value,
                  })
                }
                name="country"
                isRequired
                placeHolder={form?.countryPlaceHolder}
                classStr=""
              />
            </div>
            {isCareerPage && (
              <>
                <div className="resume-form__form-row">
                  <Select
                    value={state.profType}
                    isLocate={false}
                    withSearch={false}
                    placeholder={form?.profPlaceholder}
                    isTimeSelect
                    dt={JSON.parse(
                      JSON.stringify(form?.profSelect),
                    ).sort((a: any, b: any) => a.localeCompare(b))}
                  />
                </div>
                <div className="resume-form__form-row">
                  <Select
                    value={''}
                    isLocate={true}
                    withSearch={true}
                    placeholder={form?.locatePlaceholder}
                    dt={airports}
                  />
                </div>
              </>
            )}
            <div className="resume-form__form-row">
              <textarea
                className="input"
                value={state.message}
                required
                placeholder={form?.msgPlaceholder}
                onChange={(e) =>
                  setState({ ...state, message: e.target.value })
                }
              ></textarea>
            </div>
            <div className="contact__form-row">
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
                    required
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
                      <>{form?.uploadResume}</>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="contact__form-row">
              <div
                className={classNames(
                  'product-reg__form-bg',
                  state.file2 && 'selected',
                )}
              >
                <div className={classNames('product-reg__form-file')}>
                  <input type={'file'} onChange={fileLoad2} />
                  <div className="product-reg__form-text">
                    <IconComponent
                      name={'form/close+delete'}
                      className={classNames(state.file2 && 'show')}
                    />
                    <IconComponent
                      name={'form/upload'}
                      className={classNames(!state.file2 && 'show')}
                    />

                    {state.file2 ? (
                      <>{(state?.file2 as any)?.name}</>
                    ) : (
                      <>{form?.coverLetter}</>
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
          </div>
        </form>
      </div>
    </section>
  )
})

export default ResumeForm
