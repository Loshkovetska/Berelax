import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import GlobalState from '../stores/GlobalState'
import Intro from '../components/pages/home/Intro'
import TextBlock from '../components/pages/home/TextBlock'
import Services from '../components/pages/home/Services'
import BookBlock from '../components/pages/home/BookBlock'
import Products from '../components/pages/home/Products'
import News from '../components/pages/home/News'
import FollowUs from '../components/pages/home/FollowUs'
import { getHome } from './api/getHome'
import Layout from '../components/common/Layout'

const Home = observer(({ hydrationData: props }: any) => {
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
      <Layout isMain>
        <Intro />
        <TextBlock />
        <Services />
        <BookBlock />
        <Products />
        <News />
        <FollowUs />
      </Layout>
    </>
  )
})

export default Home

export async function getStaticProps() {
  const response = await getHome()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
