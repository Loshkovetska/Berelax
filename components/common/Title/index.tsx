import classNames from 'classnames'
import { observer } from 'mobx-react'

const Title = observer(
  ({ text, classStr = '' }: { text: string; classStr: string }) => {
    return (
      <h1
        className={classNames('title', classStr)}
        dangerouslySetInnerHTML={{ __html: text }}
      ></h1>
    )
  },
)

export default Title
