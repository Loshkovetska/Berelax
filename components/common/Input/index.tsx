import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useRef } from 'react'

const Input = observer(
  ({
    type = 'text',
    value,
    setValue,
    classStr = '',
    placeHolder = '',
    isRequired = false,
    name = 'input',
    isFocus = false,
    autoFocus = false,
  }: {
    value: string
    setValue: (value: string) => void
    type?: string
    classStr?: string
    placeHolder: string
    isRequired?: boolean
    name?: string
    isFocus?: boolean
    autoFocus?: boolean
  }) => {
    const ref = useRef<any>(null)

    useEffect(() => {
      if (isFocus && ref.current) {
        ref.current.focus()
      } else {
      }
    }, [isFocus])
    return (
      <input
        autoFocus={isFocus}
        ref={ref}
        type={type}
        className={classNames('input', classStr)}
        value={value}
        required={isRequired}
        placeholder={placeHolder}
        name={name}
        onChange={(e) => setValue(e.target.value)}
      />
    )
  },
)

export default Input
