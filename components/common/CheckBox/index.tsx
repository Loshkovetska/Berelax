import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { IconComponent } from '../IconComponent'

const CheckBox = ({
  label,
  value,
  returnValue,
}: {
  label: any
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
