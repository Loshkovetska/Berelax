import {
  getCountryPop,
  getFooter,
  getHeader,
  getRetailerPage,
} from '../../stores/ContentState'

export const getRetailer = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getRetailerPage(),
    countrypop = await getCountryPop()

  return {
    header,
    footer,
    content,
    countrypop,
  }
}
