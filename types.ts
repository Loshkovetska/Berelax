export type NewsType = {
  id: number | string
  title: string
  text: string
  link: string
  datetime: string
  cat: string
  readTime: string
  img: string
  views: number
}

export type ProductCatType = {
  id: number
  title: string
  link: string
  img: string
}

export type ServiceCatType = {
  id: number
  title: string
  link: string
  img: string
}

export type PlaceCard = {
  title: string
  text: string
  country: string
  img: string | null
  link: string
  locations: {
    lat: number | string
    lng: number | string
  }
}

export type serviceType = {
  category: string
  title: string
  link: string
  text: string
  img: string | null
  price: Array<{
    time: number | string
    amount: number | string
  }>
  bodyPart: Array<string>
  locations: Array<string>
  serviceType: Array<string>
}

export type VacancyType = {
  title: string
  type: string
  text: string
  location: string
  datetime: string
}

export type TreatType = {
  title: string
  link: string
  text: string
  img: string | null
  time: Array<any>
  bodyPart: Array<any>
  locations: Array<any>
  serviceType: Array<any>
}

export type ProductType = {
  category: string
  id: string | number
  title: string
  text: string
  link: string
  img: string | null
  color?: Array<any>
  isNew: boolean
  soldCount: number
  filling?: Array<any>
  bodyPart?: Array<any>
  heatOption?: Array<any>
  concern?: Array<any>
  type?: string
}
