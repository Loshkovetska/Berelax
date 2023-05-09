import useScrollPos, { ScrollPos } from '../../../hooks/useScrollPos'
import Button from '../Button'
import { IconComponent } from '../IconComponent'
import ImageComponent from '../ImageComponent'
import { useRouter } from 'next/router'
const NearItem = ({ item }: any) => {
  const { x, y } = useScrollPos()
  const { asPath } = useRouter();

  // const setPos = (x: number, y: number) => {
  //   sessionStorage.setItem('position', JSON.stringify({ x, y }))
  //   sessionStorage.setItem('position_page', asPath)
  // }setPos(0, y)

  return (
    <a className="near-item"  href={item.link}>
      <div className="near-item__img">
        <ImageComponent src={item.img} />
      </div>
      <div className="near-item__content">
        <div className="near-item__content-col">
          <div className="near-item__content-sub">
            {item.text.toLowerCase()}
          </div>
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
  )
}

export default NearItem
