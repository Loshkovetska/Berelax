import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import Layout from '../components/common/Layout'
import { getSearch } from './api/getSearch'
import SearchContent from '../components/pages/search/SearchContent'
import SeoBlock from '../components/common/SeoBlock'
import { getNews, getProducts, getServices } from '../stores/ContentState'
import { observable, runInAction } from 'mobx'

export const StateArrays: any = observable({
  products: null,
  services: null,
  news: null,
})

const Search = observer(({ hydrationData: props }: any) => {
  const [loading, setLoading] = useState(true)
  const ref = useRef<boolean>(false)
  useLocoScroll(!loading)
  useEffect(() => {
    if (!loading) {
      if (typeof window === 'undefined' || !window.document) {
        return
      }
    }
  }, [loading])

  useEffect(() => {
    if (ref.current) return
    getProducts().then((res) => {
      runInAction(() => {
        StateArrays.products = res
      })
    })
    getNews().then((res) => {
      runInAction(() => {
        StateArrays.news = res
      })
    })
    getServices().then((res) => {
      runInAction(() => {
        StateArrays.services = res
      })
    })
    ref.current = true
  }, [])

  useEffect(() => {
    if (StateArrays.news && StateArrays.products && StateArrays.services) {
      setTimeout(() => {
        setLoading(false)
      }, 200)
    }
  }, [StateArrays.news, StateArrays.products, StateArrays.services])

  return (
    <>
      <SeoBlock seo={props.seo} />
      {!loading ? (
        <Layout>
          <SearchContent />
        </Layout>
      ) : (
        <div style={{ width: '100%', height: 500 }}></div>
      )}
    </>
  )
})

export default Search

export async function getStaticProps() {
  const response = await getSearch()

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  }
}
