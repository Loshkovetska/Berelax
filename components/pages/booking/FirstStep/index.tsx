import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState from '../../../../stores/GlobalState'
import SecondStep from '../SecondStep'
import SelectItem from '../SelectItem'
import { BookingStep, UserData } from '../Steps'

const FirstStep = observer(() => {
  const { content, airports } = useContentState()

  const [tabLoc, setTabLoc] = useState('')

  let tabsContinents = airports
    ?.map((a: any) => a.continent)
    ?.sort((a: any, b: any) => a?.localeCompare(b))

  tabsContinents = Array.from(new Set(tabsContinents))

  useEffect(() => {
    if (airports) {
      setTabLoc(tabsContinents[0])
    }
  }, [airports])

  return (
    <section className={classNames('first-step')}>
      <div className="book-steps__container">
        <div
          className="book-steps__title"
          dangerouslySetInnerHTML={{ __html: content?.block1?.title }}
        ></div>
        <div
          className="book-steps__text"
          dangerouslySetInnerHTML={{ __html: content?.block1?.text }}
        ></div>
        <div className="first-step__tabs ">
          <div className="first-step__tabs-cont">
            {tabsContinents?.map((a: any, i: number) => (
              <div
                className={classNames(
                  'first-step__tab',
                  tabLoc == a && 'active',
                )}
                key={i}
                onClick={() => setTabLoc(a)}
              >
                {a}
              </div>
            ))}
          </div>
        </div>
        <div className="first-step__list">
          {airports
            .find((a: any) => a.continent == tabLoc)
            ?.list?.map((a: any, i: number) => (
              <SelectItem
                multiple={false}
                item={a}
                key={i}
                setSelected={() => {
                  runInAction(() => {
                    UserData.location = a
                  })
                }}
                isSelected={
                  UserData.location &&
                  (UserData.location as any)?.link == a.link
                }
              />
            ))}
        </div>
      </div>
      <SecondStep />
    </section>
  )
})

export default FirstStep
