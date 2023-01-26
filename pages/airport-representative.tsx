import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import GlobalState from '../stores/GlobalState'
import Layout from '../components/common/Layout'
import Intro from '../components/pages/story/Intro'
import { getAirRepresent } from './api/getAirRepresent'
import CompanyValues from '../components/pages/story/CompanyValues'
import BookBlock from '../components/pages/home/BookBlock'
import RepresentForm from '../components/pages/represent/RepresentForm'
import SmallPop from '../components/common/SmallPop'

const RepresentativePage = observer(({ hydrationData: props }: any) => {
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
        <CompanyValues />
        <RepresentForm />
      </Layout>
      <SmallPop />
    </>
  )
})

export default RepresentativePage

export async function getStaticProps() {
  const response = await getAirRepresent()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
