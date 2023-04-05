import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import Layout from '../components/common/Layout'
import { getBooking } from './api/getBooking'
import BookingSteps from '../components/pages/booking/Steps'
import TimePop from '../components/pages/booking/TimePop'
import CustomCalendar from '../components/common/Calendar'
import SeoBlock from '../components/common/SeoBlock'

const Booking = observer(({ hydrationData: props }: any) => {
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
        <BookingSteps />
      </Layout>
      <TimePop />
      <CustomCalendar beforeDate />
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
    revalidate: 10,
  }
}
