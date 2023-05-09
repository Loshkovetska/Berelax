import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../../hooks/useLoco'
import Layout from '../../components/common/Layout'
import SmallPop from '../../components/common/SmallPop'
import Intro from '../../components/pages/career/Intro'
import { getCareer } from '../api/getCareer'
import Offers from '../../components/pages/career/Offers'
import Follow from '../../components/pages/career/Follow'
import ResumeForm from '../../components/pages/career/ResumeForm'
import SeoBlock from '../../components/common/SeoBlock'
import Script from 'next/script'

const CareerPage = observer(({ hydrationData: props }: any) => {
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
        <Offers />
        <Follow />
        <ResumeForm isCareerPage />
      </Layout>
      <SmallPop />
    </>
  )
})

export default CareerPage

export async function getStaticProps() {
  const response = await getCareer()
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
