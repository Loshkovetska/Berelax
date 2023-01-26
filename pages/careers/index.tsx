import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import GlobalState from '../../stores/GlobalState'
import Layout from '../../components/common/Layout'
import SmallPop from '../../components/common/SmallPop'
import Intro from '../../components/pages/career/Intro'
import { getCareer } from '../api/getCareer'
import Offers from '../../components/pages/career/Offers'
import Follow from '../../components/pages/career/Follow'
import ResumeForm from '../../components/pages/career/ResumeForm'

const CareerPage = observer(({ hydrationData: props }: any) => {
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
        <Offers />
        <Follow />
        <ResumeForm isCareerPage />
      </Layout>
      <SmallPop />
    </>
  )
})

export default CareerPage

export async function getStaticProps() {
  const response = await getCareer()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
