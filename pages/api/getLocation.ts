import {
  getCountryPop,
  getFooter,
  getHeader,
  getLocationPage,
} from '../../stores/ContentState'

const getLocation = async (slug: string) => {
  const header = await getHeader(),
    footer = await getFooter(),
    content = await getLocationPage( slug),
    countrypop = await getCountryPop()

  return { header, footer, content, countrypop }
}

export default getLocation
