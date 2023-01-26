import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import GlobalState from '../../stores/GlobalState'
import Layout from '../../components/common/Layout'
import SmallPop from '../../components/common/SmallPop'
import ResumeForm from '../../components/pages/career/ResumeForm'
import { getVacancies } from '../../stores/ContentState'
import { getCareerPost } from '../api/getCareerPost'
import Intro from '../../components/pages/vacancy/Intro'

const CareerPostPage = observer(({ hydrationData: props }: any) => {
  const [loading, setLoading] = useState(false)
  const ref = useRef<any>(null)

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
        slug: p.link.replaceAll('/careers/', '').replaceAll('/', ''),
        path: p.link.replaceAll('/careers/', '').replaceAll('/', ''),
      },
    })
  })

  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: any) {
  const response = await getCareerPost(params.slug)

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
