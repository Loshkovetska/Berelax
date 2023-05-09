import classNames from 'classnames'
import { runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import SelectItem from '../SelectItem'
import { BookingStep, UserData } from '../Steps'
import { IconComponent } from '../../../common/IconComponent'
const SecondStep = observer(() => {
  const { content, countrypop, header } = useContentState()

  const [tabTreat, setTabTreat] = useState('')
  //content?.block2?.cards
  // ?.map((a: any) => a.category)
  let tabsTreats = header?.menu
    .find((l: any) => l.link == '/treatments')
    ?.submenu?.map((c: any) => c.title.trim())

  tabsTreats = Array.from(new Set(tabsTreats))
  tabsTreats.push('Combo')

  useEffect(() => {
    if (content && !UserData.treatments?.length) {
      setTabTreat(tabsTreats[0])
      return
    }
    if (content && UserData.treatments?.length) {
      setTabTreat(UserData.treatments[0].category)
      return
    }
  }, [content])

  useEffect(() => {
    if (!UserData.location) return
    setTabTreat(tabsTreats[0])
    runInAction(() => {
      UserData.treatments = []
    })
  }, [UserData.location])

  const getTime = (a: any, treats: any) => {
    const current = treats?.find((c: any) => c.id == a.id)
    if (current) {
      return UserData.treatments?.find((c: any) => c.id == a.id)?.time
    }

    let time = ''
    a?.prices?.forEach((p: any) => {
      const am = p.amount.find((a: any) =>
        a.country.includes(UserData.location?.country),
      )
      if (am) {
        time = p.time
        return
      }
    })
    return time
  }

  let treatsCards: any = []
  if (UserData.location) {
    treatsCards = content?.block2?.cards.filter((a: any) => {
      const isCurrentTab =
        a.category.replaceAll('-', ' ').toLowerCase() == tabTreat.toLowerCase()
      let isInLocations = a.locations.includes(
        UserData.location?.title.trim() + ' ' + UserData.location.text.trim(),
      )
      a.locations?.forEach((fo: any) => {
        const fullName = UserData.location?.fullName
        if (fo.includes(fullName)) {
          isInLocations = true
          return
        }
      })

      if (isCurrentTab && isInLocations) {
        return a
      }
    })
  } else {
    treatsCards = content?.block2?.cards.filter(
      (a: any) =>
        a.category.replaceAll('-', ' ').toLowerCase() == tabTreat.toLowerCase(),
    )
  }

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
              {a}
              {UserData.treatments?.filter(
                (t) => t.category.replaceAll('-', ' ').toLowerCase() == a.toLowerCase(),
              )?.length
                ? ` (${
                    UserData.treatments?.filter(
                      (t) => t.category.replaceAll('-', ' ').toLowerCase() == a.toLowerCase(),
                    )?.length
                  })`
                : ''}
            </div>
          ))}
        </div>
      </div>
      <div className="first-step__list">
        {treatsCards
          ?.sort((a: any, b: any) => a.title.localeCompare(b.title))
          .map((a: any, i: number) => (
            <SelectItem
              withTime
              multiple={true}
              item={a}
              key={i}
              time={getTime(a, UserData.treatments)}
              setSelected={() => {
                if (UserData.treatments?.find((c: any) => c.id == a.id)) {
                  runInAction(() => {
                    UserData.treatments = UserData.treatments?.filter(
                      (c: any) => c.id != a.id,
                    )
                  })
                } else {
                  // if (UserData.treatments.length == 2) return
                  let amount: any = null
                  if (UserData.location) {
                    a?.prices?.forEach((p: any) => {
                      const am = p.amount.find((a: any) =>
                        a.country.includes(UserData.location?.country),
                      )
                      if (am) {
                        amount = am
                        return
                      }
                    })
                  }
                  if (!amount) {
                    amount = a?.prices[0].amount[0]
                  }
                  runInAction(() => {
                    UserData.treatments = [
                      ...(UserData.treatments as any),
                      {
                        id: a.id,
                        time: a.prices[0].time,
                        category: a.category,
                        img: a.img,
                        alt: a.alt,
                        name: a.title,
                        price: amount?.currency + ' ' + amount?.value,
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
