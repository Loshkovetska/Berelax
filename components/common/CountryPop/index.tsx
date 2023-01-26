import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useContentState } from '../../../hooks/RootStoreProvider'
import GlobalState, { changeCountryState } from '../../../stores/GlobalState'
import Button from '../Button'
import { IconComponent } from '../IconComponent'
import ImageComponent from '../ImageComponent'

const CountryPop = observer(() => {
  const [active, setActive] = useState(false)
  const { countrypop } = useContentState()

  useEffect(() => {
    if (GlobalState.isCountryOpen) {
      setTimeout(() => {
        setActive(true)
      }, 100)
    } else {
      setTimeout(() => {
        setActive(false)
      }, 100)
    }
  }, [GlobalState.isCountryOpen])

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    const s = document.querySelector('.country-pop')

    if (!s) return
    ;(s as any).style.setProperty('--vh', `${vh}px`)

    window.addEventListener('resize', function (e) {
      let vh = window.innerHeight * 0.01
      const s = document.querySelector('.country-pop')
      if (!s) return
      ;(s as any).style.setProperty('--vh', `${vh}px`)
    })
  }, [])

  return (
    <section className={classNames('country-pop', active && 'open')}>
      <div className="country-pop__container">
        <div className="country-pop__col">
          <div
            className="country-pop__title"
            dangerouslySetInnerHTML={{ __html: countrypop?.title }}
          ></div>
          <div
            className="country-pop__text"
            dangerouslySetInnerHTML={{ __html: countrypop?.text }}
          ></div>
          <Button
            classStr="beige button-arrow button-svg p20p28"
            isLink={false}
            action={changeCountryState}
            inner={
              <>
                {countrypop?.buttonTitle}
                <IconComponent name={'arrow'} />
              </>
            }
          />
          <div
            className="country-pop__subtitle"
            dangerouslySetInnerHTML={{ __html: countrypop?.subTitle }}
          ></div>
          <div
            className="country-pop__subtext"
            dangerouslySetInnerHTML={{ __html: countrypop?.subText }}
          ></div>
          <div className="country-pop__list">
            {countrypop?.list.map((li: any, i: number) => (
              <div
                className="country-pop__item"
                key={i}
                onClick={() => {
                  if (li.title.includes('Other')) {
                    runInAction(() => {
                      GlobalState.currentLocale = {
                        country: 'Germany',
                        code: 'de',
                      }
                    })
                  } else {
                    runInAction(() => {
                      GlobalState.currentLocale = {
                        country: li.title,
                        code: li.code,
                      }
                    })
                  }
                  changeCountryState()
                }}
              >
                <IconComponent name={'location/plane'} />
                {li.title}
              </div>
            ))}
          </div>
        </div>
        <div className="country-pop__img">
          <ImageComponent src={countrypop?.img} />
        </div>
      </div>
    </section>
  )
})

export default CountryPop
