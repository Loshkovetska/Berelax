import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import Layout from '../components/common/Layout'
import { getContact } from './api/getContact'
import ContactForm from '../components/pages/contact/ContactForm'
import SmallPop from '../components/common/SmallPop'
import SeoBlock from '../components/common/SeoBlock'

const ContactPage = observer(({ hydrationData: props }: any) => {
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
        <ContactForm />
      </Layout>
      <SmallPop />
    </>
  )
})

export default ContactPage

export async function getStaticProps() {
  const response = (await getContact()) || null

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  }
}
