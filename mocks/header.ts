import logo from '../assets/Logo Be Relax.png'
import img1 from '../assets/menu/image 12.png'
import img2 from '../assets/menu/image 300.png'
import img3 from '../assets/menu/FACE_LIFTER_0034 1.png'
import img4 from '../assets/menu/Rectangle 5.png'

const header = {
  logo: logo.src,
  menu: [
    {
      title: 'Find us',
      link: '/find-us',
      submenu: [],
    },
    {
      title: 'Treatments',
      link: '/treatments',
      isProducts: true,
      submenu: [
        {
          img: img1.src,
          title: 'Massages',
          link: '/treatments/massages',
          list: [
            {
              title: 'Chair Massage',
              link: '/treatments/massages/chair-massage',
            },
            {
              title: 'Table Massage',
              link: '/treatments/massages/table-massage',
            },
            {
              title: 'Head Up',
              link: '/treatments/massages/head-up',
            },
            {
              title: 'Be Relax',
              link: '/treatments/massages/be-relax',
            },
          ],
        },
        {
          img: img2.src,
          title: 'nail care',
          link: '/treatments/nail-care',

          list: [
            {
              title: 'Chair Massage',
              link: '/treatments/nail-care/chair-massage',
            },
            {
              title: 'Table Massage',
              link: '/treatments/nail-care/table-massage',
            },
            {
              title: 'Head Up',
              link: '/treatments/nail-care/head-up',
            },
            {
              title: 'Be Relax',
              link: '/treatments/nail-care/be-relax',
            },
          ],
        },
        {
          img: img3.src,
          title: 'beauty',
          link: '/treatments/beauty',

          list: [
            {
              title: 'Chair Massage',
              link: '/treatments/beauty/chair-massage',
            },
            {
              title: 'Table Massage',
              link: '/treatments/beauty/table-massage',
            },
            {
              title: 'Head Up',
              link: '/treatments/beauty/head-up',
            },
            {
              title: 'Be Relax',
              link: '/treatments/beauty/be-relax',
            },
          ],
        },
        {
          img: img4.src,
          title: 'Wellness',
          link: '/treatments/wellness',

          list: [
            {
              title: 'Chair Massage',
              link: '/treatments/wellness/chair-massage',
            },
            {
              title: 'Table Massage',
              link: '/treatments/wellness/table-massage',
            },
          ],
        },
      ],
    },
    {
      title: 'Products',
      link: '/products',
      isProducts: true,
      submenu: [
        {
          img: img1.src,
          title: 'Pillows',
          link: '/products/travel-pillows',
          list: [
            {
              title: 'Chair Massage',
              link: '/products/travel-pillows/chair',
            },
            {
              title: 'Table Massage',
              link: '/products/travel-pillows/chair',
            },
            {
              title: 'Head Up',
              link: '/products/travel-pillows/chair',
            },
            {
              title: 'Be Relax',
              link: '/products/travel-pillows/chair',
            },
            {
              title: 'Be Relax',
              link: '/products/travel-pillows/chair',
            },
          ],
        },
        {
          img: img2.src,
          title: 'Travel accessories',
          link: '/products/travel-accessories/',
          list: [
            {
              title: 'Chair Massage',
              link: '/products/travel-accessories/travel-pillows/chair',
            },
            {
              title: 'Table Massage',
              link: '/products/travel-accessories/travel-pillows/chair',
            },
            {
              title: 'Head Up',
              link: '/products/travel-accessories/travel-pillows/chair',
            },
            {
              title: 'Be Relax',
              link: '/products/travel-accessories/travel-pillows/chair',
            },
            {
              title: 'Be Relax',
              link: '/products/travel-accessories/travel-pillows/chair',
            },
          ],
        },
        {
          img: img3.src,
          title: 'Massage devices',
          link: '/products/massage-devices/',

          list: [
            {
              title: 'Chair Massage',
              link: '/products/massage-devices/chair',
            },
            {
              title: 'Table Massage',
              link: '/products/massage-devices/chair',
            },
            {
              title: 'Head Up',
              link: '/products/massage-devices/chair',
            },
            {
              title: 'Be Relax',
              link: '/products/massage-devices/chair',
            },
            {
              title: 'Be Relax',
              link: '/products/massage-devices/chair',
            },
          ],
        },
        {
          img: img4.src,
          title: 'Beauty devices',
          link: '/products/beauty-devices/',

          list: [
            {
              title: 'Chair Massage',
              link: '/products/beauty-devices/chair',
            },
            {
              title: 'Table Massage',
              link: '/products/beauty-devices/chair',
            },
            {
              title: 'Head Up',
              link: '/products/beauty-devices/chair',
            },
            {
              title: 'Be Relax',
              link: '/products/beauty-devices/chair',
            },
            {
              title: 'Be Relax',
              link: '/products/beauty-devices/chair',
            },
          ],
        },
      ],
    },
    {
      title: 'About us',
      link: '#',
      isProducts: false,
      submenu: [
        {
          title: 'Our Story',
          img: img1.src,
          link: '/our-story',
        },
        {
          title: 'News',
          img: img2.src,
          link: '/news',
        },
        {
          title: 'FAQ',
          img: img3.src,
          link: '/faq',
        },
        {
          title: 'Contact Us',
          img: img4.src,
          link: '/contact-us',
        },
      ],
    },
    {
      title: 'Be Involved',
      link: '#',
      isProducts: false,
      submenu: [
        {
          title: 'Careers',
          img: img1.src,
          link: '/careers',
        },
        {
          title: 'Be Relax Academy',
          img: img2.src,
          link: '/academy',
        },
        {
          title: 'Partners',
          img: img3.src,
          link: '/partners',
        },
        {
          title: 'Airport Representative',
          img: img1.src,
          link: '/airport-representative',
        },
      ],
    },
  ],
  searchbuttonTitle: 'Search',
}

export default header
