import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import GlobalState from '../../stores/GlobalState'
import Intro from '../../components/pages/treatments/Intro'
import Services from '../../components/pages/home/Services'
import BookBlock from '../../components/pages/home/BookBlock'
import Banner from '../../components/pages/location/Banner'
import { getTreatPage } from '../api/getTreatPage'
import Faqs from '../../components/pages/treatments/Faqs'
import Layout from '../../components/common/Layout'
const TreatmentsPage = observer(({ hydrationData: props }: any) => {
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
        <Services />
        <BookBlock />
        <Banner />
        <Faqs />
      </Layout>
    </>
  )
})

export default TreatmentsPage

export async function getStaticProps() {
  const response = await getTreatPage()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
