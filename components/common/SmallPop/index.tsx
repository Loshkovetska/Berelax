import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useContentState } from '../../../hooks/RootStoreProvider'
import GlobalState, { changeSmallPopState } from '../../../stores/GlobalState'
import Button from '../Button'

const SmallPop = observer(() => {
  const { content } = useContentState()
  return (
    <section
      className={classNames('small-pop', GlobalState.isSmallOpen && 'open')}
      onClick={changeSmallPopState}
    >
      <div
        className="small-pop__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="small-pop__title"
          dangerouslySetInnerHTML={{ __html: content?.pop?.title }}
        ></div>
        <div
          className="small-pop__text"
          dangerouslySetInnerHTML={{ __html: content?.pop?.text }}
        ></div>
        <Button
          isLink={false}
          action={changeSmallPopState}
          classStr="beige p20p28"
          inner={<>{content?.pop?.buttonTitle}</>}
        />
      </div>
    </section>
  )
})
export default SmallPop
