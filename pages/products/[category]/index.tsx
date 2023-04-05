import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../../../hooks/useLoco'
import { getProductsCat } from '../../../stores/ContentState'
import Categories from '../../../components/pages/treatcat/Categories'
import Intro from '../../../components/pages/treatcat/Intro'
import Layout from '../../../components/common/Layout'
import { getProductCat } from '../../api/getProductCat'
import ProductsList from '../../../components/pages/prodcat/ProductsList'
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
      <Layout isTreatCat isTreats={false}>
        <Categories isTreats={false} />
        <Intro />
        <ProductsList />
      </Layout>
    </>
  )
})

export default TreatmentsCategoryPage

export async function getStaticPaths() {
  const paths: any = []
  const productCats = await getProductsCat()

  productCats?.map((p: any) => {
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
  const response = await getProductCat(params.category)

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  }
}
