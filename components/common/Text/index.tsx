import classNames from 'classnames'
import { observer } from 'mobx-react'

const Text = observer(
  ({ text, classStr = '' }: { text: string; classStr: string }) => {
    return (
      <div
        className={classNames('text', classStr)}
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    )
  },
)

export default Text
