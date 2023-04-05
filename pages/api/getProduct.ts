import {
  getHeader,
  getProductPage,
  getProducts,
} from '../../stores/ContentState'

export const getProduct = async (service: string) => {
  const products = await getProducts()
  const page = products.find((p: any) => p.slug == service)
  const {header, footer, countrypop} = await getHeader(),
    {content, seo} = await getProductPage(page.id)
  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
