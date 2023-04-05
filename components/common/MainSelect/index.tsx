import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { Fragment, useEffect, useRef, useState } from 'react'
import useClickOutSide from '../../../hooks/ClickOutSide'
import { useWindowDimensions } from '../../../hooks/getWindowDimensions'
import GlobalState from '../../../stores/GlobalState'
import CheckBox from '../CheckBox'
import { IconComponent } from '../IconComponent'
import RadioButton from '../RadioButton'

const Select = observer(
  ({
    placeholder,
    dt,
    getValue,
    multiple,
    defaultValue = '',
  }: {
    placeholder: string
    dt: any
    getValue: (value: any) => void
    multiple: boolean
    defaultValue?: string
  }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef<any>(null)
    const outside = useClickOutSide(ref)
    const [valueMultiple, setMultipleValue] = useState(Array())
    const [value, setValue] = useState('')

    const [isVisible, setVisible] = useState(false)
    useEffect(() => {
      if (outside) {
        setOpen(false)
      }
    }, [outside])

    useEffect(() => {
      if (!value.length && defaultValue.length) {
        setValue(defaultValue)
      }
    }, [defaultValue, value])

    useEffect(() => {
      if (!open) {
        setTimeout(() => {
          setVisible(false)
        }, 400)
        if (multiple) {
          if (valueMultiple.length) {
            getValue(valueMultiple)
          } else getValue([])
        } else {
          if (value.length) {
            getValue(value)
          } else getValue('')
        }
      } else {
        setVisible(true)
      }
    }, [open, valueMultiple, value])

    return (
      <div
        className={classNames('select', open && 'open', isVisible && 'visible')}
        ref={ref}
      >
        <div className="select__top" onClick={() => setOpen(!open)}>
          {
            <span className="select__value">
              {!multiple ? (
                <>{value?.length ? value : placeholder}</>
              ) : (
                <>
                  {valueMultiple.length
                    ? valueMultiple.join(', ')
                    : placeholder}
                </>
              )}
            </span>
          }
          <IconComponent name={'ic'} />
        </div>
        <div
          className="select__list"
          onScroll={() => {
            GlobalState.locoScroll && GlobalState.locoScroll.stop()
          }}
          onMouseLeave={() =>
            GlobalState.locoScroll && GlobalState.locoScroll.start()
          }
        >
          {dt?.map((d: any, i: number) => (
            <div className="select__item" key={i}>
              {multiple ? (
                <CheckBox
                  value={valueMultiple.includes(d)}
                  returnValue={(val) => {
                    let vl = valueMultiple
                    if (val) {
                      vl.push(d)
                    } else vl = vl.filter((v) => v != d)
                    setMultipleValue([...vl])
                  }}
                  label={d}
                />
              ) : (
                <RadioButton
                  value={value == d}
                  returnValue={(val) => {
                    setValue(d)
                  }}
                  label={d}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    )
  },
)

export default Select
