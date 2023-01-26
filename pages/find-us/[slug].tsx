import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import Intro from '../../components/pages/location/Intro'
import getLocation from '../api/getLocation'
import { getLocations } from '../../stores/ContentState'
import FindUs from '../../components/pages/location/FindUs'
import Treatments from '../../components/pages/location/Treatments'
import Partners from '../../components/pages/location/Partners'
import Banner from '../../components/pages/location/Banner'
import Reviews from '../../components/pages/location/Reviews'
import Near from '../../components/pages/location/Near'
import Layout from '../../components/common/Layout'

const LocationPage = observer(({ hydrationData: props }: any) => {
  const [loading, setLoading] = useState(true)
  useLocoScroll(!loading)
  useEffect(() => {
    if (!loading) {
      if (typeof window === 'undefined' || !window.document) {
        return
      }
    }

    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [loading])

  if (loading) return <></>
  return (
    <>
      <Head>
        <title>Be relax</title>
      </Head>

      <Layout>
        <Intro />
        <FindUs />
        <Treatments />
        <Partners />
        <Banner />
        <Reviews />
        <Near />
      </Layout>
    </>
  )
})

export default LocationPage

export async function getStaticPaths() {
  const airports = await getLocations()
  const paths: any = []
  airports?.map((p) => {
    p.list.forEach((pi) => {
      paths.push({
        params: {
          slug: pi.link.replaceAll('/find-us/', '').replaceAll('/', ''),
          path: pi.link.replaceAll('/find-us/', '').replaceAll('/', ''),
        },
      })
    })
  })

  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: any) {
  const response = await getLocation(params.slug)

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
