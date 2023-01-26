import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import GlobalState from '../stores/GlobalState'
import Layout from '../components/common/Layout'
import { getContact } from './api/getContact'
import ContactForm from '../components/pages/contact/ContactForm'
import SmallPop from '../components/common/SmallPop'

const ContactPage = observer(({ hydrationData: props }: any) => {
  const [loading, setLoading] = useState(false)
  const ref = useRef<any>(null)

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
      <Layout delay={1}>
        <ContactForm />
      </Layout>
      <SmallPop />
    </>
  )
})

export default ContactPage

export async function getStaticProps() {
  const response = await getContact()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
