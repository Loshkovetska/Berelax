import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import Layout from '../components/common/Layout'
import SeoBlock from '../components/common/SeoBlock'
import ErrorContent from '../components/pages/error/ErrorContent'
import { getErrorPage } from './api/getErrorPage'
import Script from 'next/script'

const ErrorPage = observer(({ hydrationData: props }: any) => {
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

      <Layout delay={1} withFooter={false} isTransparentHeader>
        <ErrorContent />
      </Layout>
    </>
  )
})

export default ErrorPage

export async function getStaticProps() {
  const response = (await getErrorPage()) || null

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  }
}
