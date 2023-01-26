import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import GlobalState from '../stores/GlobalState'
import Layout from '../components/common/Layout'
import { getFaq } from './api/getFaq'
import Faq from '../components/pages/faq/Faq'

const FaqPage = observer(({ hydrationData: props }: any) => {
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

  if (loading) return <></>

  return (
    <>
      <Head>
        <title>Be relax</title>
      </Head>
      <Layout delay={1}>
        <Faq />
      </Layout>
    </>
  )
})

export default FaqPage

export async function getStaticProps() {
  const response = await getFaq()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
