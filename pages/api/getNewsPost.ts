import {
  getCountryPop,
  getFooter,
  getHeader,
  getNewsPostPage,
} from '../../stores/ContentState'

export const getNewsPost = async (slug: string) => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getNewsPostPage(slug),
    countrypop = await getCountryPop()
  return {
    header,
    footer,
    content,
    countrypop,
  }
}
