import {
  getCountryPop,
  getFooter,
  getHeader,
  getPagesLinks,
  getProductsContent,
  getServicePage,
} from '../../stores/ContentState'

export const getProductsC = async () => {
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getProductsContent(190)

  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
