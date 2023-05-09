import { useRouter } from 'next/router'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import { PlaceCard } from '../../../../types'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import ImageComponent from '../../../common/ImageComponent'
import classNames from 'classnames'
import useScrollPos from '../../../../hooks/useScrollPos'

const PlaceCard = ({ card }: { card: PlaceCard }) => {
  const { content } = useContentState()
  const navigate = useRouter()
  const { x, y } = useScrollPos()

  if (!content) return <></>
  const { cardBookBtn, cardDetails } = content

  const book = () => {
    localStorage.setItem('location', JSON.stringify(card))
    window.location.href = '/booking'
  }
  const setPos = (x: number, y: number) => {
    if (navigate.asPath != '/find-us/') {
      sessionStorage.setItem('position', JSON.stringify({ x, y }))
      sessionStorage.setItem('position_page', navigate.asPath)
    }

    sessionStorage.setItem('airport', JSON.stringify(card?.skyCat?.slug))
  }

  return (
    <div className="place-card" onClick={() => setPos(0, y)}>
      <a className="place-card__img" href={`${card.link}`}>
        <ImageComponent src={card.img ? card.img : ''} />
      </a>
      <div className="place-card__content">
        <div className="place-card__content-top">
          <div className="place-card__content-country">{card.country}</div>
          <div className="place-card__content-title">{card.title}</div>
          <div className="place-card__content-text">{card.text}</div>
        </div>
        <div className="place-card__content-bottom">
          <Button
            classStr={classNames(
              'beige button-arrow button-svg p20p40',
              card.isDisable && 'disabled',
            )}
            isLink={false}
            action={book}
            inner={
              <>
                {card?.isDisable ? 'Booking unavailable' : cardBookBtn}
                <IconComponent name={'arrow'} />
              </>
            }
          />
          <a
            className="place-card__content-link"
            href={`${card.link}`}
            onClick={() => setPos(0, y)}
          >
            {cardDetails}
          </a>
        </div>
      </div>
    </div>
  )
}

export default PlaceCard
