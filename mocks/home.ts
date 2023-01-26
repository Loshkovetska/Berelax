import g1 from '../assets/gallery/Be Relax Philadelphia (1) 1.png'
import g2 from '../assets/gallery/BeRelax_FilmMarque_MASTER0911 (2) 1.png'
import g3 from '../assets/gallery/Frame 45.png'
import g4 from '../assets/gallery/image 10.png'
import g5 from '../assets/gallery/image 305.png'
import g6 from '../assets/gallery/ORIGINAL_PLUS_V2_0042_B 2.png'
import bl2I1 from '../assets/home/Ellipse 10.png'
import bl2I2 from '../assets/home/Ellipse 11.png'
import bl2I3 from '../assets/home/Ellipse 12.png'

import sI1 from '../assets/home/image 303.png'
import sI2 from '../assets/home/image 305.png'
import sI3 from '../assets/home/image 314.png'
import sI4 from '../assets/home/image 315.png'

import pI1 from '../assets/home/ORIGINAL_PLUS_V2_0042_B 2.png'
import pI2 from '../assets/home/image 11.png'
import pI3 from '../assets/home/MUSCLE_THERAPY_0091 1.png'
import pI4 from '../assets/home/2.png'

import f1 from '../assets/home/photo_2022-10-13_11-30-09.png'
import f2 from '../assets/home/photo_2022-10-13_11-30-05.png'
import f3 from '../assets/home/photo_2022-10-13_11-30-07.png'
import f4 from '../assets/home/photo_2022-10-13_11-30-08.png'
import f5 from '../assets/home/photo_2022-10-13_11-30-08 (2).png'
import f6 from '../assets/home/photo_2022-10-13_11-30-11.png'

const home = {
  audio: '/bg-music.mp3',
  intro: {
    title: 'Your wellness journey starts now',
    button: 'Find a Locations',
    images: [g3.src, g2.src, g5.src, g5.src, g2.src, g3.src],
    mainVideo: {
      video: '/PexelsVideos2632737.mp4',
      poster: g4.src,
    },
    mainImg: g1.src,
  },
  block2: {
    text: `Our treatments have been created by professionals <img src='${bl2I1.src}' alt='be relax'/>    and upon the promise to create a very simple and efficient airport service accessible to <img src='${bl2I2.src}' alt='be relax'/>     everyone     before <img src='${bl2I3.src}' alt='be relax'/>     take-off. Enjoy a relaxation and beauty treatments in our SPAs.`,
  },
  services: [
    {
      id: 1,
      link: '/treatments/massages',
      title: 'Massages',
      img: sI3.src,
    },
    {
      id: 1,
      link: '/treatments/nail-care',
      title: 'Nail Care',
      img: sI1.src,
    },
    {
      id: 1,
      link: '/treatments/wellness',
      title: 'Wellness',
      img: sI2.src,
    },
    {
      id: 1,
      link: '/treatments/beauty',
      title: 'Beauty',
      img: sI4.src,
    },
  ],
  servicesBtn: 'See details',
  book: {
    title: 'Plan your relaxation in advance',
    text:
      'Take the opportunity to book the service in advance. Just fill out the reservation form and wait for a response from our manager. Make sure that you have 12 hours to reserve before you come to us.',
    buttonTitle: 'Book Now',
    buttonLink: '#',
  },
  products: {
    title: 'Explore our products',
    text:
      'Discover our premium new generations of travel and massage products uniting a sense of ultimate comfort with a perfect style, designed to dramatically improve passenger’s journeys.',
    buttonTitle: 'Explore',
    list: [
      {
        id: 1,
        link: '/products/travel-pillows',
        title: 'Travel pillows',
        img: pI1.src,
      },
      {
        id: 1,
        link: '/products/travel-accessories',
        title: 'Travel accessories',
        img: pI2.src,
      },
      {
        id: 1,
        link: '/products/massage-devices',
        title: 'Massage devices',
        img: pI3.src,
      },
      {
        id: 1,
        link: '/products/beauty-devices',
        title: 'Beauty devices',
        img: pI4.src,
      },
    ],
  },
  news: {
    title: 'Be Relax News',
    buttonTitle: 'All News',
  },
  follow: {
    title: 'Follow Us on Instagram ',
    text: 'For you much needed dose of wellness',
    link: 'https://instagram.com/berelax_spa',
    textLink: '@berelax_spa',
    images: [f1.src, f2.src, f3.src, f4.src, f5.src, f6.src],
  },
}

export default home
