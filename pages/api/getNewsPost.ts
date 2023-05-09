import {
  getHeader,
  getNewsPostPage,
} from '../../stores/ContentState'

export const getNewsPost = async (slug: string) => {
  const { header, footer, countrypop } = await getHeader(),
    { seo, content } = await getNewsPostPage(slug)

  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
