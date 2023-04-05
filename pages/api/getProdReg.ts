import {
  getHeader,
  getProductRegister,
} from '../../stores/ContentState'

export const getProdReg = async () => {
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getProductRegister()

  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
