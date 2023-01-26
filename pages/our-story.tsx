import Head from 'next/head'
import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import GlobalState from '../stores/GlobalState'
import { getHome } from './api/getHome'
import Layout from '../components/common/Layout'
import Intro from '../components/pages/story/Intro'
import { getStory } from './api/getStory'
import CompanyValues from '../components/pages/story/CompanyValues'
import RoadMap from '../components/pages/story/RoadMap'
import FollowUs from '../components/pages/home/FollowUs'
import StoryBlocks from '../components/pages/story/StoryBlocks'

const Story = observer(({ hydrationData: props }: any) => {
  const [loading, setLoading] = useState(false)

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
        <Intro />
        <CompanyValues />
        <RoadMap />
        <StoryBlocks />
        <FollowUs />
      </Layout>
    </>
  )
})

export default Story

export async function getStaticProps() {
  const response = await getStory()

  return {
    props: {
      hydrationData: { ...response },
    },
  }
}
