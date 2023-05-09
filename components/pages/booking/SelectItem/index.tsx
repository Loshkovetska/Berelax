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
    isDisable = false,
  }: any) => {
    return (
      <div
        className={classNames(
          'book-item',
          isSelected && 'active',
          isDisable && 'disabled',
        )}
        onClick={() => setSelected()}
      >
        <div className="book-item__top">
          <div className="book-item__img">
            <ImageComponent src={item?.img} alt={item?.alt} />
          </div>
          {withTime && isSelected && (
            <span
              className={classNames(
                'book-item__time',
                ['nail-care', 'beauty'].includes(item.category) &&
                  'book-service',
              )}
              onClick={(e) => {
                e.stopPropagation()
                changeTimeState(item)
              }}
            >
              {time}{' '}
              {!['nail-care', 'beauty'].includes(item.category) && 'mins'}
              <IconComponent name={'treats/edit'} onClick={() => {}} />
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
          <div
            className="book-item__text"
            dangerouslySetInnerHTML={{ __html: item?.text }}
          ></div>
        </div>
      </div>
    )
  },
)

export default SelectItem
