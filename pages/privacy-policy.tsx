import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import Layout from '../components/common/Layout'
import { getPolicy } from './api/getPolicy'
import TermsContent from '../components/pages/terms/TermsContent'
import SeoBlock from '../components/common/SeoBlock'
import Script from 'next/script'

const TermsPage = observer(({ hydrationData: props }: any) => {
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
        <TermsContent />
      </Layout>
    </>
  )
})

export default TermsPage

export async function getStaticProps() {
  const response = await getPolicy()
  if (!response) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  }
}
