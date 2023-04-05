import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import Layout from '../../components/common/Layout'
import { getProductsC } from '../api/getProductsC'
import ProductsIntro from '../../components/pages/products/ProductsIntro'
import Banner from '../../components/pages/location/Banner'
import Explore from '../../components/pages/products/Explore'
import SeoBlock from '../../components/common/SeoBlock'

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
    revalidate: 10,
  }
}
