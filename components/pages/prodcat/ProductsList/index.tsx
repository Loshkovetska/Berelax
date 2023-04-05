import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useMemo, useState } from 'react'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import GlobalState from '../../../../stores/GlobalState'
import InViewComponent from '../../../common/InViewComponent'
import Select from '../../../common/MainSelect'
import ProductItem from '../../../common/ProductItem'
import ProductBanner from '../ProductBanner'

const ProductsList = observer(() => {
  const { width, height } = useWindowDimensions()
  const { content, cards } = useContentState()
  const [filters, setFilters] = useState<any>({
    p1: null,
    p2: null,
    p3: null,
  })

  const services = useMemo(() => {
    let res: any = cards
    const params = content?.paramsForFilter

    if (!filters.p1?.length && !filters.p2?.length && !filters.p3?.length) {
      return cards
    }
    if (filters.p1) {
      filters.p1.forEach((f: any) => {
        if (f == 'New') {
          res = res.filter((r: any) => r.isNew)
        } else {
          res = res.filter((r: any) => r.isBestSeller)
        }
      })
    }

    if (filters.p2) {
      if (params[1] == 'color') {
        filters.p2.forEach((c: any) => {
          let sub = Array.from(res).filter((ci: any) => {
            if (ci.color.includes(c)) {
              return ci
            }
          })
          res = sub
        })
      }
      if (params[1] == 'bodyPart') {
        filters.p2.forEach((c: any) => {
          let sub = Array.from(res).filter((ci: any) => {
            if (ci.bodyPart.includes(c)) {
              return ci
            }
          })
          res = sub
        })
      }
      if (params[1] == 'concern') {
        filters.p2.forEach((c: any) => {
          let sub = Array.from(res).filter((ci: any) => {
            if (ci.concern.includes(c)) {
              return ci
            }
          })
          res = sub
        })
      }
    }

    if (filters.p3) {
      if (params[2] == 'type') {
        filters.p3?.forEach((p: any) => {
          res = Array.from(res).filter((ci: any) => {
            if (ci.type.includes(p)) {
              return ci
            }
          })
        })
      }
    }

    return res
  }, [filters, cards, content?.paramsForFilter])

  return (
    <section className="products-list">
      <div className="products-list__container">
        <InViewComponent delay={0.5}>
          <div
            className={classNames(
              'products-list__selects',
              !content?.select3?.length && 'two-selects',
            )}
          >
            <Select
              placeholder={content?.select1Title}
              dt={JSON.parse(
                JSON.stringify(content?.select1),
              ).sort((a: any, b: any) => a.localeCompare(b))}
              multiple //content?.paramsForFilter[0] == 'isNew' ? false :
              getValue={(value) => {
                setFilters({
                  ...filters,
                  p1: value,
                })
              }}
            />
            <Select
              multiple
              placeholder={content?.select2Title}
              dt={JSON.parse(
                JSON.stringify(content?.select2),
              ).sort((a: any, b: any) => a.localeCompare(b))}
              getValue={(value) => {
                setFilters({
                  ...filters,
                  p2: value,
                })
              }}
            />
            {content.select3?.length > 0 && (
              <Select
                multiple
                //={content?.paramsForFilter[2] == 'type' ? false : true}
                placeholder={content?.select3Title}
                dt={JSON.parse(
                  JSON.stringify(content?.select3),
                ).sort((a: any, b: any) => a.localeCompare(b))}
                getValue={(value) => {
                  setFilters({
                    ...filters,
                    p3: value,
                  })
                }}
              />
            )}
          </div>
        </InViewComponent>
        <div className="products-list__list">
          {services?.slice(0, width > 900 ? 3 : 4).map((si: any, i: number) => {
            let delay = 0
            delay = i == 1 ? 0.6 + 0.1 : 0

            if (!i) {
              delay = 0.6
            }
            if (i == 2) {
              delay = 0.7
            }
            if (i > 2) {
              delay = !((i + 1) % 2) ? 0.1 : 0
            }
            return (
              <InViewComponent delay={width > 576 ? delay : 0} key={i}>
                <ProductItem item={si} buttonText={content?.buttonText} />
              </InViewComponent>
            )
          })}
        </div>
        {services && services?.length > 3 ? (
          <InViewComponent>
            <div className="products-list__banner">
              {width > 900 &&
                services
                  ?.slice(3, 4)
                  .map((si: any, i: number) => (
                    <ProductItem
                      key={i}
                      item={si}
                      buttonText={content?.buttonText}
                    />
                  ))}
              <ProductBanner />
            </div>
          </InViewComponent>
        ) : (
          <></>
        )}
        {services && services?.length > 4 && (
          <div className="products-list__list">
            {services?.slice(4).map((si: any, i: number) => (
              <InViewComponent delay={width > 576 ? i * 0.1 : 0} key={i}>
                <ProductItem item={si} buttonText={content?.buttonText} />
              </InViewComponent>
            ))}
          </div>
        )}
      </div>
    </section>
  )
})

export default ProductsList
