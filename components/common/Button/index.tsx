import classNames from 'classnames'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import Link from 'next/link'
import { ScrollPos } from '../../../hooks/useScrollPos'

const Button = observer(
  ({
    inner,
    action,
    classStr = '',
    isLink = true,
    link,
    target,
  }: {
    inner: any
    action?: any
    classStr: string
    isLink?: boolean
    link?: string
    target?: boolean
  }) => {
    const setPos = (x: number, y: number) => {
      sessionStorage.setItem('position', JSON.stringify({ x, y }))
    }

    if (target) {
      return (
        <a
          href={link || ''}
          className={classNames('button', classStr)}
          target={target ? '_blank' : ''}
          rel="noreferrer"
        >              {inner}
</a>
      )
    }

    return (
      <>
        {isLink ? (
          <Link href={link || ''}>
            <a
              className={classNames('button', classStr)}
              onClick={() => !target && setPos(0, ScrollPos.top)}
            >
              {inner}
            </a>
          </Link>
        ) : (
          <div className={classNames('button', classStr)} onClick={action}>
            {inner}
          </div>
        )}
      </>
    )
  },
)

export default Button
