import {
  getHeader,
  getContactPage,
  getSortLocations,
} from '../../stores/ContentState'

export const getContact = async () => {
  const { header, footer, countrypop } = await getHeader(),
    airports = await getSortLocations(),
    { content, seo } = await getContactPage()
  return {
    header,
    footer,
    content,
    countrypop,
    airports,
    seo,
  }
}
