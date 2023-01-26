import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../../hooks/useLoco'
import GlobalState from '../../../stores/GlobalState'
import { getHeader, getProducts } from '../../../stores/ContentState'
import Layout from '../../../components/common/Layout'
import { getProduct } from '../../api/getProduct'
import Intro from '../../../components/pages/product/Intro'
import Benefits from '../../../components/pages/service/Benefits'
import Banner from '../../../components/pages/location/Banner'
import Similiar from '../../../components/pages/service/Similiar'
import RetailPop from '../../../components/common/RetailPop'

const TreatmentsCategoryPage = observer(({ hydrationData: props }: any) => {
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
        slug: li.link
          .replaceAll('products', '')
          .replaceAll('/', '')
          .replaceAll(li.category, ''),
        path: li.link,
      },
    })
  })

  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: any) {
  const response = await getProduct(params.slug)

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
