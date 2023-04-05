import {
  getHeader,
  getCareerPage,
  getVacancies,
  getSortLocations,
} from '../../stores/ContentState'

export const getCareer = async () => {
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getCareerPage(),
    airports = await getSortLocations(),
    cards = await getVacancies()
  return {
    header,
    footer,
    content,
    countrypop,
    airports,
    cards,
    seo,
  }
}
