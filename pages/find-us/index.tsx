import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import Intro from '../../components/pages/find/Intro'
import { getFindUs } from '../api/getFindUs'
import PlacesList from '../../components/pages/find/PlacesList'
import Layout from '../../components/common/Layout'
import PlaceListMob from '../../components/pages/find/PlacesListMob'
import SeoBlock from '../../components/common/SeoBlock'

const FindUs = observer(({ hydrationData: props }: any) => {
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
})

export default FindUs

export async function getStaticProps() {
  const response = await getFindUs()

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  }
}
