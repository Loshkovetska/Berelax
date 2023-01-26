import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import GlobalState from '../stores/GlobalState'
import Layout from '../components/common/Layout'
import { getPartners } from './api/getPartners'
import Intro from '../components/pages/partners/Intro'
import Follow from '../components/pages/career/Follow'
import PartnersList from '../components/pages/partners/PartnersList'
import PartnerForm from '../components/pages/partners/PartnerForm'
import SmallPop from '../components/common/SmallPop'

const PartnersPage = observer(({ hydrationData: props }: any) => {
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
        <PartnersList />
        <PartnerForm />
        <Follow />
      </Layout>
      <SmallPop />
    </>
  )
})

export default PartnersPage

export async function getStaticProps() {
  const response = await getPartners()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
