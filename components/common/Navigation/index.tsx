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
                <a className={classNames('navigation__link')} href={hi.link}>
                  {hi.title}
                </a>
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
                        <a className="navigation__subitem-img" href={sub.link}>
                          <ImageComponent src={sub.img} alt={sub.alt} />
                        </a>
                      ) : (
                        <a className="navigation__subitem-img" href={sub.link}>
                          <ImageComponent src={sub.img} alt={sub.alt} />
                        </a>
                      )}
                      {hi.isProducts ? (
                        <a
                          className="navigation__subitem-title"
                          href={sub.link}
                        >
                          {sub.title}
                        </a>
                      ) : (
                        <></>
                      )}
                      <div className="navigation__subitem-list">
                        {(sub as any)?.list ? (
                          (sub as any)?.list?.map((li: any, idx: number) => (
                            <a
                              className="navigation__subitem-text"
                              href={li.link}
                              key={idx}
                              dangerouslySetInnerHTML={{__html:li.title}}
                            >
                              {/* {li.title} */}
                            </a>
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
