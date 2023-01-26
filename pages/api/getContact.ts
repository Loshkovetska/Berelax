import {
  getCountryPop,
  getFooter,
  getHeader,
  getContactPage,
  getLocations,
} from '../../stores/ContentState'

export const getContact = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    airports = await getLocations(),
    content = await getContactPage(),
    countrypop = await getCountryPop()
  return {
    header,
    footer,
    content,
    countrypop,
    airports,
  }
}
