import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import Intro from '../../components/pages/treatments/Intro'
import Services from '../../components/pages/home/Services'
import BookBlock from '../../components/pages/home/BookBlock'
import Banner from '../../components/pages/location/Banner'
import { getTreatPage } from '../api/getTreatPage'
import Faqs from '../../components/pages/treatments/Faqs'
import Layout from '../../components/common/Layout'
import SeoBlock from '../../components/common/SeoBlock'
const TreatmentsPage = observer(({ hydrationData: props }: any) => {
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
    revalidate: 10,
  }
}
