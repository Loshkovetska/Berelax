import {
  getCountryPop,
  getFooter,
  getHeader,
  getServices,
  getTreatCatPage,
} from '../../stores/ContentState'

export const getTreatCat = async (cat: string) => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getTreatCatPage(cat),
    countrypop = await getCountryPop(),
    cards = await getServices()
  return {
    header,
    footer,
    content,
    countrypop,
    cards,
  }
}
