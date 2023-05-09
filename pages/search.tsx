import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import Layout from '../components/common/Layout'
import { getSearch } from './api/getSearch'
import SeoBlock from '../components/common/SeoBlock'
import {
  getAirportsData,
  getNews,
  getProducts,
  getServices,
} from '../stores/ContentState'
import { observable, runInAction } from 'mobx'
import Script from 'next/script'
import Lottie from 'lottie-react'
import plane from '../mocks/plane.json'
import SearchContent from '../components/pages/search/SearchContent'
export const StateArrays: any = observable({
  products: null,
  services: null,
  news: null,
  locations: null,
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
    getAirportsData().then((res) => {
      runInAction(() => {
        StateArrays.locations = res
      })
    })
    ref.current = true
  }, [])

  useEffect(() => {
    if (
      StateArrays.news &&
      StateArrays.products &&
      StateArrays.services &&
      StateArrays.locations
    ) {
      setTimeout(() => {
        setLoading(false)
      }, 200)
    }
  }, [
    StateArrays.news,
    StateArrays.products,
    StateArrays.services,
    StateArrays.locations,
  ])

  return (
    <>
      <SeoBlock seo={props.seo} />

      <Layout>
        {!loading ? (
          <SearchContent />
        ) : (
          <div className="loader-search">
            <Lottie animationData={plane} loop={true} />
          </div>
        )}
      </Layout>
    </>
  )
})

export default Search

export async function getStaticProps() {
  const response = await getSearch()
  if (!response) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  }
}
