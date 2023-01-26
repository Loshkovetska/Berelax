import {
  getCountryPop,
  getFindUsPage,
  getFooter,
  getHeader,
  getLocations,
  getServicePage,
} from '../../stores/ContentState'

export const getService = async (service: string) => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getServicePage(service),
    countrypop = await getCountryPop()

  return {
    header,
    footer,
    content,
    countrypop,
  }
}
