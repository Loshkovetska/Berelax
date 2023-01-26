import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import SelectItem from '../SelectItem'
import { BookingStep, UserData } from '../Steps'
import { IconComponent } from '../../../common/IconComponent'
import GlobalState from '../../../../stores/GlobalState'
const SecondStep = observer(() => {
  const { content } = useContentState()

  const [tabTreat, setTabTreat] = useState('')

  let tabsTreats = content?.block2?.cards
    ?.map((a: any) => a.section)
    ?.sort((a: any, b: any) => a?.localeCompare(b))

  tabsTreats = Array.from(new Set(tabsTreats))

  useEffect(() => {
    if (content) {
      setTabTreat(tabsTreats[0])
    }
  }, [content])


  return (
    <div className="book-steps__container">
      <div
        className="book-steps__title"
        dangerouslySetInnerHTML={{ __html: content?.block2?.title }}
      ></div>
      <div
        className="book-steps__text"
        dangerouslySetInnerHTML={{ __html: content?.block2?.text }}
      ></div>
      <div className="first-step__tabs ">
        <div className="first-step__tabs-cont children">
          {tabsTreats?.map((a: any, i: number) => (
            <div
              className={classNames(
                'first-step__tab',
                tabTreat == a && 'active',
              )}
              key={i}
              onClick={() => setTabTreat(a)}
            >
              {a}{' '}
              {UserData.treatments?.filter(
                (t) => t.section.toLowerCase() == a.toLowerCase(),
              )?.length
                ? ` (${
                    UserData.treatments?.filter(
                      (t) => t.section.toLowerCase() == a.toLowerCase(),
                    )?.length
                  })`
                : ''}
            </div>
          ))}
        </div>
      </div>
      <div className="first-step__list">
        {content?.block2?.cards
          .filter((a: any) => a.section.toLowerCase() == tabTreat.toLowerCase())
          ?.map((a: any, i: number) => (
            <SelectItem
              withTime
              multiple={true}
              item={a}
              key={i}
              time={
                UserData.treatments?.find((c: any) => c.id == a.id)
                  ? UserData.treatments?.find((c: any) => c.id == a.id)?.time
                  : a.price[0].time
              }
              setSelected={() => {
                if (UserData.treatments?.find((c: any) => c.id == a.id)) {
                  runInAction(() => {
                    UserData.treatments = UserData.treatments?.filter(
                      (c: any) => c.id != a.id,
                    )
                  })
                } else {
                  // if (UserData.treatments.length == 2) return
                  runInAction(() => {
                    UserData.treatments = [
                      ...(UserData.treatments as any),
                      {
                        id: a.id,
                        time: a.price[0].time,
                        section: a.section,
                        img: a.img,
                        name: a.title,
                        price: a.price[0].amount,
                      },
                    ]
                  })
                }
              }}
              isSelected={!!UserData.treatments.find((c: any) => c.id == a.id)}
            />
          ))}
      </div>
      <Button
        classStr={classNames(
          'beige button-arrow button-svg p20p40',
          (!UserData.location || !UserData.treatments.length) && 'disabled',
        )}
        isLink={false}
        action={() => {
          runInAction(() => {
            BookingStep.show = false
          })

          setTimeout(() => {
            BookingStep.tab = 1
          }, 600)
        }}
        inner={
          <>
            {content?.block1?.buttonTitle}
            <IconComponent name="arrow" />
          </>
        }
      />
    </div>
  )
})

export default SecondStep
