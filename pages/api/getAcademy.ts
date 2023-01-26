import {
  getCountryPop,
  getFooter,
  getHeader,
 getAcademyPage
} from '../../stores/ContentState'

export const getAcademy = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getAcademyPage(),
    countrypop = await getCountryPop()

  return {
    header,
    footer,
    content,
    countrypop,
 
  }
}
