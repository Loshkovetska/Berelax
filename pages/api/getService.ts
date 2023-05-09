import {
  getHeader,
  getServicePage,
} from '../../stores/ContentState'

export const getService = async (service: string) => {
  const {header, footer, countrypop} = await getHeader(),
    {content, seo} = await getServicePage(service)

  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
