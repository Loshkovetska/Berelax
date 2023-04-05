import { observable } from 'mobx'
import {
  formatGeneralTretments,
  formatHeaderMenu,
  formatHomePage,
  formatorAcademyPage,
  formatorContactPage,
  formatorFaqPage,
  formatorGetNews,
  formatorNewsPage,
  formatorPageAirRepresenter,
  formatorPartnersPage,
  formatorSingleNewsPost,
  formatorStoryPage,
  formatProductCat,
  formatProductCatPage,
  formatProductItem,
  formatProductPage,
  formatProductsPage,
  formatSingleService,
  formatTreatCat,
  servicesFormat,
  formatorCareersPage,
  formatorVacancies,
  formatorVacancyPost,
  formatorCountryPOP,
  formatorFooter,
  formatorBooking,
  formatorProductReg,
  formatorRetailerPage,
  formatorFindUs,
  formatorLocation,
  formatorLocations,
  formatorSortLocations,
  retailerLocations,
} from '../funcs/formators'
import { DOMAIN } from '../mocks/domain'

const HomeState: any = observable({
  content: {
    audio: '',
    intro: null,
    block2: null,
    services: null,
    servicesBtn: '',
    book: null,
    products: null,
    news: null,
    follow: null,
  },
})
export default HomeState

//GENRERAL
export const getFooter = async (acf: any) => {
  const request = await fetch(`${DOMAIN}wp-json/wp-api-menus/v2/menus/31`)
  const res = await request.json()

  return formatorFooter(res, acf)
}

export const getPagesLinks = async () => {
  const request = await fetch(`${DOMAIN}wp-json/wp/v2/pages?per_page=100`)
  const res = await request.json()
  const result: any = []

  res.forEach((r: any) => {
    let link = ''
    if (r.id != 2) {
      const slug = r.slug
      if (r.parent) {
        let parent = ''
        const obj = res.find((re: any) => re.id == r.parent)
        parent = obj.slug
        link = `/${parent}/${slug}`
      } else {
        link = `/${slug}`
      }
    }

    result.push({
      id: r.id,
      link: link,
      title: r.title.rendered,
    })
  })

  return result
}

export const getContentByPage = async (
  pages: string,
  page: number | string,
) => {
  const request = await fetch(`${DOMAIN}wp-json/wp/v2/${pages}/${page}`)

  return await request.json()
}

export const themeOptions = async () => {
  const res = await fetch(
    `${DOMAIN}wp-json/acf/v3/options/options?per_page=100`,
  )
  const result = await res.json()

  return result
}

export const getHeader = async () => {
  const fd = new FormData()
  fd.append('status', 'header')
  const request = await fetch(`${DOMAIN}wp-json/wp-api-menus/v2/menus/2`)

  const result = await request.json()
  const { acf } = await themeOptions()
  return {
    header: {
      logo: acf.logo.url,
      altLogo: acf.logo.alt,
      menu: await formatHeaderMenu(result),
      searchbuttonTitle: acf.searchButton,
    },
    countrypop: await getCountryPop(acf),
    footer: await getFooter(acf),
  }
}

export const getCountries = async () => {
  const req = await fetch(`${DOMAIN}wp-json/wp/v2/countrys`)
  const response = await req.json()

  return response
}

//HOME
export const getHomePage = async () => {
  const result = await getContentByPage('pages', 2)
  return {
    content: await formatHomePage(result),
    seo: result?.yoast_head,
  }
}

//STORY
export const getStoryPage = async () => {
  const content = await getContentByPage('pages', 293)

  return {
    content: await formatorStoryPage(content),
    seo: content?.yoast_head,
  }
}

//ACADEMY
export const getAcademyPage = async () => {
  const content = await getContentByPage('pages', 325)
  return {
    content: await formatorAcademyPage(content),
    seo: content?.yoast_head,
  }
}
//PARTNERS

export const getPartnersPage = async () => {
  const content = await getContentByPage('pages', 362)
  return {
    content: await formatorPartnersPage(content),
    seo: content?.yoast_head,
  }
}

//AIR REPRESENTOR
export const getAirRepresentPage = async () => {
  const content = await getContentByPage('pages', 386)

  return {
    content: await formatorPageAirRepresenter(content),
    seo: content?.yoast_head,
  }
}

//CONTACT US
export const getContactPage = async () => {
  const content = await getContentByPage('pages', 436)
  return {
    content: await formatorContactPage(content),
    seo: content?.yoast_head,
  }
}

//FAQ
export const getFaqPage = async () => {
  const content = await getContentByPage('pages', 455)
  return {
    content: await formatorFaqPage(content),
    seo: content?.yoast_head,
  }
}

//TERMS
export const getTermsPage = async () => {
  const content = await getContentByPage('pages', 465)
  return {
    content: {
      title: content.title.rendered,
      content: content.content.rendered,
    },
    seo: content?.yoast_head,
  }
}
export const getPolicyPage = async () => {
  const content = await getContentByPage('pages', 3)
  return {
    content: {
      title: content.title.rendered,
      content: content.content.rendered,
    },
    seo: content?.yoast_head,
  }
}

//NEWS
export const getPostCategories = async () => {
  const req = await fetch(`${DOMAIN}wp-json/wp/v2/categories`)
  const res = await req.json()

  return res
}

export const getMediaById = async (id: number) => {
  const req = await fetch(`${DOMAIN}wp-json/wp/v2/media/${id}`)
  const res = await req.json()
  return res
}

export const getNews = async () => {
  const request = await fetch(`${DOMAIN}wp-json/wp/v2/posts?per_page=100`)
  const res = await request.json()
  return formatorGetNews(res)
}

export const updateViews = async (id: number) => {
  const fd = new FormData()
  fd.append('id', id.toString())
  fd.append('action', 'updateViewsPost')
  await fetch(`${DOMAIN}wp-admin/admin-ajax.php`, {
    method: 'POST',
    body: fd,
  })
}

export const getNewsPage = async () => {
  const content = await getContentByPage('pages', 494)
  return {
    seo: content.yoast_head,
    content: await formatorNewsPage(content),
  }
}

export const getNewsPostPage = async (post: any) => {
  const newsPost = await getContentByPage('posts', post.id)
  return {
    content: await formatorSingleNewsPost({
      post: post,
      cont: newsPost,
    }),
    seo: newsPost.yoast_head,
  }
}

//CAREERS
export const getCareersTypes = async () => {
  const req = await fetch(`${DOMAIN}wp-json/wp/v2/type-careers`)
  const res = await req.json()
  return res
}

export const getCareerPage = async () => {
  const content = await getContentByPage('pages', 501)
  return {
    content: await formatorCareersPage(content),
    seo: content.yoast_head,
  }
}

export const getVacancies = async () => {
  const req = await fetch(`${DOMAIN}wp-json/wp/v2/careers?per_page=100`)
  const res = await req.json()
  return formatorVacancies(res)
}

export const getCareerPostPage = async (post: any) => {
  const req = await fetch(`${DOMAIN}wp-json/wp/v2/careers/${post.id}`)
  const res = await req.json()
  return {
    content: await formatorVacancyPost({
      post,
      content: res,
    }),
    seo: res.yoast_head,
  }
}

export const getCountryPop = async (acf: any) => {
  return formatorCountryPOP(acf)
}

//BOOKING
export const getBookingPage = async () => {
  const res = await getContentByPage('pages', 552)
  return {
    content: await formatorBooking(res),
    seo: res.yoast_head,
  }
}

//FIND US
export const getFindUsPage = async () => {
  const res = await getContentByPage('pages', 693)

  return {
    content: await formatorFindUs(res),
    seo: res.yoast_head,
  }
}

export const getLocations = async () => {
  const req = await fetch(`${DOMAIN}wp-json/wp/v2/locations?per_page=100`)
  const res = await req.json()
  return formatorLocations(res)
}

export const getSortLocations = async () => {
  const locats = await getLocations()
  return formatorSortLocations(locats)
}

export const getLocationPage = async (current: any) => {
  const res = await getContentByPage('locations', current.id)
  return {
    content: await formatorLocation(res),
    seo: res.yoast_head,
  }
}

export const getLocationsCategories = async () => {
  const res = await fetch(
    `${DOMAIN}wp-json/wp/v2/cat-sky?per_page=100`,
  ).then((t) => t.json())

  return res
}

export const getSearchContent = async () => {
  const { acf } = await themeOptions()
  const content = await getContentByPage('pages', 685)
  return {
    content: {
      sections: ['products', 'news', 'treatments'],
      productButton: acf.product_button_title,
    },
    seo: content.yoast_head,
  }
}

//PRODUCTS
export const getRetailerPage = async () => {
  const content = await getContentByPage('pages', 687)
  return {
    content: await formatorRetailerPage(content),
    seo: content.yoast_head,
  }
}

export const getProductPage = async (service: string) => {
  const content = await getContentByPage('products', service)
  return {
    content: await formatProductPage(content),
    seo: content.yoast_head,
  }
}

export const getProductsContent = async (page: number) => {
  const content = await getContentByPage('pages', page)
  return {
    content: await formatProductsPage(content),
    seo: content.yoast_head,
  }
}

export const getProductCatPage = async (cat: string) => {
  const content = await getContentByPage('cat-products', cat)
  return {
    content: await formatProductCatPage(content),
    seo: content.yoast_head,
  }
}
export const getProductsCat = async () => {
  const request = await fetch(`${DOMAIN}wp-json/wp/v2/cat-products/`)
  const res = await request.json()
  const result = await formatProductCat(res)
  return result
}

export const getProductsColors = async () => {
  const request = await fetch(
    `${DOMAIN}wp-json/wp/v2/color-products?per_page=100`,
  )
  const res = await request.json()
  const result = res
  return result
}
export const getProductsFilling = async () => {
  const request = await fetch(
    `${DOMAIN}wp-json/wp/v2/filling-products?per_page=100`,
  )
  const res = await request.json()
  const result = res
  return result
}
export const getProductsBodyPart = async () => {
  const request = await fetch(
    `${DOMAIN}wp-json/wp/v2/bodypart-products?per_page=100`,
  )
  const res = await request.json()
  const result = res
  return result
}
export const getProductsHeatOption = async () => {
  const request = await fetch(
    `${DOMAIN}wp-json/wp/v2/heatoption-products?per_page=100`,
  )
  const res = await request.json()
  const result = res
  return result
}
export const getProductsConcern = async () => {
  const request = await fetch(
    `${DOMAIN}wp-json/wp/v2/concern-products?per_page=100`,
  )
  const res = await request.json()
  const result = res
  return result
}

export const getProductsType = async () => {
  const request = await fetch(
    `${DOMAIN}wp-json/wp/v2/type-products?per_page=100`,
  )
  const res = await request.json()
  const result = res
  return result
}

export const getProducts = async () => {
  const request = await fetch(`${DOMAIN}wp-json/wp/v2/products/?per_page=100`)
  const res = await request.json()
  const result = await formatProductItem(res)
  return result
}

export const getProductRegister = async () => {
  const content = await getContentByPage('pages', 670)
  return {
    content: await formatorProductReg(content),
    seo: content.yoast_head,
  }
}

//TREATMENTS
export const getServiceItem = async (id: number) => {
  const request = await fetch(`${DOMAIN}wp-json/wp/v2/treatments/${id}`)

  const it = await request.json()

  return {
    content: await formatSingleService(it),
    seo: it.yoast_head,
  }
}

export const getServiceCat = async () => {
  const cats: any = []
  const request = await fetch(`${DOMAIN}wp-json/wp/v2/cat-treatments/`)
  const ars = await request.json()

  for (let i = 0; i < ars.length; i++) {
    const item = ars[i]
    const body: any = item.acf.body
      ? item.acf.body?.map((b: any) => b.name)
      : []
    const type: any = item.acf.type
      ? item.acf.type?.map((b: any) => b.name)
      : []

    cats.push({
      id: item.id,
      title: item.name,
      link: `/treatments/${item.slug}`,
      slug: item.slug,
      img: item.acf.image.url,
      alt: item.acf.image.alt,
      body: body,
      type: type,
      text: item.description,
      buttonText: item.acf.button_text,
    })
  }
  return cats
}

export const getServiceBodyType = async () => {
  const request = await fetch(
    `${DOMAIN}wp-json/wp/v2/body-treatments?per_page=100`,
  )
  return await request.json()
}

export const getServiceType = async () => {
  const request = await fetch(
    `${DOMAIN}wp-json/wp/v2/type-treatments?per_page=100`,
  )
  return await request.json()
}
export const getTreatmentsPage = async (page: number) => {
  const content = await getContentByPage('pages', page)
  const res = await formatGeneralTretments(content)
  return {
    content: res,
    seo: content.yoast_head,
  }
}

export const getTreatCatPage = async (page: string) => {
  const content = await getContentByPage('cat-treatments', page)
  const result = await formatTreatCat(content)
  return {
    content: result,
    seo: content?.yoast_head,
  }
}

export const getServicePage = async (ser: number) => {
  const treatment = await getServiceItem(ser)
  return treatment
}
export const getServices = async () => {
  const request = await fetch(`${DOMAIN}wp-json/wp/v2/treatments/?per_page=100`)
  const res = await request.json()
  const result = await servicesFormat(res)
  return result
}

//SEARCH
export const searchByParams = async (value: string) => {
  const fd = new FormData()
  fd.append('value', value)
  fd.append('action', 'search')

  const request = await fetch(`${DOMAIN}wp-admin/admin-ajax.php`, {
    method: 'POST',
    body: fd,
  })
  const response = await request.json()

  return response
}

//SUBSCRIBE
export const setSubscribe = async (email: string) => {
  const fd = new FormData()
  fd.append('email', email)
  fd.append('action', 'subscribe')

  const req = await fetch(`${DOMAIN}wp-admin/admin-ajax.php`, {
    method: 'POST',
    body: fd,
  })
  const res = await req.json()
}

//BOOKING
export const bookService = async (dt: any) => {
  const fd = new FormData()

  console.log(dt?.location)
  fd.append('fname', dt.fname)
  fd.append('lname', dt.lname)
  fd.append('email', dt.email)
  fd.append('phone', dt.phone)
  fd.append('date', dt.date)
  fd.append('time', dt.time)
  fd.append('location', dt?.location?.title + ', ' + dt?.location?.text)
  fd.append('lmail', String(dt?.location?.id))
  fd.append('treatments', dt.treatments.map((t: any) => t.id).join(', '))
  fd.append('need_subscribe', dt.check2)
  fd.append('addInfo', dt.addInfo)
  fd.append('action', 'booking')

  const req = await fetch(`${DOMAIN}wp-admin/admin-ajax.php`, {
    method: 'POST',
    body: fd,
  })
}

//PRODUCT REGISTER
export const productRegisterForm = async (dt: any) => {
  const fd = new FormData()
  fd.append('fname', dt.fname)
  fd.append('lname', dt.lname)

  fd.append('serial_number', dt.serialNumber)
  fd.append('date', dt.date)
  fd.append('subscribe', dt.check2)
  fd.append('file', dt.file, dt.file.name)
  fd.append('product', dt.product.title)
  fd.append('action', 'product-register')

  await fetch(`${DOMAIN}wp-admin/admin-ajax.php`, {
    method: 'POST',
    body: fd,
  })
}

//CONTACT FORM
export const contactForm = async (dt: any) => {
  const fd = new FormData()
  fd.append('fname', dt.fname)
  fd.append('lname', dt.lname)
  fd.append('email', dt.email)
  fd.append('location', dt.location.title)
  fd.append('msg', dt.msg)
  fd.append('subject', dt.subject)
  dt.file && fd.append('receipt', dt.file, dt.file.name)
  dt.file2 && fd.append('product_picture', dt.file2, dt.file2.name)

  fd.append('action', 'contact')

  await fetch(`${DOMAIN}wp-admin/admin-ajax.php`, {
    method: 'POST',
    body: fd,
  })
}

//RESUME FORM
export const vacancyForm = async (dt: any) => {
  const fd = new FormData()
  fd.append('fname', dt.fname)
  fd.append('lname', dt.lname)
  fd.append('email', dt.email)
  fd.append('phone', dt.phone)
  fd.append('city', dt.city)
  fd.append('country', dt.country)
  fd.append('lmail', dt.lmail)
  {
    dt.profType && fd.append('profType', dt.profType)
  }
  {
    dt.location && fd.append('location', dt.location.title)
  }
  fd.append('msg', dt.message)
  dt.file && fd.append('resume', dt.file, dt.file.name)
  dt.file2 && fd.append('cover_letter', dt.file2, dt.file2.name)

  fd.append('action', 'resume-form')

  await fetch(`${DOMAIN}wp-admin/admin-ajax.php`, {
    method: 'POST',
    body: fd,
  })
}

//BE PARTNER
export const partnerForm = async (dt: any) => {
  const fd = new FormData()
  fd.append('fname', dt.fname)
  fd.append('lname', dt.lname)
  fd.append('email', dt.email)
  fd.append('phone', dt.phone)
  fd.append('company', dt.company)
  fd.append('msg', dt.message)
  dt.file && fd.append('file', dt.file, dt.file.name)

  fd.append('action', 'partner-form')

  await fetch(`${DOMAIN}wp-admin/admin-ajax.php`, {
    method: 'POST',
    body: fd,
  })
}

//AIR REPRESENTATIVE
export const airForm = async (dt: any) => {
  const fd = new FormData()
  fd.append('fname', dt.fname)
  fd.append('lname', dt.lname)
  fd.append('email', dt.email)
  fd.append('phone', dt.phone)
  fd.append('company/airport', dt.company)
  fd.append('msg', dt.message)
  dt.file && fd.append('file', dt.file, dt.file.name)

  fd.append('action', 'air-form')

  await fetch(`${DOMAIN}wp-admin/admin-ajax.php`, {
    method: 'POST',
    body: fd,
  })
}

//RETAILER PAGE
export const retailerLocationsList = async () => {
  const req = await fetch(`${DOMAIN}wp-json/wp/v2/locations?per_page=100`)
  const res = await req.json()

  return retailerLocations(res)
}
export const retailerSearch = async (val: string) => {
  const fd = new FormData()
  fd.append('value', val)
  fd.append('action', 'search_loc')

  const req = await fetch(`${DOMAIN}wp-admin/admin-ajax.php`, {
    method: 'POST',
    body: fd,
  })
  const res = await req.json()

  return res
}
