import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import Intro from '../components/pages/home/Intro'
import TextBlock from '../components/pages/home/TextBlock'
import Services from '../components/pages/home/Services'
import BookBlock from '../components/pages/home/BookBlock'
import Products from '../components/pages/home/Products'
import News from '../components/pages/home/News'
import FollowUs from '../components/pages/home/FollowUs'
import { getHome } from './api/getHome'
import Layout from '../components/common/Layout'
import SeoBlock from '../components/common/SeoBlock'
import { changeCountryState, changeLocale } from '../stores/GlobalState'
import Script from 'next/script'

const Home = observer(({ hydrationData: props }: any) => {
  const [loading, setLoading] = useState(true)
  const ref = useRef<boolean>(false)
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

  const getLocation = () => {
    fetch(
      'https://api.geoapify.com/v1/ipinfo?apiKey=bfd5d7c6dda54e72aa811c792e169ee6',
    )
      .then((resp) => resp.json())
      .then((userLocationData) => {
        sessionStorage.setItem(
          'locale',
          JSON.stringify({
            country: userLocationData.country.name,
            code: userLocationData.country.iso_code,
          }),
        )
        changeLocale()
      })
  }

  useEffect(() => {
    if (ref.current) return
    if (sessionStorage.getItem('locale')) {
      const locale = JSON.parse(sessionStorage.getItem('locale')!)
      if (locale.country) {
      } else getLocation()
    } else {
      getLocation()
      setTimeout(() => {
        changeCountryState()
      }, 1000)
    }
    ref.current = true
  }, [])
  return (
    <>
      <SeoBlock seo={props.seo} />

      <Layout isMain>
        <Intro />
        <TextBlock />
        <Services />
        <BookBlock />
        <Products />
        <News />
        <FollowUs />
      </Layout>
    </>
  )
})

export default Home

export async function getStaticProps() {
  const response = await getHome()
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
