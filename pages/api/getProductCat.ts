import {
  getHeader,
  getProductCatPage,
  getProducts,
} from '../../stores/ContentState'

export const getProductCat = async (cat: string) => {
  const products = await getProducts()
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getProductCatPage(cat),
    cards = products.filter((c: any) => c.category == cat)
  return {
    header,
    footer,
    content,
    countrypop,
    cards,
    seo,
  }
}
