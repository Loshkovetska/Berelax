import {
  getBookingPage,
  getCountryPop,
  getFooter,
  getHeader,
  getLocations,
} from '../../stores/ContentState'

export const getBooking = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getBookingPage(),
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
