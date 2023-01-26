import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState, {
  changeCalendarState,
  changeSmallPopState,
} from '../../../../stores/GlobalState'
import Button from '../../../common/Button'
import CheckBox from '../../../common/CheckBox'
import { IconComponent } from '../../../common/IconComponent'
import Input from '../../../common/Input'
import InViewComponent from '../../../common/InViewComponent'
import Select from '../../../common/Select'
import Title from '../../../common/Title'
import { UserData } from '../../booking/Steps'
import ReCAPTCHA from 'react-google-recaptcha'

const ProdRegister = observer(() => {
  const ref = useRef<any>(null),
    recaptchaRef = useRef<any>(null)

  const [isVerify, setVerify] = useState(false)
  const { content } = useContentState()
  const [state, setState] = useState({
    fname: '',
    lname: '',
    product: {
      title: '',
      id: null,
    },
    date: null,
    serialNumber: '',
    file: null,
    check1: false,
    check2: false,
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
    if (!ref.current || !isVerify) return
    if (state.check1) {
      const fd = new FormData(ref.current)
      fd.append('product', (state.product.id as any)?.toString() || '')
      state.date && fd.append('date', state.date)
      state.file && fd.append('file', state.file)
      state.check2 && fd.append('sign-up', state.check2.toString())

      fd.append('status', 'product-register')
      //   fetch('/', {
      //     method: 'POST',
      //     body: fd,
      //   }).then(() => {})

      changeSmallPopState()
    }
  }

  useEffect(() => {
    setState({ ...state, date: UserData.date as any })
  }, [UserData.date])

  useEffect(() => {
    const el = content?.products?.find((p: any) => p.title == UserData.time)
    if (el) {
      setState({ ...state, product: el })
    }
  }, [UserData.time])

  useEffect(() => {
    if (GlobalState.isSmallOpen) {
      setState({
        ...state,
        fname: '',
        lname: '',
        product: {
          ...state.product,
          title: '',
          id: null,
        },
        date: null,
        serialNumber: '',
        file: null,
        check1: false,
        check2: false,
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
    <section className="product-reg">
      <div className="product-reg__container">
        <InViewComponent>
          <div className="product-reg__top">
            <Title classStr="product-reg__title" text={content?.title} />
            <div
              className="product-reg__text"
              dangerouslySetInnerHTML={{ __html: content?.text }}
            ></div>
          </div>
        </InViewComponent>
        <InViewComponent delay={1}>
          <form
            ref={ref}
            className="product-reg__form"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div className="product-reg__form-container">
              <h2
                className="product-reg__form-title"
                dangerouslySetInnerHTML={{ __html: content?.formTitle }}
              ></h2>
              <div className="product-reg__form-row">
                <Input
                  name={'fname'}
                  placeHolder={content?.fnamePlaceholder}
                  classStr="mr"
                  value={state.fname}
                  isRequired
                  setValue={(value) => setState({ ...state, fname: value })}
                />
                <Input
                  name={'lname'}
                  placeHolder={content?.lnamePlaceholder}
                  classStr=""
                  isRequired
                  value={state.lname}
                  setValue={(value) => setState({ ...state, lname: value })}
                />
              </div>
              <div className="product-reg__form-row">
                <Select
                  isLocate={false}
                  isTimeSelect={true}
                  withSearch={false}
                  placeholder={content?.productPlaceholder}
                  value={state.product?.title}
                  dt={JSON.parse(
                    JSON.stringify(content?.products.map((p: any) => p.title)),
                  ).sort((a: any, b: any) => a.localeCompare(b))}
                />
              </div>

              <div className="product-reg__form-row">
                <section className={classNames('loc-select')}>
                  <div className="loc-select__top" onClick={() => {}}>
                    <span className="loc-select__value">
                      {state.date
                        ? new Date(state.date).toLocaleDateString()
                        : content?.datePlaceholder}
                    </span>

                    <Button
                      inner={
                        <>
                          <IconComponent name="socials/calendar" />
                        </>
                      }
                      classStr="beige button-search"
                      isLink={false}
                      action={changeCalendarState}
                    />
                  </div>
                </section>
              </div>

              <div className="product-reg__form-row">
                <Input
                  placeHolder={content?.serialPlaceholder}
                  classStr=""
                  name={'serialNumber'}
                  isRequired
                  value={state.serialNumber}
                  setValue={(value) =>
                    setState({ ...state, serialNumber: value })
                  }
                />
              </div>
              <div className="product-reg__form-row">
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
                        <>{content?.fileText}</>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-reg__form-bottom">
                <CheckBox
                  label={content?.checkOne}
                  value={state.check1}
                  returnValue={(value) => setState({ ...state, check1: value })}
                />
                <CheckBox
                  label={content?.checkTwo}
                  value={state.check2}
                  returnValue={(value) => setState({ ...state, check2: value })}
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
                  )}
                  onClick={submit}
                >
                  {content?.buttonTitle}
                  <IconComponent name="arrow" />
                </button>
              </div>
            </div>
          </form>
        </InViewComponent>
      </div>
    </section>
  )
})

export default ProdRegister
