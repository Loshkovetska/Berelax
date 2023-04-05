import {
  getHeader,
  getNews,
  getNewsPage,
} from '../../stores/ContentState'

export const getNewsC = async () => {
  const { header, footer, countrypop } = await getHeader(),
    { seo, content } = await getNewsPage(),
    cards = await getNews()
  return {
    header,
    footer,
    content,
    countrypop,
    cards,
    seo,
  }
}
