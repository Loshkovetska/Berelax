import {
  getHeader,
  getServices,
  getTreatCatPage,
} from '../../stores/ContentState'

export const getTreatCat = async (cat: string) => {
  let dt: any = await getServices()
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getTreatCatPage(cat),
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
