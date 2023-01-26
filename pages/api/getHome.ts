import {
  getCountryPop,
  getFooter,
  getHeader,
  getHomePage,
  getNews,
} from '../../stores/ContentState'

export const getHome = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getHomePage(),
    countrypop = await getCountryPop(),
    news = await getNews()
  return {
    header,
    footer,
    content,
    countrypop,
    news,
  }
}
