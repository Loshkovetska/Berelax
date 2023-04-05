import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import Layout from '../../components/common/Layout'
import { getNewsPost } from '../api/getNewsPost'
import PostContent from '../../components/pages/newsPost/PostContent'
import Banner from '../../components/pages/location/Banner'
import Similiar from '../../components/pages/newsPost/Similiar'
import { getNews, updateViews } from '../../stores/ContentState'
import SeoBlock from '../../components/common/SeoBlock'

const NewsPostPage = observer(({ hydrationData: props }: any) => {
  const ref = useRef<any>(false)
  const [loading, setLoading] = useState(true)
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
    updateViews(props.content.id)
    ref.current = true
  }, [props])

  useEffect(() => {
    if (props.content) {
      setLoading(false)
    }
  }, [props])

  return (
    <>
      <SeoBlock seo={props.seo} />
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
        slug: p.slug,
        path: p.link,
      },
    })
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const response = (await getNewsPost(params.slug)) || null

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  }
}
