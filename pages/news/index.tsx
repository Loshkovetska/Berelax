import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import GlobalState from '../../stores/GlobalState'
import Layout from '../../components/common/Layout'
import { getNewsC } from '../api/getNews'
import Intro from '../../components/pages/news/Intro'
import TopArticles from '../../components/pages/news/TopArticles'
import NewsList from '../../components/pages/news/NewsList'
const NewsPage = observer(({ hydrationData: props }: any) => {
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
      <Layout delay={1}>
        <Intro />
        <TopArticles />
        <NewsList />
      </Layout>
    </>
  )
})

export default NewsPage

export async function getStaticProps() {
  const response = await getNewsC()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
