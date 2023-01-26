import {
  getBookingPage,
  getCountryPop,
  getFooter,
  getHeader,
  getStoryPage,
} from '../../stores/ContentState'

export const getStory = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getStoryPage(),
    countrypop = await getCountryPop()

  return {
    header,
    footer,
    content,
    countrypop,
  }
}
