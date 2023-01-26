import {
  getCountryPop,
  getFooter,
  getHeader,
  getTermsPage,
} from '../../stores/ContentState'

export const getTerms = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getTermsPage(),
    countrypop = await getCountryPop()
  return {
    header,
    footer,
    content,
    countrypop,
  }
}
