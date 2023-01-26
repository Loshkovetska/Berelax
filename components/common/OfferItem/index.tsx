import { observer } from 'mobx-react'
import Link from 'next/link'
import { getDate } from '../../../funcs/dates'
import useScrollPos from '../../../hooks/useScrollPos'
import Button from '../Button'
import { IconComponent } from '../IconComponent'
import Text from '../Text'
import Title40 from '../Title40'

const OfferItem = observer(
  ({ item, buttonTitle }: { item: any; buttonTitle: string }) => {
    const { x, y } = useScrollPos()

    const setPos = (x: number, y: number) => {
      sessionStorage.setItem('position', JSON.stringify({ x, y }))
    }
    return (
      <Link href={item.link} scroll={false}>
        <a className="offer" onClick={() => setPos(0, y)}>
          <div className="offer__top">
            <Title40 text={item.title} classStr="offer__title" />
            <Text text={item.text} classStr="offer__text" />
            <div className="offer__bottom">
              <div className="offer__bottom-locate">
                <IconComponent name={'location-point 1'} /> {item?.location}
              </div>
              <div className="offer__bottom-row">
                <Button
                  classStr="grey p12"
                  inner={<>{buttonTitle}</>}
                  isLink
                  link={item.link}
                />
                <div className="offer__bottom-date">
                  {getDate(item.datetime)}
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    )
  },
)

export default OfferItem
