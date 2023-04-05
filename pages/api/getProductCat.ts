import {
  getHeader,
  getProductCatPage,
  getProducts,
  getProductsCat,
} from '../../stores/ContentState'

export const getProductCat = async (cat: string) => {
  const pg = await getProductsCat()
  const page = pg.find((p: any) => p.slug == cat)
  const products = await getProducts()

  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getProductCatPage(page.id),
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
