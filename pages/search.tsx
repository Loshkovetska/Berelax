import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import GlobalState from '../stores/GlobalState'
import Layout from '../components/common/Layout'
import { getSearch } from './api/getSearch'
import SearchContent from '../components/pages/search/SearchContent'

const Search = observer(({ hydrationData: props }: any) => {
  const [loading, setLoading] = useState(false)

  useLocoScroll(!loading)
  useEffect(() => {
    if (!loading) {
      if (typeof window === 'undefined' || !window.document) {
        return
      }
    }
  }, [loading])


  return (
    <>
      <Head>
        <title>Be relax</title>
      </Head>
      <Layout>
        <SearchContent />
      </Layout>
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
  }
}
