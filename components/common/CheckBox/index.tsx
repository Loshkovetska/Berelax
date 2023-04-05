import classNames from 'classnames'
import { ReactElement, useEffect, useState } from 'react'
import { IconComponent } from '../IconComponent'

const CheckBox = ({
  label,
  value,
  returnValue,
}: {
  label: ReactElement | string
  value: boolean
  returnValue: (value: boolean) => void
}) => {
  return (
    <div className="checkbox" onClick={() => returnValue(!value)}>
      <div className={classNames('checkbox__btn', value && 'checked')}>
        <IconComponent name={'treats/mark'} />
      </div>
      <div className="checkbox__label">{label}</div>
    </div>
  )
}

export default CheckBox
