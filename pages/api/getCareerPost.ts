import {
    getCareerPostPage,
  getCountryPop,
  getFooter,
  getHeader,
 
} from '../../stores/ContentState'

export const getCareerPost = async (slug:string) => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getCareerPostPage(slug),
    countrypop = await getCountryPop()

  return {
    header,
    footer,
    content,
    countrypop,
  }
}
