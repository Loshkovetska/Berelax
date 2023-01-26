import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../../../hooks/useLoco'
import { getTreatCat } from '../../api/getTreatCat'
import { getFooter, getHeader } from '../../../stores/ContentState'
import Categories from '../../../components/pages/treatcat/Categories'
import Intro from '../../../components/pages/treatcat/Intro'
import ServicesList from '../../../components/pages/treatcat/ServicesList'
import Banner from '../../../components/pages/location/Banner'
import Layout from '../../../components/common/Layout'

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
  const footer = await getFooter()
  const paths: any = []
  const treats = footer?.cols[1]?.list

  treats?.map((p: any) => {
    paths.push({
      params: {
        category: p.link.replaceAll('/', '').replaceAll('treatments', ''),
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
  const response = await getTreatCat(params.category)

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
