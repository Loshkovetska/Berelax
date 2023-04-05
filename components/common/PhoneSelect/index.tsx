import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import { UserData } from '../../pages/booking/Steps'
import GlobalState from '../../../stores/GlobalState'
import ImageComponent from '../ImageComponent'
import classNames from 'classnames'
import useClickOutSide from '../../../hooks/ClickOutSide'
import { IconComponent } from '../IconComponent'
import phonecodes from '../../../mocks/phonecodes'

const PhoneSelect = observer(
  ({
    placeholder,
    isRequired,
    setPhoneNumber,
    resetField,
  }: {
    placeholder: string
    isRequired: boolean
    resetField?: boolean
    setPhoneNumber?: (value: string) => void
  }) => {
    const [dt, setDt] = useState<
      Array<{
        title: string
        flag: string
        code: string
      }>
    >([])
    const ref = useRef<any>(null)
    const [country, setCountry] = useState<any>(null)
    const [show, setShow] = useState(false)
    const [phone, setPhone] = useState('')
    const outside = useClickOutSide(ref)

    useEffect(() => {
      if (!dt.length) {
        try {
          const data: any = []
          phonecodes
            ?.sort((a, b) => a.country_en.localeCompare(b.country_en))
            .forEach((p: any) => {
              data.push({
                title: p.country_en,
                code: '+' + p.phone_code,
                flag: `https://flagsapi.com/${p.country_code}/flat/32.png`,
              })
            })

          setDt(data)
          // fetch(`https://restcountries.com/v3.1/all`)
          //   .then((r) => r.json())
          //   .then((res) => {
          //     console.log(res)
          //     if (res.length) {
          //       let sub = res
          //         .map((c: any) => {
          //           return {
          //             title: c.name.official,
          //             code: c.idd.root,
          //             flag: c.flags.svg || c.flags.png,
          //           }
          //         })
          //         .sort((a: any, b: any) => a.title.localeCompare(b.title))
          //       setDt(sub)
          //     }
          //   })
        } catch (e) {
          console.log('phone api error', e)
        }
      }
    }, [dt])

    useEffect(() => {
      if (outside) {
        setShow(false)
      }
    }, [outside])

    useEffect(() => {
      if (!country && dt.length) {
        setCountry({
          code: dt[0].code,
          flag: dt[0].flag,
        })
      }
    }, [dt, country])

    useEffect(() => {
      if (resetField && dt.length) {
        setCountry({
          code: dt[0].code,
          flag: dt[0].flag,
        })
        setPhone('')
      }
    }, [resetField, dt])

    useEffect(() => {
      if (!show && country && phone.length) {
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
                <ImageComponent src={country.flag} alt={''} />
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
                setPhoneNumber &&
                  setPhoneNumber(`${country.code}${e.target.value}`)
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
                <ImageComponent src={country.flag} alt="" />
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
