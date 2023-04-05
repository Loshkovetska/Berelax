import {
  getHeader,
  getNews,
  getNewsPostPage,
} from '../../stores/ContentState'

export const getNewsPost = async (slug: string) => {
  const news = await getNews()
  const current = news.find((n: any) => n.slug == slug)
  const { header, footer, countrypop } = await getHeader(),
    { seo, content } = await getNewsPostPage(current)

  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
