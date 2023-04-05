import {
  getCountryPop,
  getFooter,
  getHeader,
  getPartnersPage,
} from '../../stores/ContentState'

export const getPartners = async () => {
  const { header, footer, countrypop } = await getHeader(),
    { seo, content } = await getPartnersPage()

  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
