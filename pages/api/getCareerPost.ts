import {
  getCareerPostPage,
  getHeader,
  getVacancies,
} from '../../stores/ContentState'

export const getCareerPost = async (slug: string) => {
  const vacancies = await getVacancies()
  const current = vacancies.find((v: any) => v.slug == slug)
  const { header, footer, countrypop } = await getHeader(),
    { content, seo } = await getCareerPostPage(current)

  return {
    header,
    footer,
    content,
    countrypop,
    seo,
  }
}
