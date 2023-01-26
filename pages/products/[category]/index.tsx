import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../../../hooks/useLoco'
import GlobalState from '../../../stores/GlobalState'
import { getHeader } from '../../../stores/ContentState'
import Categories from '../../../components/pages/treatcat/Categories'
import Intro from '../../../components/pages/treatcat/Intro'
import Layout from '../../../components/common/Layout'
import { getProductCat } from '../../api/getProductCat'
import ProductsList from '../../../components/pages/prodcat/ProductsList'

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
  const { menu } = await getHeader()
  const paths: any = []
  const treats = menu?.find((m) => m.link == '/products')

  treats?.submenu?.map((p: any) => {
    paths.push({
      params: {
        category: p.link.replaceAll('/', '').replaceAll('products', ''),
        path: p.link,
      },
    })
  })
  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: any) {
  const response = await getProductCat(params.category)

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
