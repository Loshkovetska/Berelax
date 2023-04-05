import { observer } from 'mobx-react'
import Link from 'next/link'
import ImageComponent from '../ImageComponent'
const TreatmentItem = observer(({ item }: any) => {
  return (
    <div className="treat-item">
      <div className="treat-item__img">
        <ImageComponent src={item.img} alt={item?.alt} />
      </div>
      <div className="treat-item__subtitle">{item.title}</div>
      <div className="treat-item__sublist">
        {item?.list?.map((i: any, id: number) => (
          <Link href={i.link} key={id}>
            <a className="treat-item__link">{i.title}</a>
          </Link>
        ))}
      </div>
    </div>
  )
})

export default TreatmentItem
