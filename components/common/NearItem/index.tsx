import Link from 'next/link'
import useScrollPos, { ScrollPos } from '../../../hooks/useScrollPos'
import Button from '../Button'
import { IconComponent } from '../IconComponent'
import ImageComponent from '../ImageComponent'
const NearItem = ({ item }: any) => {
  const { x, y } = useScrollPos()

  const setPos = (x: number, y: number) => {
    sessionStorage.setItem('position', JSON.stringify({ x, y }))
  }

  return (
    <Link href={item.link}>
      <a className="near-item" onClick={() => setPos(0, y)}>
        <div className="near-item__img">
          <ImageComponent src={item.img} />
        </div>
        <div className="near-item__content">
          <div className="near-item__content-col">
            <div className="near-item__content-sub">{item.text}</div>
            <div
              className="near-item__content-title"
              dangerouslySetInnerHTML={{ __html: item.title }}
            ></div>
          </div>
          <Button
            classStr="button-search beige"
            isLink
            link={item.link}
            inner={
              <>
                <IconComponent name="arrow" />
              </>
            }
          />
        </div>
      </a>
    </Link>
  )
}

export default NearItem
