import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { UserData } from '../../pages/booking/Steps'
import GlobalState from '../../../stores/GlobalState'
import ImageComponent from '../ImageComponent'
import classNames from 'classnames'
import useClickOutSide from '../../../hooks/ClickOutSide'
import { IconComponent } from '../IconComponent'

const PhoneSelect = observer(
  ({
    dt,
    placeholder,
    isRequired,
    setPhoneNumber,
    resetField,
  }: {
    dt: any
    placeholder: string
    isRequired: boolean
    resetField?: boolean
    setPhoneNumber?: (value: string) => void
  }) => {
    const ref = useRef<any>(null)
    const [country, setCountry] = useState<any>(null)
    const [show, setShow] = useState(false)
    const [phone, setPhone] = useState('')
    const outside = useClickOutSide(ref)

    useEffect(() => {
      if (outside) {
        setShow(false)
      }
    }, [outside])

    useEffect(() => {
      if (!country) {
        setCountry({
          code: dt[0].code,
          flag: dt[0].flag,
        })
      }
    }, [dt])

    useEffect(() => {
      if (resetField) {
        setCountry({
          code: dt[0].code,
          flag: dt[0].flag,
        })
          setPhone('')
      }
    }, [resetField, dt])

    useEffect(() => {
      if (!show && country) {
        runInAction(() => {
          UserData.phone = `${country.code}${phone}`
        })
        setPhoneNumber && setPhoneNumber(`${country.code}${phone}`)
      }
    }, [show, country, phone])

    return (
      <section className={classNames('phone-select', show && 'show')} ref={ref}>
        <div className="phone-select__top">
          <div className="phone-select__flag" onClick={() => setShow(!show)}>
            {country && (
              <>
                <ImageComponent src={country.flag} />
                {country.code}
              </>
            )}
            <IconComponent name="ic" />
          </div>
          <input
            onClick={() => setShow(false)}
            required={isRequired}
            placeholder={placeholder}
            className="phone-select__input"
            value={phone}
            name="phone"
            onChange={(e) => {
              if (
                !/[A-Za-zА-Яа-яїі]/g.test(e.target.value) &&
                e.target.value.length <= 15
              ) {
                setPhone(e.target.value)
              }
            }}
          />
        </div>
        <div
          className="phone-select__list"
          onMouseLeave={() => {
            GlobalState.locoScroll && GlobalState.locoScroll.start()
          }}
          onScroll={() => {
            GlobalState.locoScroll && GlobalState.locoScroll.stop()
          }}
        >
          {dt?.map((country: any, id: number) => (
            <div
              className="phone-select__item"
              key={id}
              onClick={() => {
                setCountry({
                  ...country,
                  code: country.code,
                  flag: country.flag,
                })
                setShow(false)
              }}
            >
              <div className="phone-select__flag">
                <ImageComponent src={country.flag} />
                {country.code}
              </div>
              {country.title}
            </div>
          ))}
        </div>
      </section>
    )
  },
)
export default PhoneSelect
