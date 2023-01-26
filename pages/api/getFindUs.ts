import {
  getCountryPop,
  getFindUsPage,
  getFooter,
  getHeader,
  getLocations,
} from '../../stores/ContentState'

export const getFindUs = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getFindUsPage(),
    airports = await getLocations(),
    countrypop = await getCountryPop()

  return {
    header,
    footer,
    content,
    airports,
    countrypop,
  }
}
