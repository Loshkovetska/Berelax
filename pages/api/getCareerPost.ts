import {
  getCareerPostPage,
  getHeader,
} from '../../stores/ContentState'

export const getCareerPost = async (slug: string) => {
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getCareerPostPage(slug)

  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
