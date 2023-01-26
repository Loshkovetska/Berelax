import {
  getCountryPop,
  getFooter,
  getHeader,
  getAirRepresentPage,
} from '../../stores/ContentState'

export const getAirRepresent = async () => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getAirRepresentPage(),
    countrypop = await getCountryPop()

  return {
    header,
    footer,
    content,
    countrypop,
  }
}
