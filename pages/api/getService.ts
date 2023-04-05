import {
  getCountryPop,
  getFindUsPage,
  getFooter,
  getHeader,
  getLocations,
  getServicePage,
  getServices,
} from '../../stores/ContentState'

export const getService = async (service: string) => {
  const services = await getServices()
  const singleServ = services.find((s: any) => s.slug == service)
  const {header, footer, countrypop} = await getHeader(),
    {content, seo} = await getServicePage(singleServ.id)

  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
