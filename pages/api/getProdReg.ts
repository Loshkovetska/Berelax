import {
  getBookingPage,
  getCountryPop,
  getFindUsPage,
  getFooter,
  getHeader,
  getLocations,
  getProductRegister,
} from '../../stores/ContentState'

export const getProdReg = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getProductRegister(),
    countrypop = await getCountryPop()

  return {
    header,
    footer,
    content,
    countrypop,
  }
}
