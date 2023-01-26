import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import GlobalState from '../stores/GlobalState'
import Layout from '../components/common/Layout'
import PostContent from '../components/pages/newsPost/PostContent'
import Banner from '../components/pages/location/Banner'
import Similiar from '../components/pages/newsPost/Similiar'
import { getTerms } from './api/getTerms'
import TermsContent from '../components/pages/terms/TermsContent'

const TermsPage = observer(({ hydrationData: props }: any) => {
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
        <TermsContent />
      </Layout>
    </>
  )
})

export default TermsPage

export async function getStaticProps() {
  const response = await getTerms()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
