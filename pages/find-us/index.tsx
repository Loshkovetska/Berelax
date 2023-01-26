import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import Intro from '../../components/pages/find/Intro'
import { getFindUs } from '../api/getFindUs'
import PlacesList from '../../components/pages/find/PlacesList'
import Layout from '../../components/common/Layout'
import PlaceListMob from '../../components/pages/find/PlacesListMob'

const FindUs = observer(({ hydrationData: props }: any) => {
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
      <Layout>
        <Intro />
        <PlacesList />
        <PlaceListMob />
      </Layout>
    </>
  )
})

export default FindUs

export async function getStaticProps() {
  const response = await getFindUs()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
