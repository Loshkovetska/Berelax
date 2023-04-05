import classNames from 'classnames'
import { observer } from 'mobx-react'
import { runInAction } from 'mobx'
import GlobalState from '../../../stores/GlobalState'
import { IconComponent } from '../IconComponent'
import { Fragment, useEffect, useState } from 'react'
import Button from '../Button'
import SocialLink from '../SocialLink'
import { useContentState } from '../../../hooks/RootStoreProvider'
import Link from 'next/link'

const Menu = observer(() => {
  const [tab, setTab] = useState(0)
  const { header, footer } = useContentState()

  useEffect(() => {
    const s = document.querySelector('.menu')
    const header = document.querySelector('.header')

    if (!s || !header) return
    ;(s as any).style.setProperty(
      '--header-height',
      `${header.getBoundingClientRect().height}px`,
    )
  }, [])

  useEffect(() => {
    if (GlobalState.locoScroll) {
      GlobalState.isMenuOpen
        ? (GlobalState.locoScroll as any).stop()
        : (GlobalState.locoScroll as any).start()
    }
  }, [GlobalState.isMenuOpen, GlobalState.locoScroll])

  return (
    <section className={classNames('menu', GlobalState.isMenuOpen && 'open')}>
      <div className="menu__container">
        <div
          className={classNames(
            'menu__screen',
            !GlobalState.menuTab && 'show',
            GlobalState.menuTab && 'off',
          )}
        >
          {header?.menu?.map((hi: any, id: any) => (
            <div className={classNames('menu__item')} key={id}>
              <div
                className="menu__item-top"
                onClick={() => {
                  if (hi.submenu.length) {
                    setTab(id)
                    runInAction(() => {
                      GlobalState.menuTab = 1
                    })
                  }
                }}
              >
                {hi.submenu.length ? (
                  <div className="menu__link"> {hi.title}</div>
                ) : (
                  <a className="menu__link" href={hi.link}>
                    {hi.title}
                  </a>
                )}

                {hi.submenu.length ? (
                  <IconComponent
                    name={'ic'}
                    className=""
                    onClick={() => {
                      setTab(id)
                      runInAction(() => {
                        GlobalState.menuTab = 1
                      })
                    }}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
          <div className="menu__screen-bottom">
            {footer?.socials?.map((so: any, i: any) => (
              <SocialLink link={so.link} icon={so.icon} key={i} />
            ))}
          </div>
        </div>
        <div
          className={classNames('menu__screen', GlobalState.menuTab && 'show')}
        >
          {header?.menu?.map((hi: any, id: number) => (
            <Fragment key={id}>
              {hi?.submenu?.length && tab == id ? (
                <div className="menu__screen-title">{hi.title}</div>
              ) : (
                <></>
              )}
              {hi?.submenu?.length ? (
                <div
                  className={classNames(
                    'menu__item-content',
                    tab == id && 'display',
                  )}
                >
                  <div
                    className={classNames(
                      'menu__item-bottom',
                      !hi.isProducts && 'column',
                    )}
                  >
                    {hi?.submenu?.map((sub: any, i: number) => (
                      <div className="menu__subitem" key={i}>
                        {hi.isProducts ? (
                          <a className="menu__subitem-title" href={sub.link}>
                            {sub.title}
                          </a>
                        ) : (
                          <></>
                        )}

                        <div className="menu__subitem-list">
                          {(sub as any)?.list ? (
                            (sub as any)?.list?.map((li: any, idx: number) => (
                              <a
                                className="menu__subitem-text"
                                key={idx}
                                href={li.link}
                                dangerouslySetInnerHTML={{ __html: li.title }}
                              ></a>
                            ))
                          ) : (
                            <Button
                              isLink
                              link={(sub as any).link}
                              classStr="white p16p20 button-arrow button-svg"
                              inner={<>{sub.title}</>}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {hi.isProducts && (
                    <div className="menu__bottom">
                      <Button
                        isLink
                        link={hi.link}
                        classStr="white p16p20 button-arrow button-svg"
                        inner={
                          <>
                            See All {hi.title}
                            <IconComponent name={'arrow'} className="" />
                          </>
                        }
                      />
                    </div>
                  )}
                </div>
              ) : (
                <></>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Menu
