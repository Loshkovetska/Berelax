import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import GlobalState from '../../stores/GlobalState'
import Layout from '../../components/common/Layout'
import { getProdReg } from '../api/getProdReg'
import ProdRegister from '../../components/pages/products/ProdRegister'
import CustomCalendar from '../../components/common/Calendar'
import SmallPop from '../../components/common/SmallPop'

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
        <ProdRegister />
      </Layout>
      <CustomCalendar afterDate />
      <SmallPop />
    </>
  )
})

export default ProductsRegister

export async function getStaticProps() {
  const response = await getProdReg()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
