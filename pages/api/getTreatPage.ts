import {
  getCountryPop,
  getFooter,
  getHeader,
  getTreatmentsPage,
} from '../../stores/ContentState'

export const getTreatPage = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getTreatmentsPage(),
    countrypop = await getCountryPop()

  return {
    header,
    footer,
    content,
    countrypop,
  }
}
