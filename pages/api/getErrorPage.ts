import {
  getHeader,
  getError,
  getSortLocations,
} from '../../stores/ContentState'

export const getErrorPage = async () => {
  const { header, footer, countrypop } = await getHeader(),
    airports = await getSortLocations(),
    { content, seo } = await getError()
  return {
    header,
    footer,
    content,
    countrypop,
    airports,
    seo,
  }
}
