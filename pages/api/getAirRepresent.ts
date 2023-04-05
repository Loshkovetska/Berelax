import {
  getHeader,
  getAirRepresentPage,
} from '../../stores/ContentState'

export const getAirRepresent = async () => {
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getAirRepresentPage()
  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
