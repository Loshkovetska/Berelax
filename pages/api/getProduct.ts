import {
  getCountryPop,
  getFooter,
  getHeader,
  getProductPage,
} from '../../stores/ContentState'

export const getProduct = async (service: string) => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getProductPage(service),
    countrypop = await getCountryPop()

  return {
    header,
    footer,
    content,
    countrypop,
  }
}
