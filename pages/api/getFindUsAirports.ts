import {
  getContentByPage,
  getFindUsPage,
  getHeader,
  getLocationsCategories,
  getSortLocations,
} from '../../stores/ContentState'

export const getFindUsAirports = async (slug: string) => {
  const { header, footer, countrypop } = await getHeader(),
    { content } = await getFindUsPage(),
    airports = await getSortLocations()

  const cats = await getLocationsCategories()
  const current = cats.find((c: any) => c.slug == slug)
  const seo = await getContentByPage('cat-sky', current.id)

  return {
    header,
    footer,
    content,
    airports,
    countrypop,
    seo: seo?.yoast_head,
  }
}
