import {
  getCountryPop,
  getFooter,
  getHeader,
  getProductsContent,
  getServicePage,
} from '../../stores/ContentState'

export const getProductsC = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getProductsContent(),
    countrypop = await getCountryPop()

  return {
    header,
    footer,
    content,
    countrypop,
  }
}
