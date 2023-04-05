import {
  getHeader,
  getAcademyPage,
} from '../../stores/ContentState'

export const getAcademy = async () => {
  const { header, countrypop, footer } = await getHeader(),
    { content, seo } = await getAcademyPage()
  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
