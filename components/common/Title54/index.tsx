import classNames from 'classnames'
import { observer } from 'mobx-react'

const Title54 = observer(
  ({ text, classStr }: { text: string; classStr: string }) => {
    return (
      <h2
        className={classNames('title54', classStr)}
        dangerouslySetInnerHTML={{ __html: text }}
      ></h2>
    )
  },
)

export default Title54
