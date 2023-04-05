import { useEffect, useState } from 'react'
import Layout from '../../../components/common/Layout'
import SeoBlock from '../../../components/common/SeoBlock'
import Intro from '../../../components/pages/find/Intro'
import PlacesList from '../../../components/pages/find/PlacesList'
import PlaceListMob from '../../../components/pages/find/PlacesListMob'
import useLocoScroll from '../../../hooks/useLoco'
import { getLocations } from '../../../stores/ContentState'
import { getFindUs } from '../../api/getFindUs'
import { getFindUsAirports } from '../../api/getFindUsAirports'

const AirportPage = ({ hydrationData: props }: any) => {
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
        <PlacesList />
        <PlaceListMob />
      </Layout>
    </>
  )
}

export default AirportPage

export async function getStaticPaths() {
  const airports = await getLocations()
  const paths: any = []
  airports?.map((pi: any) => {
    paths.push({
      params: {
        airport: pi.skyCat?.slug,
        path: `/find-us/${pi.skyCat?.slug}`,
      },
    })
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const response = await getFindUsAirports(params.airport)

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  }
}
