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
import InViewComponent from '../../../common/InViewComponent'
import Select, { SelectState } from '../../../common/Select'
import Text from '../../../common/Text'
import Title from '../../../common/Title'
import Title40 from '../../../common/Title40'
import { UserData } from '../../booking/Steps'
import ReCAPTCHA from 'react-google-recaptcha'

const ContactForm = observer(() => {
  const ref = useRef<any>(null),
    recaptchaRef = useRef<any>(null)

  const [isVerify, setVerify] = useState(false)

  const { content, airports } = useContentState()
  const [state, setState] = useState({
    fname: '',
    lname: '',
    email: '',
    msg: '',
    subject: '',
    location: '',
    file: null,
    file2: null,
  })

  const submit = () => {
    if (!ref.current || !isVerify) return
    if (state.subject.includes('Defective') && !state.file && !state.file2)
      return
    const fd = new FormData(ref.current)
    fd.append('subject', state.subject)
    fd.append('location', JSON.stringify(state.location))
    state.subject.includes('Defective') &&
      state.file &&
      fd.append('file', state.file)
    state.subject.includes('Defective') &&
      state.file2 &&
      fd.append('file2', state.file2)

    fd.append('status', 'contact')

    // fetch('/', {
    //   method: 'POST',
    //   body: fd,
    // }).then(() => {})

    changeSmallPopState()
  }

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

  useEffect(() => {
    setState({
      ...state,
      subject: UserData.time || '',
    })
  }, [UserData.time])

  useEffect(() => {
    if (SelectState.selected) {
      setState({
        ...state,
        location: SelectState.selected,
      })
    }
  }, [SelectState.selected])

  useEffect(() => {
    if (GlobalState.isSmallOpen) {
      setState({
        ...state,
        fname: '',
        lname: '',
        file: null,
        file2: null,
        subject: '',
        location: '',
        email: '',
        msg: '',
      })

      runInAction(() => {
        UserData.time = null
        UserData.date = null
      })
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
    <section className="contact">
      <div className="contact__container">
        <InViewComponent>
          <Title text={content?.title} classStr="contact__title" />
          <Text text={content?.text} classStr="contact__text" />
        </InViewComponent>
        <InViewComponent delay={1}>
          <form
            ref={ref}
            className="contact__form"
            onSubmit={(e) => {
              e.preventDefault()
              submit()
            }}
          >
            <div className="contact__form-container">
              <Title40
                text={content?.formTitle}
                classStr="contact__form-title"
              />
              <div className="contact__form-row">
                <Input
                  value={state.fname}
                  classStr="mr"
                  placeHolder={content?.fnamePlaceholder}
                  name="fname"
                  isRequired
                  setValue={(value) => setState({ ...state, fname: value })}
                />
                <Input
                  value={state.lname}
                  classStr=""
                  placeHolder={content?.lnamePlaceholder}
                  name="lname"
                  isRequired
                  setValue={(value) => setState({ ...state, lname: value })}
                />
              </div>
              <div className="contact__form-row">
                <Input
                  value={state.email}
                  classStr=""
                  placeHolder={content?.emailPlaceholder}
                  name="email"
                  isRequired
                  setValue={(value) => setState({ ...state, email: value })}
                />
              </div>
              <div className="contact__form-row">
                <Select
                  withSearch={false}
                  isLocate={false}
                  isTimeSelect
                  dt={JSON.parse(
                    JSON.stringify(content?.subjectSelect),
                  ).sort((a: any, b: any) => a.localeCompare(b))}
                  value=""
                  placeholder={content?.subjectPlaceholder}
                />
              </div>
              <div className="contact__form-row">
                <Select
                  withSearch
                  isLocate
                  dt={airports}
                  value=""
                  placeholder={content?.locatePlaceholder}
                />
              </div>
              <div className="contact__form-row">
                <textarea
                  required
                  name="message"
                  value={state.msg}
                  placeholder={content?.msgPlaceholder}
                  className="input"
                  onChange={(e) => setState({ ...state, msg: e.target.value })}
                ></textarea>
              </div>
              {state?.subject.includes('Defective') && (
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
                          <>{content?.uploadReciept}</>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {state?.subject.includes('Defective') && (
                <div className="contact__form-row">
                  <div
                    className={classNames(
                      'product-reg__form-bg',
                      state.file2 && 'selected',
                    )}
                  >
                    <div className={classNames('product-reg__form-file')}>
                      <input type={'file'} onChange={fileLoad2} required />
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
                          <>{content?.attachPhoto}</>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                {content?.buttonTitle}
                <IconComponent name="arrow" />
              </button>
            </div>
          </form>
        </InViewComponent>
      </div>
    </section>
  )
})

export default ContactForm
