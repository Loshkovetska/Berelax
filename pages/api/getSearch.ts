import {
  getCountryPop,
  getFooter,
  getHeader,
  getSearchContent,
} from '../../stores/ContentState'

export const getSearch = async () => {
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getSearchContent()

  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
