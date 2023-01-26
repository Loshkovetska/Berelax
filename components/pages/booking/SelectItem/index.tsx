import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useState } from 'react'
import { changeTimeState } from '../../../../stores/GlobalState'
import { IconComponent } from '../../../common/IconComponent'
import ImageComponent from '../../../common/ImageComponent'
import RadioButton from '../../../common/RadioButton'

const SelectItem = observer(
  ({
    item,
    isSelected,
    setSelected,
    multiple,
    withTime = false,
    time,
  }: any) => {
    return (
      <div
        className={classNames('book-item', isSelected && 'active')}
        onClick={() => setSelected()}
      >
        <div className="book-item__top">
          <div className="book-item__img">
            <ImageComponent src={item?.img} />
          </div>
          {withTime && isSelected && (
            <span
              className="book-item__time"
              onClick={(e) => e.stopPropagation()}
            >
              {time} mins
              <IconComponent
                name={'treats/edit'}
                onClick={() => {
                  changeTimeState(item)
                }}
              />
            </span>
          )}
          <RadioButton
            label={''}
            value={isSelected}
            isMark={multiple}
            returnValue={(value) => {}}
          />
        </div>
        <div className="book-item__content">
          <div className="book-item__title">{item?.title}</div>
          <div className="book-item__text">{item?.text}</div>
        </div>
      </div>
    )
  },
)

export default SelectItem
