import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { IconComponent } from '../IconComponent'

const RadioButton = ({
  label,
  value,
  returnValue,
  isMark = false,
}: {
  label: any
  value: boolean
  returnValue: (value: boolean) => void
  isMark?: boolean
}) => {
  return (
    <div className="radiobutton" onClick={() => returnValue(!value)}>
      <div className={classNames('radiobutton__btn', value && 'checked', isMark && 'mark-but')}>
        {isMark ? <IconComponent name="treats/check" /> : <span></span>}
      </div>
      <div className="radiobutton__label">{label}</div>
    </div>
  )
}

export default RadioButton
