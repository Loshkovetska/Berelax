import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import Layout from '../../components/common/Layout'
import { getNewsC } from '../api/getNews'
import Intro from '../../components/pages/news/Intro'
import TopArticles from '../../components/pages/news/TopArticles'
import NewsList from '../../components/pages/news/NewsList'
import SeoBlock from '../../components/common/SeoBlock'
const NewsPage = observer(({ hydrationData: props }: any) => {
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
    if (props.content) {
      setLoading(false)
    }
  }, [props])
  return (
    <>
      <SeoBlock seo={props.seo} />
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
    revalidate: 10,
  }
}
