import {
  getCountryPop,
  getFooter,
  getHeader,
  getPagesLinks,
  getTreatmentsPage,
} from '../../stores/ContentState'

export const getTreatPage = async () => {
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getTreatmentsPage(39)

  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
