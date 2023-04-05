import classNames from 'classnames'
import { observer } from 'mobx-react'
import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import Input from '../../../common/Input'
import Select from '../../../common/MainSelect'
import NewsPost from '../../../common/NewsPost'
import ProductItem from '../../../common/ProductItem'

import ServiceItem from '../../../common/ServiceItem'
import InViewComponent from '../../../common/InViewComponent'
import Title from '../../../common/Title'
import { searchByParams } from '../../../../stores/ContentState'
import { StateArrays } from '../../../../pages/search'

const SearchContent = observer(() => {
  const [searchTitle, setSearchTitle] = useState('')
  const ref = useRef<boolean>(false)
  const { content } = useContentState()
  const [value, setTitle] = useState('')
  const [section, setSection] = useState('')
  const [all, setAll] = useState<any>([])

  useEffect(() => {
    if (sessionStorage.getItem('search-value')) {
      setTitle(sessionStorage.getItem('search-value') || '')
      search(sessionStorage.getItem('search-value') || '')
    }
    if (content?.sections) {
      setSection(content?.sections[0])
    }
  }, [content?.sections])

  const search = async (value: string) => {
    searchByParams(value).then((res) => {
      const result: any = []
      const resultProducts: Array<any> = Array()
      const resultServices: Array<any> = Array()
      const resultNews: Array<any> = Array()

      res.forEach((r: any) => {
        if (r.post_type == 'products') {
          const product = StateArrays.products?.find((p: any) => p.id == r.ID)

          if (product) {
            resultProducts.push(product)
          }
        }
        if (r.post_type == 'treatments') {
          const product = StateArrays.services?.find((p: any) => p.id == r.ID)

          if (product) {
            resultServices.push(product)
          }
        }
        if (r.post_type == 'post') {
          const product = StateArrays.news?.find((p: any) => p.id == r.ID)

          if (product) {
            resultNews.push(product)
          }
        }
      })

      result.push({
        section: 'products',
        list: resultProducts,
      })
      result.push({
        section: 'treatments',
        list: resultServices,
      })
      result.push({
        section: 'news',
        list: resultNews,
      })

      setAll(result)
      setSearchTitle(value)
    })
  }

  const results: {
    section: string
    list: Array<any>
  } | null = useMemo(() => {
    if (!all.length) {
      return null
    }
    const res = all?.find((a: any) => a.section == section)?.list
    return {
      section: section,
      list: res || [],
    }
  }, [all, section])

  return (
    <section className="search-content">
      <div className="search-content__container">
        <InViewComponent>
          <Title classStr="search-content__title" text={searchTitle} />
          <div className="search-content__count">
            {results?.list?.length ? results?.list?.length : 0}{' '}
            {!results?.list?.length || results?.list?.length > 1
              ? 'results'
              : 'result'}
          </div>
        </InViewComponent>
        <InViewComponent delay={0.1}>
          <div className="search-content__search">
            <section className={'loc-select'}>
              <div className="loc-select__top">
                <Input
                  classStr=""
                  value={value}
                  setValue={setTitle}
                  placeHolder=""
                />

                <Button
                  inner={
                    <>
                      <IconComponent name="Search" />
                    </>
                  }
                  classStr="beige button-search"
                  isLink={false}
                  action={() => search(value)}
                />
              </div>
            </section>
            <Select
              defaultValue={section}
              placeholder={section}
              getValue={(value) => {
                if (!value.length) return
                setSection(value)
              }}
              multiple={false}
              dt={JSON.parse(
                JSON.stringify(content?.sections),
              ).sort((a: any, b: any) => a.localeCompare(b))}
            />
          </div>
        </InViewComponent>
        <div className="search-content__result">
          <InViewComponent delay={0.2}>
            <h2 className="search-content__result-title">
              {results?.list?.length || 0} “{searchTitle}” {results?.section}
            </h2>
          </InViewComponent>
          <div
            className={classNames(
              'search-content__result-list',
              results?.section == 'news' && 'single',
              results?.section == 'products' && 'three',
              results?.section == 'treatments' && 'two',
            )}
          >
            {results?.list?.map((re: any, i: number) => (
              <Fragment key={i}>
                {results?.section == 'news' && (
                  <InViewComponent delay={i * 0.1 + 0.2}>
                    <NewsPost post={re} />
                  </InViewComponent>
                )}
                {results?.section == 'products' && (
                  <InViewComponent delay={i * 0.1 + 0.2}>
                    <ProductItem
                      item={re}
                      buttonText={content?.productButton}
                    />
                  </InViewComponent>
                )}
                {results?.section == 'treatments' && (
                  <InViewComponent delay={i * 0.1 + 0.2}>
                    <ServiceItem item={re} />
                  </InViewComponent>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default SearchContent
