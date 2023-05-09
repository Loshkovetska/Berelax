import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../../hooks/useLoco'
import { getServices } from '../../../stores/ContentState'
import { getService } from '../../api/getService'
import Banner from '../../../components/pages/location/Banner'
import Intro from '../../../components/pages/service/Intro'
import Benefits from '../../../components/pages/service/Benefits'
import Similiar from '../../../components/pages/service/Similiar'
import Layout from '../../../components/common/Layout'
import SeoBlock from '../../../components/common/SeoBlock'

const TreatmentsCategoryPage = observer(({ hydrationData: props }: any) => {
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
      <Layout delay={1}>
        <Intro />
        <Benefits />
        <Banner />
        <Similiar />
      </Layout>
    </>
  )
})

export default TreatmentsCategoryPage

export async function getStaticPaths() {
  const list = await getServices()
  const paths: any = []

  list?.map((p: any) => {
    paths.push({
      params: {
        category: p.category,
        service: p.slug,
        path: p.link,
      },
    })
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const response = (await getService(params.service)) || null
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
