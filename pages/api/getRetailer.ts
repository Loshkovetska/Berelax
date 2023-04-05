import {
  getCountryPop,
  getFooter,
  getHeader,
  getRetailerPage,
} from '../../stores/ContentState'

export const getRetailer = async () => {
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getRetailerPage()

  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
