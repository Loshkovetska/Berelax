import {
  getCountryPop,
  getFooter,
  getHeader,
  getProductCatPage,
  getProducts,
} from '../../stores/ContentState'

export const getProductCat = async (cat: string) => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getProductCatPage(cat),
    countrypop = await getCountryPop(),
    cards = await getProducts()

  return {
    header,
    footer,
    content,
    countrypop,
    cards,
  }
}
