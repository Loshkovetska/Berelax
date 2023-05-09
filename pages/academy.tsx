import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import Layout from '../components/common/Layout'
import Intro from '../components/pages/story/Intro'
import { getAcademy } from './api/getAcademy'
import Courses from '../components/pages/academy/Courses'
import Stories from '../components/pages/academy/Stories'
import Banner from '../components/pages/location/Banner'
import SeoBlock from '../components/common/SeoBlock'
import Script from 'next/script'

const AcademyPage = observer(({ hydrationData: props }: any) => {
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
        <Courses />
        <Stories />
        <Banner />
      </Layout>
    </>
  )
})

export default AcademyPage

export async function getStaticProps() {
  const response = await getAcademy()
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
