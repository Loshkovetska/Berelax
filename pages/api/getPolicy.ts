import {

  getHeader,
  getPolicyPage,
} from '../../stores/ContentState'

export const getPolicy = async () => {
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getPolicyPage()
  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
