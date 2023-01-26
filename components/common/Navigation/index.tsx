import classNames from 'classnames'
import { observer } from 'mobx-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { useWindowDimensions } from '../../../hooks/getWindowDimensions'
import { useContentState } from '../../../hooks/RootStoreProvider'
import Button from '../Button'
import { IconComponent } from '../IconComponent'
import ImageComponent from '../ImageComponent'

const Navigation = observer(({ classStr }: { classStr: string }) => {
  const { header } = useContentState()
  const { asPath } = useRouter()
  const ref = useRef<any>(null)
  const { width } = useWindowDimensions()

  return (
    <nav className="navigation" ref={ref}>
      <div className="navigation__list">
        {header?.menu?.map((hi: any, id: number) => (
          <div
            className={classNames(
              'navigation__item',
              asPath.includes(hi.link) && 'active',
            )}
        
            onMouseMove={() => {
              if (width > 1024) {
                const items = document.querySelectorAll(
                  `header.${classStr} .navigation__item`,
                )
                if (items && items.length) {
                  items[id].classList.add('hover-state')
                }
              }
            }}
            onMouseLeave={() => {
              if (width > 1024) {
                const items = document.querySelectorAll(
                  `header.${classStr} .navigation__item`,
                )
                if (items && items.length) {
                  items[id].classList.remove('hover-state')
                }
              }
            }}
            key={id}
          >
            <div className="navigation__item-top">
              {!hi.link || hi.link.includes('#') ? (
                <div className="navigation__link"> {hi.title}</div>
              ) : (
                <Link href={hi.link}>
                  <a className={classNames('navigation__link')}>{hi.title}</a>
                </Link>
              )}
              {hi.submenu.length ? (
                <IconComponent name={'ic'} className="" />
              ) : (
                <></>
              )}
            </div>
            {hi.submenu.length ? (
              <div className="navigation__item-content">
                <div className={classNames('navigation__item-bottom')}>
                  {hi?.submenu?.map((sub: any, i: number) => (
                    <div
                      className={classNames(
                        'navigation__subitem',
                        !hi.isProducts && 'links-block',
                      )}
                      key={i}
                    >
                      {hi.isProducts ? (
                        <Link href={sub.link}>
                          <a className="navigation__subitem-img">
                            <ImageComponent src={sub.img} />
                          </a>
                        </Link>
                      ) : (
                        <div className="navigation__subitem-img">
                          <ImageComponent src={sub.img} />
                        </div>
                      )}
                      {hi.isProducts ? (
                        <Link href={sub.link}>
                          <a className="navigation__subitem-title">
                            {' '}
                            {sub.title}
                          </a>
                        </Link>
                      ) : (
                        <></>
                      )}
                      <div className="navigation__subitem-list">
                        {(sub as any)?.list ? (
                          (sub as any)?.list?.map((li: any, idx: number) => (
                            <Link key={idx} href={li.link}>
                              <a className="navigation__subitem-text">
                                {li.title}
                              </a>
                            </Link>
                          ))
                        ) : (
                          <Button
                            isLink
                            link={(sub as any).link}
                            classStr="white p16p20 button-arrow button-svg simple"
                            inner={
                              <>
                                {sub.title}
                                {/* <IconComponent name={'arrow'} className="" /> */}
                              </>
                            }
                          />
                        )}
                      </div>
                      {i + 1 == hi.submenu.length && hi.isProducts && (
                        <Button
                          isLink
                          link={hi.link}
                          classStr="white p16p20 button-arrow button-svg"
                          inner={
                            <>
                              See all {hi.title}
                              <IconComponent name={'arrow'} className="" />
                            </>
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
})

export default Navigation
