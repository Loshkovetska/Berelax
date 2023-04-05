import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import Layout from '../components/common/Layout'
import { getPartners } from './api/getPartners'
import Intro from '../components/pages/partners/Intro'
import Follow from '../components/pages/career/Follow'
import PartnersList from '../components/pages/partners/PartnersList'
import PartnerForm from '../components/pages/partners/PartnerForm'
import SmallPop from '../components/common/SmallPop'
import SeoBlock from '../components/common/SeoBlock'

const PartnersPage = observer(({ hydrationData: props }: any) => {
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
        <PartnersList />
        <PartnerForm />
        <Follow />
      </Layout>
      <SmallPop />
    </>
  )
})

export default PartnersPage

export async function getStaticProps() {
  const response = await getPartners()

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  }
}
