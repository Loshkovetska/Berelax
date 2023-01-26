import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { IconComponent } from '../../../common/IconComponent'

const BookTab = observer(
  ({
    isActive,
    text,
    isFirst,
    isLast,
    setTab,
    isDisable,
  }: {
    isActive: boolean
    text: string
    isFirst: boolean
    isLast: boolean
    setTab: () => void
    isDisable: boolean
  }) => {
    const { width } = useWindowDimensions()
    return (
      <div
        className={classNames(
          'book-tab',
          isActive && 'active',
          isFirst && 'first',
          isLast && 'last',
          isDisable && 'disable',
        )}
        onClick={setTab}
      >
        {!isFirst && !isLast && (
          <>
            <IconComponent name={'Subtract'} />
            <IconComponent name={'Subtract-mob'} className="mob" />
          </>
        )}
        {isFirst && !isLast && <IconComponent name={'Step'} />}
        {isLast && !isFirst && (
          <>
            <IconComponent name={'Subtract1'} />
            <IconComponent name={'Subtract-mob'} className="mob" />
          </>
        )}

        <span> {text}</span>
      </div>
    )
  },
)
export default BookTab
