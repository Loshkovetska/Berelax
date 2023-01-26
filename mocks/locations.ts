import img1 from '../assets/find/image 331.png'
import img2 from '../assets/find/image 333.png'
import img3 from '../assets/find/image 335.png'
import img4 from '../assets/find/Be Relax Philadelphia (1) 1.png'
import img5 from '../assets/find/lax-terminal-1-1024x384-1 1.png'

const airports = [
  {
    continent: 'America',
    list: [
      {
        id: 1,
        title: 'Atlanta International Airport',
        shortTitle: 'AIA',

        country: 'USA',
        img: img1.src,
        text: 'Pop-Up Terminal 5 Gate A18',
        link: '/find-us/atlanta',
        locations: {
          lat: 10,
          lng: 20,
        },
      },
      {
        id: 2,
        title: 'Detroit Metropolitan Airport',
        shortTitle: 'DMA',

        text: 'Pop-Up Terminal 5 Gate A18',
        link: '/find-us/detroit',
        country: 'USA',
        img: img2.src,
        locations: {
          lat: 100,
          lng: 20,
        },
      },
      {
        id: 3,

        title: 'Dallas-Fort Worth International Airport',
        shortTitle: 'DWI',

        text: 'Pop-Up Terminal 5 Gate A18',
        link: '/find-us/dallas-fort2',
        country: 'USA',
        img: img3.src,

        locations: {
          lat: -10,
          lng: 30,
        },
      },
      {
        id: 4,
        title: 'Dallas-Fort Worth International Airport',
        shortTitle: 'DWI',

        text: 'Pop-Up Terminal 5 Gate A18',
        link: '/find-us/dallas-fort',
        country: 'USA',
        img: img3.src,

        locations: {
          lat: -40,
          lng: 30,
        },
      },
    ],
  },
  {
    continent: 'Europe',
    list: [
      {
        id: 5,
        title: 'Frankfurt Airport',
        shortTitle: 'FRA',
        text: 'Pop-Up Terminal 5 Gate A18',
        link: '/find-us/frankfurt',
        country: 'Germany',
        img: img4.src,
        locations: {
          lat: 50.0451723,
          lng: 8.5598615,
        },
      },

      {
        id: 6,
        title: 'London Heathrow Airport',
        shortTitle: 'LHA',

        text: 'Pop-Up Terminal 5 Gate A18',
        link: '/find-us/london',
        country: 'UK',
        img: img5.src,
        locations: {
          lat: 200,
          lng: 10,
        },
      },
      {
        id: 7,
        title: 'Frankfurt Airport',
        shortTitle: 'FRA',

        text: 'Terminal 1Z Gate 56',
        link: '/find-us/frankfurt2',
        country: 'Germany',
        img: img4.src,
        locations: {
          lat: 43.393646,
          lng: -5.7329718,
        },
      },
    ],
  },
  {
    continent: 'Asia',
    list: [
      {
        id: 5,
        title: 'Frankfurt Airport',
        shortTitle: 'FRA',

        text: 'Pop-Up Terminal 5 Gate A18',
        link: '/find-us/frankfurt',
        country: 'Germany',
        img: img4.src,
        locations: {
          lat: 50.0451723,
          lng: 8.5598615,
        },
      },

      {
        id: 6,
        title: 'London Heathrow Airport',
        shortTitle: 'LHA',

        text: 'Pop-Up Terminal 5 Gate A18',
        link: '/find-us/london',
        country: 'UK',
        img: img5.src,
        locations: {
          lat: 200,
          lng: 10,
        },
      },
      {
        id: 7,
        title: 'Frankfurt Airport',
        shortTitle: 'FRA',

        text: 'Terminal 1Z Gate 56',
        link: '/find-us/frankfurt2',
        country: 'Germany',
        img: img4.src,
        locations: {
          lat: 43.393646,
          lng: -5.7329718,
        },
      },
    ],
  },
  {
    continent: 'Middle east',
    list: [
      {
        id: 5,
        title: 'Frankfurt Airport',
        shortTitle: 'FRA',

        text: 'Pop-Up Terminal 5 Gate A18',
        link: '/find-us/frankfurt',
        country: 'Germany',
        img: img4.src,
        locations: {
          lat: 50.0451723,
          lng: 8.5598615,
        },
      },

      {
        id: 6,
        title: 'London Heathrow Airport',
        shortTitle: 'LHA',

        text: 'Pop-Up Terminal 5 Gate A18',
        link: '/find-us/london',
        country: 'UK',
        img: img5.src,
        locations: {
          lat: 200,
          lng: 10,
        },
      },
      {
        id: 7,
        title: 'Frankfurt Airport',
        shortTitle: 'FRA',

        text: 'Terminal 1Z Gate 56',
        link: '/find-us/frankfurt2',
        country: 'Germany',
        img: img4.src,
        locations: {
          lat: 43.393646,
          lng: -5.7329718,
        },
      },
    ],
  },
]

export default airports
