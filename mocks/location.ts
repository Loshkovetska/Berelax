import img from '../assets/gallery/Be Relax Philadelphia (1) 1.png'
import partner from '../assets/location/Logo (1).png'
import userRev from '../assets/location/Frame 138.png'
import ic1 from '../assets/socials/phone.svg'
import ic2 from '../assets/socials/email.svg'
import ic3 from '../assets/socials/time.svg'
import ic4 from '../assets/socials/location.svg'
import img1 from '../assets/menu/image 12.png'
import img2 from '../assets/menu/image 300.png'
import img3 from '../assets/menu/FACE_LIFTER_0034 1.png'
import img4 from '../assets/menu/Rectangle 5.png'
import banner from '../assets/location/banner.svg'
import near from '../assets/location/image 331.png'

const location = {
  id: 1,
  title: 'Philadelphia International Airport ',
  text: 'Terminal C Gate 18',
  buttonTitle: 'Make an Appointment',
  img: img.src,
  link: '/find-us/atlanta',
  find: {
    title: 'How to find us',
    text:
      'Sit malesuada pharetra ac pretium nunc urna duis. Risus lacus feugiat lacus scelerisque nunc cursus non. Eget consectetur mi sit mattis mi posuere duis. Sagittis bibendum nunc purus sed venenatis morbi imperdiet. ',
    buttonTitle: 'See Directions',
    contacts: [
      {
        text: '(1) 734 229 0042',
        icon: ic1,
        isLink: true,
        isPhone: true,
        isEmail: false,
      },
      {
        text: 'philadelphia@berelax.com',
        icon: ic2,
        isLink: true,
        isPhone: false,
        isEmail: true,
      },
      {
        text: 'Every day from 7am to 8pm',
        icon: ic3,
        isLink: false,
        isPhone: false,
        isEmail: false,
      },
      {
        text: 'Near Delta, United ',
        icon: ic4,
        isLink: false,
        isPhone: false,
        isEmail: false,
      },
    ],
  },
  treatmentsTitle: 'Available Treatments',
  treatmentsButton: 'See Pricelist',
  treatments: [
    {
      title: 'Massages',
      img: img1.src,
      link: '/treatments/massages',

      list: [
        {
          id: 1,
          title: 'Be Relax',
          link: '',
        },
        {
          id: 2,
          title: ' Be Back',
          link: '',
        },
        {
          id: 3,
          title: 'Absolute Massage',
          link: '',
        },
      ],
    },
    {
      title: 'Nail care',
      img: img2.src,
      link: '/treatments/nail-care',

      list: [
        {
          id: 1,
          title: 'Be Relax',
          link: '',
        },
        {
          id: 2,
          title: ' Be Back',
          link: '',
        },
        {
          id: 3,
          title: 'Absolute Massage',
          link: '',
        },
      ],
    },
    {
      img: img3.src,
      title: 'Beauty',
      link: '/treatments/beauty',

      list: [
        {
          id: 1,
          title: 'Be Relax',
          link: '',
        },
        {
          id: 2,
          title: ' Be Back',
          link: '',
        },
        {
          id: 3,
          title: 'Absolute Massage',
          link: '',
        },
      ],
    },
    {
      img: img4.src,
      title: 'Wellness',
      link: '/treatments/wellness',

      list: [
        {
          id: 1,
          title: 'Be Relax',
          link: '',
        },
        {
          id: 2,
          title: ' Be Back',
          link: '',
        },
        {
          id: 3,
          title: 'Absolute Massage',
          link: '',
        },
      ],
    },
  ],
  partnersTitle: 'Discover Be Relax Partner Brands',
  partnersText:
    'Risus viverra auctor massa dui cras dolor sagittis. Id ut et eget vitae orci scelerisque elit, ac. Ac lobortis ullamcorper at quis bibendum. ',
  partners: [
    {
      src: partner.src,
      link: '',
    },
    {
      src: partner.src,
      link: '',
    },
    {
      src: partner.src,
      link: '',
    },
    {
      src: partner.src,
      link: '',
    },
    {
      src: partner.src,
      link: '',
    },
    {
      src: partner.src,
      link: '',
    },
    {
      src: partner.src,
      link: '',
    },
    {
      src: partner.src,
      link: '',
    },
  ],
  banner: {
    title: 'Make your travels more comfortable with our products',
    buttonText: 'Explore our wellness products',
    img: banner,
    link:""
  },
  reviewsTitle: 'What our happy customers say',
  reviews: [
    {
      authorImg: userRev.src,
      text:
        '“Charito does a great job with the chair massage. Nice ambiance even with normal airport noise. I am Ready for a cross country flight now.”',
      authorName: 'Michael K.',
    },
    {
      authorImg: userRev.src,
      text:
        '“Charito does a great job with the chair massage. Nice ambiance even with normal airport noise. I am Ready for a cross country flight now.”',
      authorName: 'Michael K.',
    },
    {
      authorImg: userRev.src,
      text:
        '“Charito does a great job with the chair massage. Nice ambiance even with normal airport noise. I am Ready for a cross country flight now.”',
      authorName: 'Michael K.',
    },
    {
      authorImg: userRev.src,
      text:
        '“Charito does a great job with the chair massage. Nice ambiance even with normal airport noise. I am Ready for a cross country flight now.”',
      authorName: 'Michael K.',
    },
  ],
  nearTitle: 'Nearby SPAs',
  nearButton: 'See all Locations',
  nearSpas: [
    {
      title: 'NY John F. Kennedy International Airport',
      text: 'Terminal C Gate 18',
      img: near.src,
      link: '/find-us/ny',
    },
    {
      title: 'Los Angeles International Airport',
      text: 'Terminal C Gate 18',
      img: near.src,
      link: '/find-us/loca-angeles',
    },
  ],
}

export default location
