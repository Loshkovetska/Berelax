import { observable } from 'mobx'

import FormData from 'form-data'
import home from '../mocks/home'
import find from '../mocks/find'
import header from '../mocks/header'
import footer from '../mocks/footer'
import airports from '../mocks/locations'
import location from '../mocks/location'
import treats from '../mocks/treats'
import treatcat from '../mocks/treatcat'
import service from '../mocks/service'
import countryPop from '../mocks/countrypop'
import booking from '../mocks/booking'
import products from '../mocks/products'
import productcat from '../mocks/productcat'
import progreg from '../mocks/prodreg'
import search from '../mocks/search'
import story from '../mocks/story'
import news from '../mocks/news'
import newsPost from '../mocks/newsPost'
import faq from '../mocks/faq'
import contact from '../mocks/contact'
import career from '../mocks/career'
import vacancies from '../mocks/vacancies'
import careerPost from '../mocks/career-post'
import treatsList from '../mocks/treatsList'
import productsList from '../mocks/products-list'
import newsList from '../mocks/news-list'
import academy from '../mocks/academy'
import partners from '../mocks/partners'
import airRepresent from '../mocks/air-represent'
import terms from '../mocks/terms'
import product from '../mocks/product'
import retailer from '../mocks/retailer'

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

export const getFooter = async () => {
  // const fd = new FormData();
  // fd.append('status', 'footer');
  // fd.append('lang', lang)
  // const request = await fetch('', {
  //   method: "POST",
  //   body:JSON.stringify(fd)
  // });
  // return await request.json();

  return footer
}

export const getHeader = async () => {
  // const fd = new FormData();
  // fd.append('status', 'header');
  // fd.append('lang', lang)

  // const request = await fetch('', {
  //   method: "POST",
  //   body:JSON.stringify(fd)
  // });

  // return await request.json();

  return header
}

export const getHomePage = async () => {
  // const fd = new FormData();
  // fd.append('status', 'home-page');
  // fd.append('lang', lang)

  // const request = await fetch('', {
  //   method: "POST",
  //   body:JSON.stringify(fd)
  // });

  // return await request.json();

  return home
}

export const getFindUsPage = async () => {
  // const fd = new FormData();
  // fd.append('status', 'find-page');
  // fd.append('lang', lang)

  // const request = await fetch('', {
  //   method: "POST",
  //   body:JSON.stringify(fd)
  // });

  // return await request.json();

  return find
}

export const getLocations = async () => {
  // const fd = new FormData();
  // fd.append('status', 'locations');
  // fd.append('lang', lang)

  // const request = await fetch('', {
  //   method: "POST",
  //   body:JSON.stringify(fd)
  // });

  // return await request.json();
  return airports
}

export const getLocationPage = async (slug: string) => {
  // const fd = new FormData();
  // fd.append('status', 'location-page');
  // fd.append('lang', lang)

  // const request = await fetch('', {
  //   method: "POST",
  //   body:JSON.stringify(fd)
  // });

  // return await request.json();
  return location
}

export const getTreatmentsPage = async () => {
  // const fd = new FormData();
  // fd.append('status', 'location-page');
  // fd.append('lang', lang)

  // const request = await fetch('', {
  //   method: "POST",
  //   body:JSON.stringify(fd)
  // });

  // return await request.json();
  return treats
}

export const getTreatCatPage = async (cat: string) => {
  // const fd = new FormData();
  // fd.append('status', 'treat-cat-page');
  // fd.append('lang', lang)
  // fd.append('cat'cat)

  // const request = await fetch('', {
  //   method: "POST",
  //   body:JSON.stringify(fd)
  // });

  // return await request.json();
  return treatcat
}

export const getServicePage = async (ser: string) => {
  // const fd = new FormData();
  // fd.append('status', 'treat-service-page');
  // fd.append('lang', lang)
  // fd.append('cat'cat)

  // const request = await fetch('', {
  //   method: "POST",
  //   body:JSON.stringify(fd)
  // });

  // return await request.json();
  return service
}

export const getCountryPop = async () => {
  // const fd = new FormData();
  // fd.append('status', 'country-pop');
  // fd.append('lang', lang)
  // fd.append('cat'cat)

  // const request = await fetch('', {
  //   method: "POST",
  //   body:JSON.stringify(fd)
  // });

  // return await request.json();
  return countryPop
}

export const getBookingPage = async () => {
  // const fd = new FormData();
  // fd.append('status', 'country-pop');
  // fd.append('lang', lang)
  // fd.append('cat'cat)

  // const request = await fetch('', {
  //   method: "POST",
  //   body:JSON.stringify(fd)
  // });

  // return await request.json();
  return booking
}

export const getProductsContent = async () => {
  // const fd = new FormData();
  // fd.append('status', 'products-page');
  // fd.append('lang', lang)
  // fd.append('cat'cat)

  // const request = await fetch('', {
  //   method: "POST",
  //   body:JSON.stringify(fd)
  // });

  // return await request.json();
  return products
}

export const getProductCatPage = async (cat: string) => {
  return productcat
}

export const getProductRegister = async () => {
  return progreg
}

export const getSearchContent = async () => {
  return search
}

export const getStoryPage = async () => {
  return story
}

export const getNewsPage = async () => {
  return news
}

export const getNewsPostPage = async (slug: string) => {
  return newsPost
}

export const getFaqPage = async () => {
  return faq
}

export const getContactPage = async () => {
  return contact
}
export const getCareerPage = async () => {
  return career
}

export const getVacancies = async () => {
  return vacancies
}

export const getCareerPostPage = async (slug: string) => {
  return careerPost
}

export const getServices = async () => {
  return treatsList
}

export const getProducts = async () => {
  return productsList
}

export const getNews = async () => {
  return newsList
}

export const getAcademyPage = async () => {
  return academy
}

export const getPartnersPage = async () => {
  return partners
}

export const getAirRepresentPage = async () => {
  return airRepresent
}

export const getTermsPage = async () => {
  return terms
}

export const getProductPage = async (service: string) => {
  return product
}

export const getRetailerPage = async () => {
  return retailer
}
