import {
  getCountryPop,
  getFooter,
  getHeader,
  getSearchContent,
} from '../../stores/ContentState'

export const getSearch = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getSearchContent(),
    countrypop = await getCountryPop()

  return {
    header,
    footer,
    content,
    countrypop,
  }
}
