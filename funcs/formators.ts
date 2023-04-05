import {
  getCareersTypes,
  getContentByPage,
  getCountries,
  getLocations,
  getLocationsCategories,
  getMediaById,
  getNews,
  getPostCategories,
  getProducts,
  getProductsBodyPart,
  getProductsCat,
  getProductsColors,
  getProductsConcern,
  getProductsType,
  getServiceBodyType,
  getServiceCat,
  getServices,
  getServiceType,
  themeOptions,
} from '../stores/ContentState'
import readingTime from 'reading-time'
import { arrayMinDistance, distance } from './distance'

const getPrices = async (dt: any) => {
  const prices: any = []
  const countries = await getCountries()
  for (let i = 0; i < dt.acf?.price?.length; i++) {
    const item = dt.acf.price[i],
      amount: any = []
    let country = '',
      currency = '',
      value = ''

    for (let j = 0; j < item.amount.length; j++) {
      const am = item.amount[j]
      value = am.value
      country = am.country[0].post_title
      currency = countries.find((c: any) => c.id == am.country[0].ID)?.acf
        ?.currency

      amount.push({
        value,
        country,
        currency,
      })
    }
    prices.push({
      time: item.time,
      amount: amount,
    })
  }

  return prices
}

export const getPricesServices = async (dt: any) => {
  const prices: any = []

  const countries = await getCountries()
  for (let i = 0; i < dt.acf?.nails_price?.length; i++) {
    const item = dt.acf.nails_price[i],
      amount: any = []
    let country = '',
      currency = '',
      value = ''

    for (let j = 0; j < item.amount.length; j++) {
      const am = item.amount[j]
      value = am.value
      country = am.country[0].post_title
      currency = countries.find((c: any) => c.id == am.country[0].ID)?.acf
        ?.currency

      amount.push({
        value,
        country,
        currency,
      })
    }
    prices.push({
      time: item.time,
      amount: amount,
    })
  }

  return prices
}

export const getPhoneCodes = (acf: any) => {
  // acf.phoneCodes.map((c: any) => {
  //   return {
  //     code: c.code,
  //     title: c.title,
  //     flag: c.flag.url,
  //   }
  // })
  return []
}
export const getValues = (acf: any) => {
  return {
    title: acf.values.title,
    list: acf.values.list.map((li: any) => {
      return {
        title: li.title,
        text: li.text,
        icon: li.icon ? li.icon.url : '',
        alt: li.icon ? li.icon.alt : '',
      }
    }),
  }
}

export const getThanksPop = (acf: any) => {
  return {
    pop: {
      title: acf.pop.title,
      text: acf.pop.text,
      buttonTitle: acf.pop.buttontitle,
    },
  }
}

export const getFollowLinkedin = (acf: any) => {
  return {
    follow: {
      title: acf.follow_link.title,
      text: acf.follow_link.text,
      textLink: acf.follow_link.link.title,
      link: acf.follow_link.link.url,
      list: acf.follow_link.list.map((l: any) => l.video),
    },
  }
}
export const getInstagramPhotos = async () => {
  const INSTAGRAM_ID = '4678704042',
    THUMBNAIL_WIDTH = 640,
    PHOTO_COUNT = 6
  const response = await fetch(
    `https://www.instagram.com/graphql/query?query_id=17841405971605469&variables={"id":"${INSTAGRAM_ID}","first":${PHOTO_COUNT},"after":null}`,
  ).then((r) => r.json())

  if (response) {
    const { data } = response

    if (!data || data?.message) return []

    const photos = data.user.edge_owner_to_timeline_media.edges.map(
      ({ node }: any) => {
        const { id } = node
        const caption = node.edge_media_to_caption.edges[0].node.text
        const thumbnail = node.thumbnail_resources.find(
          (thumbnail: any) => thumbnail.config_width === THUMBNAIL_WIDTH,
        )
        const { src } = thumbnail
        return {
          id,
          alt: caption,
          img: src,
        }
      },
    )

    return photos || []
  }
}
export const getFollowInstagram = (acf: any) => {
  let imagesFollow: Array<{
    img: string
    alt: string
  }> | null = acf.follow_insta.images.map((im: any) => {
    return {
      img: im.image ? im.image.url : '',
      alt: im.image ? im.image.alt : '',
      link: im.link,
    }
  })

  return {
    follow: {
      title: acf.follow_insta.title,
      text: acf.follow_insta.text,
      link: acf.follow_insta.link.url,
      textLink: acf.follow_insta.link.title,
      images: imagesFollow,
    },
  }
}

export const formatHomePage = async (dt: any) => {
  const { acf } = await themeOptions()
  const r: any = dt.acf
  const images = r.intro.images.map((im: any) => {
    return {
      src: im.image ? im.image.url : '',
      alt: im.image ? im.image.alt : '',
    }
  })

  const products = await getProductsCat()
  const services = await getServiceCat()
  return {
    audio: r.audio.url,
    intro: {
      title: r.intro.title,
      button: r.intro.button,
      images: images,
      mainVideo: {
        video: r.intro.mainVideo_video.url,
        poster: r.intro.mainVideo_poster.url,
      },
      mainImg: r.intro.mainImg ? r.intro.mainImg.url : '',
      mainImgAlt: r.intro.mainImg ? r.intro.mainImg.alt : '',
    },
    block2: r.block2,
    services: services.filter((s: any) => s.slug != 'combo'),
    servicesBtn: r.services.servicesBtn,
    book: {
      title: r.book.title,
      text: r.book.text,
      buttonTitle: r.book.buttonLink.title,
      buttonLink: r.book.buttonLink.url,
    },
    products: {
      title: r.products.title,
      text: r.products.text,
      buttonTitle: r.products.buttonTitle,
      list: products,
    },
    news: r.news,
    ...getFollowInstagram(acf),
  }
}

export const formatHeaderMenu = async (json: any) => {
  const arrays: any = []
  const products = await getProducts()
  const treats = await getServices()

  json.items?.forEach((f: any) => {
    arrays.push({
      title: f.title,
      link: f.url,
      submenu: [],
      isProducts: false,
    })
  })

  json.items?.forEach((f: any, i: number) => {
    const submenu: any = []
    if (f.children) {
      f.children?.forEach((c: any) => {
        const s: any = []

        if (c.children) {
          c.children?.forEach((ch: any) => {
            let link = ch.url
            if (ch.object == 'products') {
              const it = products.find((p: any) => p.slug == ch.object_slug)
              if (it) {
                link = `/products/${it.category}/${it.slug}`
              }
            }
            if (ch.object == 'treatments') {
              const it = treats.find((p: any) => p.slug == ch.object_slug)
              if (it) {
                link = `/treatments/${it.category}/${it.slug}`
              }
            }
            s.push({
              title: ch.title,
              link: link,
            })
          })
        }
        const obj = {
          title: c.title,
          link: c.url,
          img: null,
          alt: '',
          list: s,
          object: c.object,
          object_id: c.object_id,
          isProducts: false,
        }

        submenu.push(obj)
      })
    }

    arrays[i].submenu = submenu
  })

  for (let i = 0; i < arrays.length; i++) {
    const a = arrays[i]
    if (a.submenu.length) {
      for (let j = 0; j < a.submenu.length; j++) {
        let b = a.submenu[j]
        if (b.object == 'cat-treatments' || b.object == 'cat-products') {
          const res = await getContentByPage(b.object, b.object_id)
          b.img = res.acf.menu_image.url || ''
          b.alt = res.acf.menu_image.alt || ''
          a.isProducts = true
        } else {
          const res = await getContentByPage('pages', b.object_id)
          const media = await getMediaById(res.featured_media)
          b.img = media.source_url || ''
          b.alt = media.alt_text || ''
          b.list = null
        }
        delete b.object_id
        delete b.object
      }
    }
  }
  return arrays
}

export const formatGeneralTretments = async (dt: any) => {
  const services = await getServiceCat()

  return {
    title: dt.title.rendered,
    text: dt.acf.text,
    servicesBtn: dt.acf.servicesBtn,
    services: services.filter((s: any) => s.slug != 'combo'),
    book: {
      title: dt.acf.book.title,
      text: dt.acf.book.text,
      buttonTitle: dt.acf.book.button.title,
      buttonLink: dt.acf.book.button.url,
    },
    banner: {
      title: dt.acf.banner.title,
      text: dt.acf.banner.text,
      buttonText: dt.acf.banner.button.title,
      title_color: dt.acf.banner.title_color,
      text_color: dt.acf.banner.text_color,
      img: dt.acf.banner?.img.url || '',
      link: dt.acf.banner?.button.url,
      alt: dt.acf.banner?.img.alt || '',
    },
    faq: {
      title: dt.acf.faq.title,
      buttonTitle: dt.acf.faq.button.title,
      link: dt.acf.faq.button.url,
      list: dt.acf.faq.list,
    },
  }
}

export const formatTreatCat = async (dt: any) => {
  const servicesCat = await getServiceCat()
  const { acf } = await themeOptions()
  const content = servicesCat.find((s: any) => s.slug == dt.slug)
  let sl3: any = [],
    selectTitle = '',
    params: any = []
  params = ['time', 'locations']
  if (content.body && content.body.length) {
    selectTitle = 'Body part'
    sl3 = content.body
    params.push('bodyPart')
  }
  if (content.type && content.type.length) {
    selectTitle = 'Type'
    sl3 = content.type
    params.push('serviceType')
  }

  const services = await getServices()
  const locs: any = []
  services.forEach((s: any) => {
    if (s.category == dt.slug) {
      locs.push(...s.locations)
    }
  })

  const uniqLocs = Array.from(new Set(locs))
  return {
    title: content.title,
    text: content.text,
    select1Title: 'Duration',
    select2Title: 'Location',
    select3Title: selectTitle,
    categories: servicesCat,
    select1: ['15-30 MIN', '30-60 MIN', 'More than 60 MIN'],
    select2: uniqLocs,
    select3: sl3,
    paramsForFilter: params,
    banner: {
      title: acf.treatments_banner.title,
      buttonText: acf.treatments_banner.Button.title,
      link: acf.treatments_banner.Button.url,
      img: acf.treatments_banner.image.url,
      alt: acf.treatments_banner.image.alt,
      title_color: acf.treatments_banner.title_color,
    },
  }
}

export const servicesFormat = async (dt: any) => {
  const services: any = []
  const categories = await getServiceCat()
  const allTypes = await getServiceType()
  const allBody = await getServiceBodyType()
  for (let i = 0; i < dt.length; i++) {
    const item = dt[i]
    const category = categories.find(
      (c: any) => c.id == item['cat-treatments'][0],
    )

    const locations = item.acf.locations.map((lo: any) => lo.post_title)
    const times =
      typeof item.acf?.price == 'boolean'
        ? []
        : item.acf?.price?.map((p: any) => p.time)

    let prices: any = []
    if (!['nail-care', 'beauty'].includes(category.slug)) {
      prices = await getPrices(item)
    } else prices = await getPricesServices(item)

    const types: any = []

    item['type-treatments']?.forEach((t: any) => {
      const ty = allTypes.find((l: any) => l.id == t)
      if (ty) {
        types.push(ty.name)
      }
    })
    const body: any = []

    item['body-treatments']?.forEach((t: any) => {
      const ty = allBody.find((l: any) => l.id == t)
      if (ty) {
        body.push(ty.name)
      }
    })

    services.push({
      id: item.id,
      title: item.title.rendered,
      category: category.slug,
      slug: item.slug,
      link: `/${item.type}/${category.slug}/${item.slug}`,
      time: times,
      locations: locations,
      text: item.content.rendered,
      img: item.acf.img.url,
      alt: item.acf.img.alt,
      bodyPart: body || [],
      serviceType: types || [],
      prices: prices,
    })
  }

  return services
}

export const formatSingleService = async (dt: any) => {
  const categories = await getServiceCat()
  const services = await getServices()
  const { acf } = await themeOptions()
  const category = categories.find((c: any) => c.id == dt['cat-treatments'][0])

  let prices: any = []
  if (category.slug != 'nail-care' && category.slug != 'beauty') {
    prices = await getPrices(dt)
  } else prices = await getPricesServices(dt)

  const cards: any = []

  if (dt.acf.single.similar) {
    dt.acf.single.similar?.forEach((c: any) => {
      const s = services.find((si: any) => si.id == c.ID)

      if (s) {
        cards.push(s)
      }
    })
  }

  return {
    id: dt.id,
    section: category.slug,
    img: dt.acf.single?.mainImg.url || '',
    alt: dt.acf.single?.mainImg.alt || '',

    title: dt.title.rendered,
    text: dt.acf.single?.text || '',
    bookText: acf.single_treatments.booktext,
    changeLocationText: acf.single_treatments.changelocationtext,
    price: prices,
    banner: {
      title: acf.treatments_banner.title,
      buttonText: acf.treatments_banner.Button.title,
      link: acf.treatments_banner.Button.url,
      img: acf.treatments_banner.image.url,
      alt: acf.treatments_banner.image.alt,
      title_color: acf.treatments_banner.title_color,
    },
    benefits: {
      title: dt.acf.single?.benefits?.title || '',
      list:
        typeof dt.acf.single?.benefits?.list == 'boolean'
          ? []
          : dt.acf.single?.benefits?.list?.map((l: any) => {
              return {
                title: l.title,
                text: l.text,
                src: l.img.url,
                alt: l.img.alt,
              }
            }) || [],
    },
    similiar: {
      title: acf.single_treatments.similiar.title,
      text: acf.single_treatments.similiar.text,
      buttonTitle: acf.single_treatments.similiar.button.title,
      buttonLink: acf.single_treatments.similiar.button.url,
      cards: cards,
    },
  }
}

export const formatProductCat = async (dt: any) => {
  const cats: any = []

  dt.forEach((d: any) => {
    cats.push({
      id: d.id,
      link: `/products/${d.slug}`,
      title: d.name,
      img: d.acf.img ? d.acf.img.url : '',
      slug: d.slug,
      text: d.description,
      alt: d.acf.img ? d.acf.img.alt : '',
    })
  })

  return cats
}

export const formatProductItem = async (dt: any) => {
  const categories = await getProductsCat()
  const colors = await getProductsColors()
  const bodyParts = await getProductsBodyPart()
  const concerns = await getProductsConcern()
  const types = await getProductsType()

  const result: any = []
  for (let i = 0; i < dt.length; i++) {
    const item = dt[i]
    const cat = categories.find((c: any) => c.id == item['cat-products'][0])
      ?.slug
    const cls: any = []
    item['color-products']?.forEach((c: any) => {
      const color = colors.find((ci: any) => ci.id == c)
      cls.push(color?.name || '')
    })

    const bpart: any = []
    item['bodypart-products']?.forEach((c: any) => {
      const color = bodyParts.find((ci: any) => ci.id == c)
      bpart.push(color?.name || '')
    })

    const concern: any = []
    item['concern-products']?.forEach((c: any) => {
      const color = concerns.find((ci: any) => ci.id == c)
      concern.push(color?.name)
    })

    let type: any = ''
    item['type-products']?.forEach((c: any) => {
      const color = types.find((ci: any) => ci.id == c)
      type = color?.name
    })

    result.push({
      id: item.id,
      category: cat,
      slug: item.slug,
      title: item.title.rendered,
      text: item.content.rendered,
      link: `/products/${cat}/${item.slug}`,
      img: item.acf.img?.url || '',
      alt: item.acf.img?.alt || '',
      date: item.date,
      color: cls,
      bodyPart: bpart,
      concern: concern,
      type: type,
      isNew: item.acf.isNew,
      isBestSeller: item.acf.isBestseller,
    })
  }

  return result
}

export const formatProductCatPage = async (dt: any) => {
  const { acf } = await themeOptions()
  const cats = await getProductsCat()
  const colors = await getProductsColors()
  const concern = await getProductsConcern()
  const bodyTypes = await getProductsBodyPart()
  const types = await getProductsType()
  const content = cats.find((c: any) => c.slug == dt.slug)
  const params: any = ['isNew', '', '']
  let sel2: any = [],
    sel2Title = '',
    sel3Title = '',
    sel3: any = []

  if (dt.acf.color) {
    sel2 = []
    dt.acf.color?.forEach((c: any) => {
      const color = colors.find((ci: any) => ci.id == c)
      if (color) {
        sel2.push(color.name)
      }
    })

    sel2Title = 'Color'
    params[1] = 'color'
  }
  if (dt.acf.bodyPart) {
    sel2 = []
    sel2Title = 'Body part'
    dt.acf.bodyPart?.forEach((c: any) => {
      const color = bodyTypes.find((ci: any) => ci.id == c)
      if (color) {
        sel2.push(color.name)
      }
    })
    params[1] = 'bodyPart'
  }
  if (dt.acf.concern) {
    sel2Title = 'Concern'
    sel2 = concern.map((c: any) => c.name)
    params[1] = 'concern'
  }
  if (dt.acf.type) {
    sel3Title = 'Type'
    sel3 = []

    dt.acf.type?.forEach((c: any) => {
      const color = types.find((ci: any) => ci.id == c)
      if (color) {
        sel3.push(color.name)
      }
    })
    params[2] = 'type'
  }

  return {
    title: dt.name,
    text: content.text,
    categories: cats,
    select1Title: 'Sort by',
    select1: ['Best seller', 'New'],
    select2Title: sel2Title,
    select2: sel2,
    select3Title: sel3Title,
    select3: sel3,
    buttonText: acf.product_button_title,
    banner: {
      title: dt.acf.banner.title,
      text: dt.acf.banner.text,
      link: dt.acf.banner.button.url,
      buttonText: dt.acf.banner.button.title,
      img: dt.acf.banner.image.url,
      alt: dt.acf.banner.image.alt,
      title_color: dt.acf.banner.title_color,
      text_color: dt.acf.banner.text_color,
    },
    paramsForFilter: params,
  }
}

export const formatProductsPage = async (dt: any) => {
  const cats = await getProductsCat()
  const products = await getProducts()
  const { acf } = await themeOptions()

  const prod: any = []

  for (let i = 0; i < dt.acf.explore.list?.length; i++) {
    const p = dt.acf.explore.list[i]
    const s = products.find((pi: any) => pi.id == p.ID)
    if (s) {
      prod.push(s)
    }
  }

  return {
    title: dt.title.rendered,
    text: dt.acf.text,
    buttonTitle: dt.acf.products_button,
    list: cats,
    banner: {
      title: acf.products_banner.title,
      text: acf.products_banner.text,
      buttonText: acf.products_banner.button.title,
      img: acf.products_banner.image.url,
      alt: acf.products_banner.image.alt,
      link: acf.products_banner.button.url,
      title_color: acf.products_banner.title_color,
      text_color: acf.products_banner.text_color,
    },
    explore: {
      title: dt.acf.explore.title,
      buttonText: dt.acf.explore.button_text,
      list: prod,
    },
  }
}

export const formatProductPage = async (dt: any) => {
  const { acf } = await themeOptions()
  const products = await getProducts()
  const colors = await getProductsColors()
  const cls: any = []

  const locations = await getLocations()
  dt['color-products']?.forEach((c: any) => {
    const color = colors.find((co: any) => co.id == c)
    cls.push({
      title: color.name,
      bg: color.acf.cod_color,
    })
  })

  let gallery: any = [],
    benefitsArr: any = []

  dt?.acf?.gallery.forEach((f: any) => {
    const imgList = f['img-list'].filter((l: any) => l.image)
    const sub = imgList?.map((l: any) => {
      return {
        src: l.image.url,
        alt: l.image.alt || '',
      }
    })

    gallery.push({
      color: f.color.name,
      images: sub,
    })
  })

  dt.acf.benefits?.list?.forEach((l: any) => {
    benefitsArr.push({
      title: l.title,
      text: l.text,
      src: l.src.url,
      alt: l.src.alt,
    })
  })

  let benefits: any = {
    title: dt.acf.benefits.title,
    list: benefitsArr,
  }

  const cards: any = []

  if (dt.acf.similar) {
    dt.acf.similar?.forEach((s: any) => {
      const re = products?.find((pr: any) => pr.id == s.ID)
      if (re) {
        cards.push(re)
      }
    })
  }

  return {
    title: dt.title.rendered,
    text: dt.content.rendered,
    buttonTitle1: acf.single_products.amazon_button,
    buttonLink1: dt.acf.amazon_link || '#',
    buttonTitle2: acf.single_products.find_button,
    colors: cls,
    characteristicsList:
      typeof dt.acf.product_characteristics.section == 'boolean'
        ? []
        : dt.acf.product_characteristics.section,
    gallery: gallery,
    video: dt.acf.video || '',
    benefits: benefits,
    banner: {
      title: acf.products_banner.title,
      text: acf.products_banner.text,
      buttonText: acf.products_banner.button.title,
      img: acf.products_banner.image.url,
      link: acf.products_banner.button.url,
      alt: acf.products_banner.image.alt,
      title_color: acf.products_banner.title_color,
      text_color: acf.products_banner.text_color,
    },
    similiar: {
      title: acf.single_products.similiar.title,
      text: acf.single_products.similiar.text,
      buttonTitle: acf.single_products.similiar.button.title,
      cardButton: acf.product_button_title,
      buttonLink: acf.single_products.similiar.button.url,
      cards: cards,
    },
    pop: {
      title: acf['retailer_pop-up'].title,
      tooltip: acf['retailer_pop-up'].tooltip,
      placeholder: acf['retailer_pop-up'].placeholder,
      locations: locations,
    },
  }
}

export const formatorStoryPage = async (dt: any) => {
  const { acf } = await themeOptions()

  return {
    title: dt.title.rendered,
    text: dt.acf.text,
    img: dt.acf.image.url,
    alt: dt.acf.image.alt,
    values: getValues(acf),
    roadmap: {
      title: dt.acf.roadmap.title,
      list: dt.acf.roadmap.list.map((li: any) => {
        return {
          year: li.year,
          title: li.title,
          text: li.text,
          img: li.img.url,
          alt: li.img.alt,
        }
      }),
    },
    storyblocks: dt.acf.storyblocks.map((st: any) => {
      return {
        title: st.title,
        subtitle: st.subtitle,
        buttonTitle: st.button.title,
        link: st.button.url,
        alt: st.image.alt,
        img: st.image.url,
        color: st.text_color,
      }
    }),
    ...getFollowInstagram(acf),
  }
}

export const formatorAcademyPage = async (dt: any) => {
  return {
    title: dt.title.rendered,
    text: dt.acf.text,
    img: dt.acf.img?.url || '',
    alt: dt.acf.img?.alt || '',
    coursesTitle: dt.acf.coursestitle,
    courses: dt.acf.courses.map((c: any) => {
      return {
        title: c.title,
        text: c.text,
        img: c.img.url,
        alt: c.img.alt,
        list: [],
      }
    }),
    banner: {
      title: dt.acf.banner.title,
      text: dt.acf.banner.text,
      buttonText: dt.acf.banner.button.title,
      img: dt.acf.banner.img.url,
      alt: dt.acf.banner.img.alt,
      link: dt.acf.banner.button.url,
      title_color: dt.acf.banner.title_color,
      text_color: dt.acf.banner.text_color,
    },
    stories: {
      title: dt.acf.stories.title,
      buttonTitle: dt.acf.stories.buttonTitle,
      list: dt.acf.stories.list?.map((s: any) => {
        return {
          title: s.title,
          video: s.video,
          text: s.text,
          link: s.link.url,
        }
      }),
    },
  }
}

export const formatorPartnersPage = async (dt: any) => {
  const { acf } = await themeOptions()

  return {
    title: dt.title.rendered,
    text: dt.acf.text,
    linkText: dt.acf.linktext,
    list:
      acf.partner_list?.map((ac: any) => {
        return {
          title: ac.title,
          text: ac.text,
          src: ac.src.url,
          alt: ac.src.alt,
          link: ac.link,
        }
      }) || [],

    form: {
      title: dt.acf.form.title,
      text: dt.acf.form.text,
      fnamePlaceholder: dt.acf.form.fnameplaceholder,
      lnamePlaceholder: dt.acf.form.lnamePlaceholder,
      emailPlaceholder: dt.acf.form.emailplaceholder,
      phoneNumberPlaceholder: dt.acf.form.phoneNumberPlaceholder,
      companyPlaceholder: dt.acf.form.companyplaceholder,
      msgPlaceholder: dt.acf.form.msgplaceholder,
      buttonTitle: dt.acf.form.buttontitle,
      upload: dt.acf.form.upload,
      phoneCodes: getPhoneCodes(acf),
    },
    ...getThanksPop(acf),
    ...getFollowLinkedin(acf),
  }
}

export const formatorPageAirRepresenter = async (dt: any) => {
  const { acf } = await themeOptions()
  return {
    title: dt.title.rendered,
    text: dt.acf.text,
    img: dt.acf.img.url,
    alt: dt.acf.img.alt,
    values: {
      title: dt.acf?.company_values.title,
      list: dt.acf.company_values.list.map((li: any) => {
        return {
          title: li.title,
          text: li.text,
          icon: li.icon ? li.icon.url : '',
          alt: li.icon ? li.icon.alt : '',
        }
      }),
    },
    form: {
      title: dt.acf.form.title,
      text: dt.acf.form.text,
      fnamePlaceholder: dt.acf.form.fnamePlaceholder,
      lnamePlaceholder: dt.acf.form.lnamePlaceholder,
      emailPlaceholder: dt.acf.form.emailPlaceholder,
      phoneNumberPlaceholder: dt.acf.form.phoneNumberPlaceholder,
      companyPlaceholder: dt.acf.form.companyPlaceholder,
      msgPlaceholder: dt.acf.form.msgPlaceholder,
      buttonTitle: dt.acf.form.buttonTitle,
      upload: dt.acf.form.upload,
      phoneCodes: getPhoneCodes(acf),
    },
    ...getThanksPop(acf),
  }
}

export const formatorContactPage = async (dt: any) => {
  const { acf } = await themeOptions()

  return {
    title: dt.title.rendered,
    text: dt.acf.text,
    formTitle: dt.acf.formtitle,
    fnamePlaceholder: dt.acf.fnamePlaceholder,
    lnamePlaceholder: dt.acf.lnamePlaceholder,
    emailPlaceholder: dt.acf.emailPlaceholder,
    subjectPlaceholder: dt.acf.subjectPlaceholder,
    locatePlaceholder: dt.acf.locatePlaceholder,
    msgPlaceholder: dt.acf.msgPlaceholder,
    buttonTitle: dt.acf.buttonTitle,
    subjectSelect: dt.acf.subjectSelect.map((li: any) => li.subject),
    uploadReciept: dt.acf.uploadReciept,
    attachPhoto: dt.acf.attachPhoto,
    ...getThanksPop(acf),
  }
}

export const formatorFaqPage = async (dt: any) => {
  return {
    title: dt.title.rendered,
    text: dt.acf.text,
    list: dt.acf.list,
  }
}

export const formatorGetNews = async (dt: any) => {
  const res: any = []
  const categories = await getPostCategories()

  for (let i = 0; i < dt.length; i++) {
    const l = dt[i]
    let img = {
      media_details: {
        sizes: {
          full: {
            source_url: '',
          },
        },
      },
      alt_text: '',
    }
    if (l['featured_media']) {
      img = await getMediaById(l['featured_media'])
    }
    const cat = categories.find((c: any) => c.id == l.categories[0])
    let text = `${l.title.rendered} ${l.text} ${l.content.rendered}`
    const stats = readingTime(text)
    let time = Math.round(stats.minutes)

    res.push({
      id: l.id,
      title: l.title.rendered,
      content: l.content.rendered,
      datetime: l.date,
      link: `/news/${l.slug}`,
      slug: l.slug,
      text: l.acf.text,
      author: l.acf.author,
      views: l.acf.views,
      cat: cat?.name || '',
      isNew: false,
      img: img?.media_details?.sizes?.full?.source_url || '',
      alt: img ? img?.alt_text : '',
      readTime: time,
    })
  }

  return res
}

export const formatorNewsPage = async (dt: any) => {
  const news = await getNews()
  const cats = await getPostCategories()
  let timeReads: any = []

  news.forEach((n: any) => {
    timeReads.push(n.readTime)
  })

  timeReads = Array.from(new Set(timeReads))
  timeReads = timeReads.map((t: any) => t + ' mins')

  let res: any = []
  res = news.sort((a: any, b: any) => b.views - a.views)

  return {
    title: dt.title?.rendered,
    text: dt.content?.rendered,
    top: {
      title: dt.acf.topTitle,
      list: res.slice(0, 3),
    },
    select1: ['Newest First', 'Popular First'],
    select2: ['All Topics', ...cats.map((c: any) => c.name)],
    select3: ['All Durations', ...timeReads],
    loadButton: dt.acf.loadbutton,
  }
}

export const getRelatedPosts = async (dt: any) => {
  if (!dt) return []
  return dt.map((d: any) => d.ID)
}

export const formatorSingleNewsPost = async (dt: any) => {
  const { post, cont } = dt
  const { acf } = await themeOptions()
  const news = await getNews()
  const cards = await getRelatedPosts(cont.acf.related_posts)
  return {
    ...post,
    img: cont?.acf?.main_image ? cont?.acf?.main_image?.url : '',
    alt: cont?.acf?.main_image ? cont?.acf?.main_image?.alt : '',
    share: acf.post.share,
    written: acf.post.written,
    publish: acf.post.publish,
    socials: acf.post.socials.map((s: any) => {
      return {
        icon: s.icon.url,
        alt: s.icon.alt,
        link: s.link,
      }
    }),
    banner: {
      title: acf.post.banner.title,
      text: acf.post.banner.text,
      buttonText: acf.post.banner.button.title,
      img: acf.post.banner.img.url,
      alt: acf.post.banner.img.alt,
      link: acf.post.banner.button.url,
      title_color: acf.post.banner.title_color,
      text_color: acf.post.banner.text_color,
    },
    similiar: {
      title: acf.post.similiar.title,
      text: acf.post.similiar.text,
      buttonTitle: acf.post.similiar.button.title,
      buttonLink: acf.post.similiar.button.url,
      cards: news.filter((c: any) => cards.includes(c.id)).slice(0, 4) || [],
    },
  }
}

export const formatorCareersPage = async (dt: any) => {
  const { acf } = await themeOptions()
  const types = await getCareersTypes()

  return {
    title: dt.title.rendered,
    text: dt.acf.text,
    blocks: dt.acf.blocks.map((bl: any) => {
      return {
        title: bl.title,
        text: bl.text,
        img: bl.img.url,
        alt: bl.img.alt,
      }
    }),
    offers: {
      title: dt.acf.offers.title,
      select2Placeholder: dt.acf.offers.select2placeholder,
      select1Placeholder: 'Profession Type',
      select1: [...types.map((t: any) => t.name)],
    },
    form: {
      title: dt.acf.form.title,
      text: dt.acf.form.text,
      fnamePlaceholder: dt.acf.form.fnameplaceholder,
      lnamePlaceholder: dt.acf.form.lnamePlaceholder,
      emailPlaceholder: dt.acf.form.emailPlaceholder,
      cityPlaceHolder: dt.acf.form.cityPlaceHolder,
      countryPlaceHolder: dt.acf.form.countryplaceholder,
      phoneNumberPlaceholder: dt.acf.form.phonenumberplaceholder,
      profPlaceholder: dt.acf.form.profplaceholder,
      profSelect: [
        'Massage Therapist',
        'Cosmetologist',
        'Nail technician',
        'Headquarter',
        'Other',
      ],
      locatePlaceholder: dt.acf.form.locatePlaceholder,
      msgPlaceholder: dt.acf.form.msgplaceholder,
      buttonTitle: dt.acf.form.buttontitle,
      uploadResume: dt.acf.form.uploadresume,
      coverLetter: dt.acf.form.coverletter,
      phoneCodes: getPhoneCodes(acf),
    },
    ...getFollowLinkedin(acf),
    ...getThanksPop(acf),
  }
}

export const formatorVacancies = async (dt: any) => {
  const res: any = []
  const cats = await getCareersTypes()

  for (let i = 0; i < dt.length; i++) {
    const d = dt[i]
    const cat = cats.find((c: any) => c.id == d['type-careers'][0])
    const media = await getMediaById(d['featured_media'])
    res.push({
      id: d.id,
      img: media.guid.rendered,
      alt: media.alt_text,
      title: d.title.rendered,
      text: d.acf.text,
      type: cat.name,
      slug: d.slug,
      link: `/careers/${d.slug}`,
      datetime: d.date,
      location: d.acf.location || [],
      typeContract: d.acf.typecontract,
    })
  }
  return res
}

export const formatorVacancyPost = async (dt: any) => {
  const { acf } = await themeOptions()
  const { post, content } = dt
  return {
    ...post,
    dateTimeText: content.acf.datetimetext,
    buttonTitle: content.acf.buttontitle,
    form: {
      title: content.acf.form.title,
      text: content.acf.form.text,
      fnamePlaceholder: content.acf.form.fnamePlaceholder,
      lnamePlaceholder: content.acf.form.lnamePlaceholder,
      emailPlaceholder: content.acf.form.emailplaceholder,
      phoneNumberPlaceholder: content.acf.form.phonenumberplaceholder,
      cityPlaceHolder: content.acf.form.cityplaceholder,
      countryPlaceHolder: content.acf.form.countryplaceholder,
      msgPlaceholder: content.acf.form.msgplaceholder,
      buttonTitle: content.acf.form.buttonTitle,
      uploadResume: content.acf.form.uploadresume,
      coverLetter: content.acf.form.coverletter,
      phoneCodes: getPhoneCodes(acf),
    },
    content: content.acf.list,
    ...getThanksPop(acf),
  }
}

export const formatorCountryPOP = async (acf: any) => {
  const { countryPop } = acf
  const countries = await getCountries()
  return {
    title: countryPop.title,
    text: countryPop.text,
    buttonTitle: countryPop.buttontitle,
    subTitle: countryPop.subtitle,
    subText: countryPop.subtext,
    img: countryPop.img.url,
    alt: countryPop.img.alt,
    list: countries
      ?.map((c: any) => {
        return {
          title: c.title.rendered,
          code: '',
        }
      })
      .sort((a: any, b: any) => a.title.localeCompare(b.title)),
  }
}

export const formatorFooter = async (res: any, acf: any) => {
  const { footer } = acf

  const last = [
    {
      title: footer.last.title,
      link: footer.last.button.url,
      buttonTitle: footer.last.button.title,
    },
    {
      title: footer.last_job.title,
      link: footer.last_job.button.url,
      buttonTitle: footer.last_job.button.title,
    },
    {
      title: footer.last_our_stories.title,
      link: footer.last_our_stories.button.url,
      buttonTitle: footer.last_our_stories.button.title,
    },
    {
      title: footer.last_wellness.title,
      link: footer.last_wellness.button.url,
      buttonTitle: footer.last_wellness.button.title,
    },
    {
      title: footer.last_products.title,
      link: footer.last_products.button.url,
      buttonTitle: footer.last_products.button.title,
    },
  ]

  return {
    title: footer.title,
    placeholder: footer.placeholder,
    copyText: footer.copytext,
    socials: footer.socials.map((s: any) => {
      return {
        icon: s.icon.url,
        alt: s.icon.alt,
        link: s.link,
      }
    }),
    docs: footer.docs.map((d: any) => {
      return {
        title: d.doc.title,
        link: d.doc.url,
      }
    }),
    last: last || [],
    cols: res.items?.map((r: any) => {
      return {
        title: r.title,
        list: r.children?.map((ci: any) => {
          return {
            title: ci.title,
            link: ci.url,
          }
        }),
      }
    }),
    cookie: {
      title: footer.cookie.title,
      text: footer.cookie.text,
      acceptTitle: footer.cookie.accepttitle,
      acceptNotAll: footer.cookie.acceptnotall,
    },
  }
}

export const formatorBooking = async (dt: any) => {
  const { acf } = await themeOptions()
  const treats = await getServices()

  return {
    tabs: dt.acf.tabs,
    block1: {
      title: dt.acf.block1.title,
      text: dt.acf.block1.text,
      buttonTitle: dt.acf.block1.buttontitle,
    },
    backTitle: dt.acf.backtitle,
    bookDetails: {
      title: dt.acf.bookdetails.title,
      locateTitle: dt.acf.bookdetails.locatetitle,
      treatTitle: dt.acf.bookdetails.treattitle,
      duratTitle: dt.acf.bookdetails.durattitle,
      dateTitle: dt.acf.bookdetails.datetitle,
      startTitle: dt.acf.bookdetails.starttitle,
      fname: dt.acf.bookdetails.fname,
      lname: dt.acf.bookdetails.lname,
      phone: dt.acf.bookdetails.phone,
      email: dt.acf.bookdetails.email,
    },
    popDurationTitle: dt.acf.popdurationtitle,
    popCalendarText: '', // dt.acf.popcalendartext,
    block3: {
      title: dt.acf.block3.title,
      text: dt.acf.block3.text,
      datePlaceholder: dt.acf.block3.dateplaceholder,
      timePlaceholder: dt.acf.block3.timeplaceholder,
      buttonTitle: dt.acf.block3.buttontitle,
      time: [],
    },
    block4: {
      buttonTitle: dt.acf.block4.buttontitle,
      title: dt.acf.block4.title,
      text: dt.acf.block4.text,
      fnamePlaceholder: dt.acf.block4.fnameplaceholder,
      lnamePlaceholder: dt.acf.block4.lnameplaceholder,
      emailPlaceholder: dt.acf.block4.emailplaceholder,
      phonePlaceholder: dt.acf.block4.phoneplaceholder,
      addInfoPlaceholder: dt.acf.block4.addinfoplaceholder,
      onecheck: dt.acf.block4.onecheck,
      secondcheck: dt.acf.block4.secondcheck,
    },
    result: {
      title: dt.acf.result.title,
      text: dt.acf.result.text,
      buttonTitle: dt.acf.result.buttontitle,
    },
    block2: {
      title: dt.acf.block2.title,
      text: dt.acf.block2.text,
      cards: treats,
    },
    phoneCodes: getPhoneCodes(acf),
  }
}

export const formatorProductReg = async (dt: any) => {
  const { acf } = await themeOptions()
  const cats = await getProducts()
  return {
    title: dt.title.rendered,
    text: dt.content.rendered,
    formTitle: dt.acf.formTitle,
    fnamePlaceholder: dt.acf.fnameplaceholder,
    lnamePlaceholder: dt.acf.lnameplaceholder,
    productPlaceholder: dt.acf.productplaceholder,
    datePlaceholder: dt.acf.dateplformtitleaceholder,
    serialPlaceholder: dt.acf.serialplaceholder,
    products: cats,
    fileText: dt.acf.filetext,
    buttonTitle: dt.acf.buttontitle,
    checkOne: dt.acf.checkone,
    checkTwo: dt.acf.checktwo,
    serialTool: dt.acf.serial_tooltip,
    ...getThanksPop(acf),
  }
}

export const formatorRetailerPage = async (dt: any) => {
  const { acf } = await themeOptions()
  const locations = await getLocations()

  return {
    title: dt.title.rendered,
    text: dt.content.rendered,
    tooltip: acf['retailer_pop-up'].tooltip,
    placeholder: acf['retailer_pop-up'].placeholder,
    locations: locations,
  }
}

export const formatorFindUs = async (dt: any) => {
  return {
    title: dt.title.rendered,
    text: dt.content.rendered,
    selectPlaceholder: dt.acf.selectPlaceholder,
    cardBookBtn: dt.acf.cardBookBtn,
    cardDetails: dt.acf.cardDetails,
    tabs: ['List View', 'Map View'],
  }
}

export const formatorLocation = async (dt: any) => {
  let locates = await getLocations()
  const { acf } = await themeOptions()
  const reviews = acf?.location?.reviews_list
  const partnersList = dt.acf.partners ? dt.acf.partners : []
  const services = await getServices()
  const cats = await getServiceCat()
  const contacts: any = [],
    servs: any = []
  let nears: any = []

  if (dt.acf.contacts.phone) {
    contacts.push({
      icon: acf.location.find.phone_icon.url,
      alt: acf.location.find.phone_icon.alt,
      isLink: true,
      isPhone: true,
      isEmail: false,
      text: dt.acf.contacts.phone,
    })
  }
  if (dt.acf.contacts.email) {
    contacts.push({
      icon: acf.location.find.email_icon.url,
      alt: acf.location.find.email_icon.alt,
      isLink: true,
      isPhone: false,
      isEmail: true,
      text: dt.acf.contacts.email,
    })
  }
  if (dt.acf.contacts.schedule) {
    contacts.push({
      icon: acf.location.find.schedule_icon.url,
      alt: acf.location.find.schedule_icon.alt,
      isLink: false,
      isPhone: false,
      isEmail: false,
      text: dt.acf.contacts.schedule,
    })
  }
  if (dt.acf.contacts.location) {
    contacts.push({
      icon: acf.location.find.location_icon.url,
      alt: acf.location.find.location_icon.alt,
      isLink: false,
      isPhone: false,
      isEmail: false,
      text: dt.acf.contacts.location,
    })
  }

  cats.forEach((ci: any) => {
    let arr: any = []
    dt.acf.treatments.forEach((c: any) => {
      const sv = services.find((s: any) => s.id == c.ID)
      if (sv && sv?.category == ci.slug) {
        arr.push(sv)
      }
    })
    if (arr.length) {
      servs.push({
        title: ci.title,
        img: ci.img,
        alt: ci.alt,
        link: ci.link,
        list: arr,
      })
    }
  })

  if (dt.acf.nearby) {
    const ids = dt.acf.nearby?.map((c: any) => c.ID)
    ids?.forEach((id: any) => {
      const item = locates.find((l: any) => l.id == id)
      if (item) {
        nears.push(item)
      }
    })
  }

  let reviewsList: any = []

  reviews?.forEach((r: any) => {
    const currentLoc = r.location.find((l: any) => l.ID == dt.id)
    if (currentLoc) {
      reviewsList = r.review.map((m: any) => {
        m.authorName = m.author_review
        m.text = m.review_text
        m.image = m.review_image ? m.review_image.url : ''
        m.alt = m.review_image ? m.review_image.alt : ''
        return m
      })
      return
    }
  })

  return {
    id: dt.id,
    title: dt.acf.title,
    text: dt.acf.text,
    buttonTitle: acf.location.buttonTitle,
    img: dt.acf.image.url,
    alt: dt.acf.image.alt,
    link: `/find-us/${dt.slug}`,
    slug: dt.slug,
    find: {
      title: acf.location.find.title,
      text: dt.acf.find_text || '',
      buttonLink: dt.acf.direction_link,
      buttonTitle: acf.location.find.buttonTitle,
      contacts: contacts,
    },
    treatmentsTitle: acf.location.treatments.title,
    treatmentsButton: acf.location.treatments.text,
    treatments: servs,
    partnersTitle: acf.location.partners.title,
    partnersText: acf.location.partners.text,
    partners:
      partnersList?.map((c: any) => {
        return {
          src: c.image ? c.image.url : '',
          alt: c.image ? c.image.alt : '',
          link: c.link,
        }
      }) || [],
    banner: {
      title: acf.location.banner.title,
      buttonText: acf.location.banner.button.title,
      img: acf.location.banner.img.url,
      alt: acf.location.banner.img.alt,
      link: acf.location.banner.button.url,
      title_color: acf.location.banner.title_color,
    },
    reviewsTitle: acf.location.reviews_title,
    reviews: reviewsList,
    nearTitle: acf.location.near.title,
    nearButton: acf.location.near.nearButton,
    nearSpas: nears?.slice(0, 2) || [],
  }
}

export const formatorLocations = async (dt: any) => {
  const countries = await getCountries()
  const airports = await getLocationsCategories()
  const sub: any = []

  for (let k = 0; k < dt.length; k++) {
    let l = dt[k]
    const country = countries.find((c: any) => c.id == l.acf.country[0]?.ID)
    let time: any = []
    if (
      l.acf.contacts.schedule?.includes('24/7') ||
      l.acf.contacts.schedule?.includes('24/24')
    ) {
      for (let i = 0; i <= 24; i++) {
        time.push(`${i >= 10 ? i : '0' + i}:00`)
      }
    } else {
      const vals = l.acf.contacts.schedule
        .replaceAll('7/7', '')
        .replaceAll('24/7', '')
        .replaceAll('24/24', '')
        .replace(/[^0-9]/g, ' ')
        .trim()
        .split(' ')
        .filter((ci: any) => ci.length && ci != '00')
      if (vals.length) {
        for (let i = +vals[0]; i < 12; i++) {
          time.push(`${i >= 10 ? i : '0' + i}:00`)
          time.push(`${i >= 10 ? i : '0' + i}:30`)
        }
        for (let i = 12; i <= +vals[1] + 12; i++) {
          time.push(`${i >= 10 ? i : '0' + i}:00`)
          if (i != +vals[1] + 12) {
            time.push(`${i >= 10 ? i : '0' + i}:30`)
          }
        }
      }
    }

    const media = await getMediaById(+l.featured_media)
    const img = {
      alt: '',
      img: '',
    }
    img.img = media.source_url || ''
    img.alt = media.alt_text || ''

    const catSky = airports.find((a: any) => a.id == l['cat-sky'][0])
    sub.push({
      id: l.id,
      fullName: l.title.rendered,
      continent: country?.acf?.continent,
      title: l.acf.title,
      shortTitle: l.acf.short_title,
      text: l.acf.text,
      link: `/find-us/${catSky?.slug || ''}/${l.slug}`,
      slug: l.slug,
      country: country?.title?.rendered || '',
      locations: l.acf.location,
      ...img,
      cat: l['cat-location']?.length ? l['cat-location'][0] : 32,
      skyCat: catSky,
      time: time,
    })
  }

  return sub
}

export const formatorSortLocations = async (dt: any) => {
  const res: any = []
  const array = dt.filter((c: any) => c.cat == 32)
  const continents = Array.from(new Set(array.map((d: any) => d.continent)))

  continents.map((d: any) => {
    const arr = array.filter((s: any) => s.continent == d)

    res.push({
      continent: d,
      list: arr,
    })
  })
  return res
}

export const retailerLocations = async (dt: any) => {
  const res: any = []

  dt.map((d: any) => {
    res.push({
      id: d.id,
      title: d.title.rendered,
      text: d.acf.text,
      isAirport: d['cat-location'][0] == 32,
      phone: d.acf.contacts?.phone,
      coords: d.acf.location,
      schedule: d.acf.contacts.schedule,
    })
  })

  return res
}

// locates = locates.filter((l: any) => l.id != dt.id)

// locates.forEach((lo: any) => {
//   lo.distance = distance(
//     dt.acf.location?.lat,
//     dt.acf.location?.lng,
//     lo?.locations.lat,
//     lo?.locations.lng,
//     'N',
//   )
// })

// const min = arrayMinDistance(locates)

// nears = locates
//   .sort((a: any, b: any) => b.distance - a.distance)
//   .filter(
//     (l: any) =>
//       l.distance >= min.distance && l.distance <= min.distance + 2000,
//   )
