import {
  getHeader,
  getProductPage,
} from '../../stores/ContentState'

export const getProduct = async (service: string) => {
  const {header, footer, countrypop} = await getHeader(),
    {content, seo} = await getProductPage(service)
  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
