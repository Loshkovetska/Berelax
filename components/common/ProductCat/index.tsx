import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { ProductCatType } from '../../../types'
import Button from '../Button'
import { IconComponent } from '../IconComponent'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import ImageComponent from '../ImageComponent'
import Link from 'next/link'
import useScrollPos from '../../../hooks/useScrollPos'

const ProductCat = observer(
  ({
    pr,
    isDark,
    buttonTitle,
  }: {
    pr: ProductCatType
    isDark: boolean
    buttonTitle: string
  }) => {
    const [end, setEnd] = useState(false)
    const { ref, inView, entry } = useInView({
      threshold: 0,
    })

    const navigate = useRouter()

    useEffect(() => {
      if (!end) {
        setEnd(inView)
      }
    }, [inView])

    const { x, y } = useScrollPos()

    const setPos = (x: number, y: number) => {
      sessionStorage.setItem('position', JSON.stringify({ x, y }))
    }

    return (
      <Link href={`${pr.link}`}>
        <a
          ref={ref}
          className={classNames('products__item', end && 'animated')}
          onClick={() => setPos(0, y)}
        >
          <ImageComponent src={pr.img} />
          <h3 className={classNames('products__item-title', isDark && 'dark')}>
            {pr.title}
          </h3>
          <Button
            isLink
            link={`${pr.link}`}
            classStr="button-arrow button-svg white p24"
            inner={
              <>
                {buttonTitle} <IconComponent name={'arrow'} />
              </>
            }
          />
        </a>
      </Link>
    )
  },
)

export default ProductCat
