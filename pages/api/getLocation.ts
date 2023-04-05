import {
  getCountryPop,
  getFooter,
  getHeader,
  getLocationPage,
  getLocations,
} from '../../stores/ContentState'

const getLocation = async (slug: string) => {
  const locts = await getLocations()
  let cu: any = locts.find((l: any) => l.slug == slug)
  const { header, countrypop, footer } = await getHeader(),
    { content, seo } = await getLocationPage(cu)

  return { header, footer, content, countrypop, seo }
}

export default getLocation
