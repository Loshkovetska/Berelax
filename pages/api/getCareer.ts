import {
  getCountryPop,
  getFooter,
  getHeader,
  getCareerPage,
  getLocations,
  getVacancies,
} from '../../stores/ContentState'

export const getCareer = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getCareerPage(),
    countrypop = await getCountryPop(),
    airports = await getLocations(),
    cards = await getVacancies()

  return {
    header,
    footer,
    content,
    countrypop,
    airports,
    cards,
  }
}
