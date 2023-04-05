import {
  getHeader,
  getStoryPage,
} from '../../stores/ContentState'

export const getStory = async () => {
  const { header, countrypop, footer } = await getHeader(),
    { content, seo } = await getStoryPage()
  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
