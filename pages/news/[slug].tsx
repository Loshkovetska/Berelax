import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import GlobalState from '../../stores/GlobalState'
import Layout from '../../components/common/Layout'
import { getNewsPost } from '../api/getNewsPost'
import PostContent from '../../components/pages/newsPost/PostContent'
import Banner from '../../components/pages/location/Banner'
import Similiar from '../../components/pages/newsPost/Similiar'
import { getNews } from '../../stores/ContentState'

const NewsPostPage = observer(({ hydrationData: props }: any) => {
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
        <PostContent />
        <Banner />
        <Similiar />
      </Layout>
    </>
  )
})

export default NewsPostPage

export async function getStaticPaths() {
  const news = await getNews()
  const paths: any = []
  news?.forEach((p: any) => {
    paths.push({
      params: {
        slug: p.link.replaceAll('/news/', '').replaceAll('/', ''),
        path: p.link.replaceAll('/news/', '').replaceAll('/', ''),
      },
    })
  })

  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: any) {
  const response = await getNewsPost(params.slug)

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
