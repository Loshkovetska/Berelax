import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import GlobalState from '../stores/GlobalState'
import Layout from '../components/common/Layout'
import { getBooking } from './api/getBooking'
import BookingSteps from '../components/pages/booking/Steps'
import TimePop from '../components/pages/booking/TimePop'
import CustomCalendar from '../components/common/Calendar'

const Booking = observer(({ hydrationData: props }: any) => {
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
        <BookingSteps />
      </Layout>
      <TimePop />
      <CustomCalendar beforeDate/>
    </>
  )
})

export default Booking

export async function getStaticProps() {
  const response = await getBooking()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
