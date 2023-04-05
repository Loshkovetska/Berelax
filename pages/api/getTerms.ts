import {
  getCountryPop,
  getFooter,
  getHeader,
  getTermsPage,
} from '../../stores/ContentState'

export const getTerms = async () => {
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getTermsPage()
  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
