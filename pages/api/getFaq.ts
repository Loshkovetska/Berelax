import {
  getHeader,
  getFaqPage,
} from '../../stores/ContentState'

export const getFaq = async () => {
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getFaqPage()
  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
