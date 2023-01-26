import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import GlobalState from '../stores/GlobalState'
import Layout from '../components/common/Layout'
import Intro from '../components/pages/story/Intro'
import { getAcademy } from './api/getAcademy'
import Courses from '../components/pages/academy/Courses'
import Stories from '../components/pages/academy/Stories'
import Banner from '../components/pages/location/Banner'

const AcademyPage = observer(({ hydrationData: props }: any) => {
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

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
