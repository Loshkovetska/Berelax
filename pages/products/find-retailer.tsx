import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import Layout from '../../components/common/Layout'
import RetailerContent from '../../components/pages/retailer/RetailerContent'
import { getRetailer } from '../api/getRetailer'

const ProductsRegister = observer(({ hydrationData: props }: any) => {
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
        <RetailerContent />
      </Layout>
    </>
  )
})

export default ProductsRegister

export async function getStaticProps() {
  const response = await getRetailer()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
