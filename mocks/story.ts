import img from '../assets/story/term.png'
import ic1 from '../assets/story/service.svg'
import ic2 from '../assets/story/award.svg'
import ic3 from '../assets/story/plane.svg'
import ic4 from '../assets/story/love.svg'
import f1 from '../assets/home/photo_2022-10-13_11-30-09.png'
import f2 from '../assets/home/photo_2022-10-13_11-30-05.png'
import f3 from '../assets/home/photo_2022-10-13_11-30-07.png'
import f4 from '../assets/home/photo_2022-10-13_11-30-08.png'
import f5 from '../assets/home/photo_2022-10-13_11-30-08 (2).png'
import f6 from '../assets/home/photo_2022-10-13_11-30-11.png'

import rod1 from '../assets/story/Rectangle 48.png'

import ban1 from '../assets/story/image 314.png'
import ban2 from '../assets/story/image 11.png'

const story = {
  title: 'Our Story',
  text:
    'Be Relax offers well-being and beauty services to airport passengers worldwide. Located at the heart of airports, requiring no appointments, Be relax airport spas are now a must try for any passenger looking for an oasis of wellness before take-off.',
  img: img.src,
  values: {
    title: 'Company Value',
    list: [
      {
        title: 'Passion for service',
        icon: ic1,
        text:
          '(Need text here)  diam ridiculus congue blandit. Lorem ut mi senectus non. Pharetra mauris id massa pulvinar quis ipsum convallis. Elementum fames duis elit aliquam tempus feugiat. Et et nisi enim id. In venenatis sed ',
      },
      {
        title: 'Winning spirit',
        icon: ic2,
        text:
          'We want to grow and to be number one. Innovation, creation and development are key! We wish to continuously improve ourselves at every opportunity and always turn towards the action.',
      },
      {
        title: 'Open-mindedness',
        icon: ic3,
        text:
          '(Need text here)  diam ridiculus congue blandit. Lorem ut mi senectus non. Pharetra mauris id massa pulvinar quis ipsum convallis. Elementum fames duis elit aliquam tempus feugiat. Et et nisi enim id. In venenatis sed ',
      },
      {
        title: 'Confidence',
        icon: ic4,
        text:
          'We respect our colleagues and our clients. We trust the abilities and intentions of each and everyone. We believe that people work better in an environment of trust. We work in a transparent environment.',
      },
    ],
  },
  roadmap: {
    title: 'Be Relax Roadmap',
    list: [
      {
        year: '2003',
        title: 'Long journey by plane ',
        text:
          'Frederic Briest during the trip realized that as easy as it was for a traveller to buy cigarettes and alcohol, finding a place to relax and to unwind in an airport was virtually impossible.',
        img: rod1.src,
      },
      {
        year: '2004',
        title: 'Long journey by plane ',
        text:
          'Creation of the first Be Relax Spa Concept at CDG Airport in Paris',
        img: rod1.src,
      },
      {
        year: '2005',
        title: 'Long journey by plane ',
        text:
          'Frederic Briest during the trip realized that as easy as it was for a traveller to buy cigarettes and alcohol, finding a place to relax and to unwind in an airport was virtually impossible.',
        img: rod1.src,
      },
      {
        year: '2007',
        title: 'Long journey by plane ',
        text:
          'Frederic Briest during the trip realized that as easy as it was for a traveller to buy cigarettes and alcohol, finding a place to relax and to unwind in an airport was virtually impossible.',
        img: rod1.src,
      },
      {
        year: '2010',
        title: 'Long journey by plane ',
        text:
          'Frederic Briest during the trip realized that as easy as it was for a traveller to buy cigarettes and alcohol, finding a place to relax and to unwind in an airport was virtually impossible.',
        img: rod1.src,
      },
      {
        year: '2012',
        title: 'Long journey by plane ',
        text:
          'Frederic Briest during the trip realized that as easy as it was for a traveller to buy cigarettes and alcohol, finding a place to relax and to unwind in an airport was virtually impossible.',
        img: rod1.src,
      },
      {
        year: '2014',
        title: 'Long journey by plane ',
        text:
          'Frederic Briest during the trip realized that as easy as it was for a traveller to buy cigarettes and alcohol, finding a place to relax and to unwind in an airport was virtually impossible.',
        img: rod1.src,
      },
      {
        year: '2016',
        title: 'Long journey by plane ',
        text:
          'Frederic Briest during the trip realized that as easy as it was for a traveller to buy cigarettes and alcohol, finding a place to relax and to unwind in an airport was virtually impossible.',
        img: rod1.src,
      },
      {
        year: '2020',
        title: 'Long journey by plane ',
        text:
          'Frederic Briest during the trip realized that as easy as it was for a traveller to buy cigarettes and alcohol, finding a place to relax and to unwind in an airport was virtually impossible.',
        img: rod1.src,
      },
    ],
  },
  storyblocks: [
    {
      buttonTitle: 'Explore Treatments',
      title: 'Our SPAs',
      subtitle: 'Wellness at the airport',
      link: '/treatments',
      img: ban1.src,
    },
    {
      buttonTitle: 'Explore products',
      title: 'Travel products',
      subtitle: 'In-flight wellness',
      link: '/products',
      img: ban2.src,
    },
  ],
  follow: {
    title: 'Follow Us on Instagram ',
    text: 'For you much needed dose of wellness',
    link: 'https://instagram.com/berelax_spa',
    textLink: '@berelax_spa',
    images: [f1.src, f2.src, f3.src, f4.src, f5.src, f6.src],
  },
}

export default story
