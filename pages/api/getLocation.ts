import {
  getHeader,
  getLocationPage,
} from '../../stores/ContentState'

const getLocation = async (slug: string) => {
  const { header, countrypop, footer } = await getHeader(),
    { content, seo } = await getLocationPage(slug)

  return { header, footer, content, countrypop, seo }
}

export default getLocation
