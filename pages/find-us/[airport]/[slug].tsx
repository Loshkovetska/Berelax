import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../../hooks/useLoco'
import Intro from '../../../components/pages/location/Intro'
import getLocation from '../../api/getLocation'
import { getLocations } from '../../../stores/ContentState'
import FindUs from '../../../components/pages/location/FindUs'
import Treatments from '../../../components/pages/location/Treatments'
import Partners from '../../../components/pages/location/Partners'
import Banner from '../../../components/pages/location/Banner'
import Reviews from '../../../components/pages/location/Reviews'
import Near from '../../../components/pages/location/Near'
import Layout from '../../../components/common/Layout'
import SeoBlock from '../../../components/common/SeoBlock'
import Script from 'next/script'

const LocationPage = observer(({ hydrationData: props }: any) => {
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
  airports?.forEach((pi: any) => {
    if (pi.cat != 32) return

    paths.push({
      params: {
        airport: pi.skyCat.slug,
        slug: pi.slug,
        path: pi.link,
      },
    })
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const response = (await getLocation(params.slug)) || null
  if (!response) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  }
}
