import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../../../hooks/useLoco'
import { getTreatCat } from '../../api/getTreatCat'
import { getServiceCat } from '../../../stores/ContentState'
import Categories from '../../../components/pages/treatcat/Categories'
import Intro from '../../../components/pages/treatcat/Intro'
import ServicesList from '../../../components/pages/treatcat/ServicesList'
import Banner from '../../../components/pages/location/Banner'
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
      <Layout isTreatCat>
        <Categories />
        <Intro />
        <ServicesList />
        <Banner />
      </Layout>
    </>
  )
})

export default TreatmentsCategoryPage

export async function getStaticPaths() {
  const sv = await getServiceCat()

  const paths: any = []

  sv?.map((p: any) => {
    paths.push({
      params: {
        category: p.slug,
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
  const response = await getTreatCat(params.category)
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
