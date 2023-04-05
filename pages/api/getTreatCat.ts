import {
  getCountryPop,
  getFooter,
  getHeader,
  getPagesLinks,
  getServiceCat,
  getServices,
  getTreatCatPage,
} from '../../stores/ContentState'

export const getTreatCat = async (cat: string) => {
  const cats = await getServiceCat()
  let dt: any = await getServices()
  const current = cats.find((c: any) => c.slug == cat)
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getTreatCatPage(current.id),
    cards = dt.filter((d: any) => d.category == cat)
  return {
    header,
    footer,
    content,
    countrypop,
    cards,
    seo,
  }
}
