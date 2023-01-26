import s1 from '../assets/socials/instagram.svg'
import s2 from '../assets/socials/linkedin.svg'
import s3 from '../assets/socials/facebook.svg'

const footer = {
  title: 'Get updated & Stay connected',
  cols: [
    {
      title: 'Explore',
      list: [
        {
          title: 'Contact Us',
          link: '/contact-us',
        },
        {
          title: 'FAQ',
          link: '/faq',
        },
        {
          title: 'Career',
          link: '/careers',
        },
      ],
    },
    {
      title: 'Treatments',
      list: [
        {
          title: 'Massages',
          link: '/treatments/massages',
        },
        {
          title: 'Nail care',
          link: '/treatments/nail-care',
        },
        {
          title: 'Beauty',
          link: '/treatments/beauty',
        },
        {
          title: 'Wellness',
          link: '/treatments/wellness',
        },
        {
          title: 'Combos',
          link: '/treatments/combos',
        },
      ],
    },
    {
      title: 'Products',
      list: [
        {
          title: 'Pillows',
          link: '/products/travel-pillows',
        },
        {
          title: 'Travel Accessories',
          link: '/products/travel-accessories/',
        },
        {
          title: 'Massage devices',
          link: '/products/massage-devices/',
        },
        {
          title: 'Beauty devices',
          link: '/products/beauty-devices/',
        },
        {
          title: 'Register Product',
          link: '/products/register',
        },
        {
          title: 'Find a Retailer',
          link: '/products/find-retailer',
        },
      ],
    },
  ],
  placeholder: 'Your Email',
  copyText: 'Copywriting BeRelax',
  socials: [
    {
      icon: s1,
      link: 'https://instagram.com/',
    },
    {
      icon: s2,
      link: 'https://instagram.com/',
    },
    {
      icon: s3,
      link: 'https://instagram.com/',
    },
  ],
  docs: [
    {
      title: 'Terms & Conditions',
      link: '/terms-conditions',
    },
  ],
  last: {
    title: 'See Our Treatments',
    link: '/treatments',
    buttonTitle: 'Open Page',
  },
  cookie: {
    title: 'Cookies',
    text:
      'We use cookies to personalize your experience. We share insights with our social media, advertising and analytics partners.',
    acceptTitle: 'Accept All',
    acceptNotAll:'Just Necessary'
  },
}

export default footer
