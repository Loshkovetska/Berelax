import {
  getCountryPop,
  getFooter,
  getHeader,
  getFaqPage,
} from '../../stores/ContentState'

export const getFaq = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getFaqPage(),
    countrypop = await getCountryPop()
  return {
    header,
    footer,
    content,
    countrypop,
  }
}
