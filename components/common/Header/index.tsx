import { observer } from 'mobx-react'
import { useEffect, useRef } from 'react'
import { IconComponent } from '../IconComponent'
import classNames from 'classnames'
import Button from '../Button'
import InViewComponent from '../InViewComponent'
import GlobalState, { changeSearchState } from '../../../stores/GlobalState'
import { changeMenuState } from '../../../stores/GlobalState'
import { runInAction } from 'mobx'
import { useContentState } from '../../../hooks/RootStoreProvider'
import Navigation from '../Navigation'
import ImageComponent from '../ImageComponent'
const Header = observer(
  ({
    isAbsolute = false,
    delay = 2,
  }: {
    isAbsolute?: boolean
    delay?: number
  }) => {
    const { header } = useContentState()
    const headerRef = useRef<any>(null)

    useEffect(() => {
      if (isAbsolute) return
      const header = document.querySelector('.header.fixed')
      const smooth = document.querySelector('.smooth')
      if (!header || !smooth) return
      const smoothHeight =
        smooth.getBoundingClientRect().height - window.innerHeight
      if (GlobalState.locoScroll) {
        ;(GlobalState.locoScroll as any).on('scroll', (args: any) => {
          if (
            args.direction == 'up' &&
            args.scroll.y > header.getBoundingClientRect().height * 2 &&
            args.scroll.y < smoothHeight
          ) {
            header.classList.add('show')
          } else {
            header.classList.remove('show')
          }
        })
      }
    }, [GlobalState.locoScroll, isAbsolute])

    useEffect(() => {
      const header = document.querySelector('.header.absolute')
      if (!header) return
      ;(document.querySelectorAll('.navigation') as any)?.forEach(
        (n: HTMLElement) => {
          if (n) {
            n?.style.setProperty(
              '--header-height',
              header.getBoundingClientRect().height + 'px',
            )
          }
        },
      )
      ;(document.querySelector('.searchbox') as HTMLElement)?.style.setProperty(
        '--header-height',
        header.getBoundingClientRect().height + 'px',
      )
    }, [])

    useEffect(() => {
      const header = document.querySelector('.header')
      if (!header) return
      if (GlobalState.isMenuOpen) {
        header.classList.add('border-none')
      } else {
        header.classList.remove('border-none')
      }
    }, [GlobalState.isMenuOpen])

    return (
      <InViewComponent delay={delay} animationClass="apear">
        <header
          className={classNames(
            'header',
            isAbsolute && 'absolute',
            !isAbsolute && 'fixed',
          )}
          ref={headerRef}
        >
          <div className="header__container">
            <div
              className="header__menu"
              onClick={() => {
                if (!GlobalState.menuTab) {
                  changeMenuState()
                } else {
                  runInAction(() => {
                    GlobalState.menuTab = 0
                  })
                }
              }}
            >
              <IconComponent
                name={'menu/burger'}
                className={classNames(!GlobalState.isMenuOpen && 'active')}
              />
              <IconComponent
                name={'menu/close'}
                className={classNames(
                  'header__menu-icon',
                  GlobalState.isMenuOpen && !GlobalState.menuTab && 'active',
                )}
              />
              <IconComponent
                name={'ic'}
                className={classNames(
                  'header__menu-arrow',
                  GlobalState.isMenuOpen && GlobalState.menuTab && 'active',
                )}
              />
            </div>

            <div
              className="header__left"
              onClick={() => (window.location.href = '/')}
            >
              <ImageComponent
                classStr="header__logo"
                src={header?.logo || ''}
                alt={header?.altLogo}
              />
            </div>
            <Navigation classStr={!isAbsolute ? 'fixed' : 'absolute'} />
            <Button
              isLink={false}
              action={changeSearchState}
              inner={<IconComponent name="Search copy" />}
              classStr="button-search beige"
            />
          </div>
        </header>
      </InViewComponent>
    )
  },
)

export default Header
