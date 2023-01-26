import {
  getCountryPop,
  getFooter,
  getHeader,
  getNews,
  getNewsPage,
} from '../../stores/ContentState'

export const getNewsC = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getNewsPage(),
    countrypop = await getCountryPop(),
    cards = await getNews()
  return {
    header,
    footer,
    content,
    countrypop,
    cards,
  }
}
