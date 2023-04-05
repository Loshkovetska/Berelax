import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import Layout from '../../components/common/Layout'
import SmallPop from '../../components/common/SmallPop'
import ResumeForm from '../../components/pages/career/ResumeForm'
import { getVacancies } from '../../stores/ContentState'
import { getCareerPost } from '../api/getCareerPost'
import Intro from '../../components/pages/vacancy/Intro'
import SeoBlock from '../../components/common/SeoBlock'

const CareerPostPage = observer(({ hydrationData: props }: any) => {
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
        <ResumeForm isCareerPage={false} />
      </Layout>
      <SmallPop />
    </>
  )
})

export default CareerPostPage

export async function getStaticPaths() {
  const news = await getVacancies()
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
  const response = await getCareerPost(params.slug)

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  }
}
