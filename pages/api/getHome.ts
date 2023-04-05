import {
  getHeader,
  getHomePage,
  getNews,
} from '../../stores/ContentState'

export const getHome = async () => {
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getHomePage(),
    news = await getNews()
  return {
    header,
    footer,
    content,
    countrypop,
    news,
    seo,
  }
}
