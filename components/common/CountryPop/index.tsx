import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useContentState } from '../../../hooks/RootStoreProvider'
import GlobalState, {
  changeCountryState,
  changeLocale,
} from '../../../stores/GlobalState'
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

  return (
    <section
      className={classNames('country-pop', active && 'open')}
      style={{
        visibility: 'hidden',
      }}
    >
      <div className="country-pop__container">
        <div className="country-pop__col">
          <div
            className="country-pop__title"
            dangerouslySetInnerHTML={{ __html: countrypop?.title }}
          ></div>
          <div className="country-pop__text">
            You are in {GlobalState.currentLocale.country} now.
          </div>
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
            {countrypop?.list
              .filter((c: any) => !c.title.includes('Other'))
              .map((li: { title: string; code: string }, i: number) => (
                <div
                  className="country-pop__item"
                  key={i}
                  onClick={() => {
                    let item = {
                      country: li.title,
                      code: li.code,
                    }
                    if (li.title.includes('Other')) {
                      item = {
                        country: 'United States of America',
                        code: 'usa',
                      }
                    }
                    sessionStorage.setItem('locale', JSON.stringify(item))
                    changeLocale()
                    changeCountryState()
                  }}
                >
                  <IconComponent name={'location/plane'} />
                  {li.title}
                </div>
              ))}
            {countrypop?.list
              .filter((c: any) => c.title.includes('Other'))
              .map((li: { title: string; code: string }, i: number) => (
                <div
                  className="country-pop__item"
                  key={i}
                  onClick={() => {
                    let item = {
                      country: li.title,
                      code: li.code,
                    }
                    if (li.title.includes('Other')) {
                      item = {
                        country: 'United States of America',
                        code: 'usa',
                      }
                    }
                    sessionStorage.setItem('locale', JSON.stringify(item))
                    changeLocale()
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
          <ImageComponent src={countrypop?.img} alt={countrypop.alt} />
        </div>
      </div>
    </section>
  )
})

export default CountryPop
