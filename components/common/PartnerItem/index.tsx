import { observer } from 'mobx-react'
import { IconComponent } from '../IconComponent'
import ImageComponent from '../ImageComponent'
import Text from '../Text'

const PartnerItem = observer(
  ({ item, linkTitle }: { item: any; linkTitle: string }) => {
    return (
      <a
        href={item.link}
        target={'_blank'}
        className="partner-item"
        rel="noreferrer"
      >
        <div className="partner-item__logo">
          <ImageComponent src={item.src} />
        </div>
        <Text text={item.text} classStr="partner-item__text" />
        <div className="partner-item__link">
          <span>{linkTitle}</span>
          <IconComponent name={'arrow'} />
        </div>
      </a>
    )
  },
)

export default PartnerItem
