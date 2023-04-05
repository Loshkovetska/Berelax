import { observer } from 'mobx-react'
import { useEffect, useRef, useState } from 'react'
import useLocoScroll from '../hooks/useLoco'
import Layout from '../components/common/Layout'
import Intro from '../components/pages/story/Intro'
import { getStory } from './api/getStory'
import CompanyValues from '../components/pages/story/CompanyValues'
import RoadMap from '../components/pages/story/RoadMap'
import FollowUs from '../components/pages/home/FollowUs'
import StoryBlocks from '../components/pages/story/StoryBlocks'
import SeoBlock from '../components/common/SeoBlock'

const Story = observer(({ hydrationData: props }: any) => {
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
    revalidate: 10,
  }
}
