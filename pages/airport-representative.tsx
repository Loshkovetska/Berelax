import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import Layout from '../components/common/Layout'
import Intro from '../components/pages/story/Intro'
import { getAirRepresent } from './api/getAirRepresent'
import CompanyValues from '../components/pages/story/CompanyValues'
import RepresentForm from '../components/pages/represent/RepresentForm'
import SmallPop from '../components/common/SmallPop'
import SeoBlock from '../components/common/SeoBlock'

const RepresentativePage = observer(({ hydrationData: props }: any) => {
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
        <CompanyValues />
        <RepresentForm />
      </Layout>
      <SmallPop />
    </>
  )
})

export default RepresentativePage

export async function getStaticProps() {
  const response = await getAirRepresent()

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  }
}
