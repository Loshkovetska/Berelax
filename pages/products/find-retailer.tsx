import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import Layout from '../../components/common/Layout'
import RetailerContent from '../../components/pages/retailer/RetailerContent'
import { getRetailer } from '../api/getRetailer'
import SeoBlock from '../../components/common/SeoBlock'
import Script from 'next/script'

const ProductsRegister = observer(({ hydrationData: props }: any) => {
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
    revalidate: 10,
  }
}
