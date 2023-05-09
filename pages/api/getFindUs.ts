import {
  getFindUsPage,
  getHeader,
  getSortLocations,
} from '../../stores/ContentState'

export const getFindUs = async () => {
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getFindUsPage(),
    airports = await getSortLocations()

  return {
    header,
    footer,
    content,
    airports,
    countrypop,
    seo,
  }
}
