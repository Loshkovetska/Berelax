import {
  getCountryPop,
  getFooter,
  getHeader,
  getPartnersPage,
} from '../../stores/ContentState'

export const getPartners = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getPartnersPage(),
    countrypop = await getCountryPop()

  return {
    header,
    footer,
    content,
    countrypop,
  }
}
