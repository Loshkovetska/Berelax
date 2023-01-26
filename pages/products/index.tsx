import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import GlobalState from '../../stores/GlobalState'
import { getTreatCat } from '../api/getTreatCat'
import { getHeader, getTreatCatPage } from '../../stores/ContentState'
import Layout from '../../components/common/Layout'
import { getProductsC } from '../api/getProductsC'
import ProductsIntro from '../../components/pages/products/ProductsIntro'
import Banner from '../../components/pages/location/Banner'
import Explore from '../../components/pages/products/Explore'

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
        <ProductsIntro />
        <Banner theme={'blue'} />
        <Explore />
      </Layout>
    </>
  )
})

export default TreatmentsCategoryPage

export async function getStaticProps() {
  const response = await getProductsC()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
