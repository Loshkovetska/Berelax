import {
  getBookingPage,
  getHeader,
  getSortLocations,
} from '../../stores/ContentState'

export const getBooking = async () => {
  const { header, countrypop, footer } = await getHeader(),
    { content, seo } = await getBookingPage(),
    airports = await getSortLocations()
  return {
    header,
    footer,
    content,
    airports,
    countrypop,
    seo,
  }
}
