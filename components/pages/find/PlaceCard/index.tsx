import { useRouter } from 'next/router'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import { PlaceCard } from '../../../../types'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import ImageComponent from '../../../common/ImageComponent'

const PlaceCard = ({ card }: { card: PlaceCard }) => {
  const { content } = useContentState()
  const navigate = useRouter()
  if (!content) return <></>
  const { cardBookBtn, cardDetails } = content

  const book = () => {
    localStorage.setItem('location', JSON.stringify(card))
    window.location.href = '/booking'
  }

  return (
    <div className="place-card">
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
            classStr="beige button-arrow button-svg p20p40"
            isLink={false}
            action={book}
            inner={
              <>
                {cardBookBtn}
                <IconComponent name={'arrow'} />
              </>
            }
          />
          <a className="place-card__content-link" href={`${card.link}`}>
            {cardDetails}
          </a>
        </div>
      </div>
    </div>
  )
}

export default PlaceCard
