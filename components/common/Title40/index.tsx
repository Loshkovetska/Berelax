import classNames from 'classnames'
import { observer } from 'mobx-react'

const Title40 = observer(
  ({ text, classStr }: { text: string; classStr: string }) => {
    return (
      <h3
        className={classNames('title40', classStr)}
        dangerouslySetInnerHTML={{ __html: text }}
      ></h3>
    )
  },
)

export default Title40
