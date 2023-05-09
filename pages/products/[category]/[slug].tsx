import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../../../hooks/useLoco'
import { getProducts } from '../../../stores/ContentState'
import Layout from '../../../components/common/Layout'
import { getProduct } from '../../api/getProduct'
import Intro from '../../../components/pages/product/Intro'
import Benefits from '../../../components/pages/service/Benefits'
import Banner from '../../../components/pages/location/Banner'
import Similiar from '../../../components/pages/service/Similiar'
import RetailPop from '../../../components/common/RetailPop'
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
        <Banner theme="blue" />
        <Similiar isProduct />
      </Layout>
      <RetailPop />
    </>
  )
})

export default TreatmentsCategoryPage

export async function getStaticPaths() {
  const list = await getProducts()
  const paths: any = []

  list?.map((li: any) => {
    paths.push({
      params: {
        category: li.category,
        slug: li.slug,
        path: li.link,
      },
    })
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const response = (await getProduct(params.slug)) || null
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
