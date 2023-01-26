import banner from '../assets/products/image.png'
import pI1 from '../assets/products/1.png'
import pI2 from '../assets/products/2.png'
import pI3 from '../assets/products/3.png'
import pI4 from '../assets/products/4.png'

import p1 from '../assets/products/product.png'

const products = {
  title: 'Products',
  text:
    'We understand that Southwest can turn over planes quickly and on time. With the hustle and bustle of this busy terminal we are able to offer quick, relaxing treatments for the on the go passenger. ',
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
  banner: {
    title: 'Your tailor-made massage!',
    text:
      'Irotate Body Massager provides a unique massage with 4 interchangeable attachments to eliminate cellulite, smooth skin and relax muscle aches.',
    buttonText: 'Explore product',
    img: banner.src,
    link:""
  },
  explore: {
    title: 'Explore Top Products',
    buttonText: 'See Details',
    list: [
      {
        title: 'Original Plus Pillow',
        text:
          'Ac, id interdum fusce vestibulum. Nulla tortor libero convallis sit. Suscipit nulla at a sed',
        link: '/products/travel-pillows/original-plus-pillow',
        img: p1.src,
      },
      {
        title: 'Original Plus Pillow',
        text:
          'Ac, id interdum fusce vestibulum. Nulla tortor libero convallis sit. Suscipit nulla at a sed',
        link: '/products/travel-pillows/original-plus-pillow',
        img: p1.src,
      },
      {
        title: 'Original Plus Pillow',
        text:
          'Ac, id interdum fusce vestibulum. Nulla tortor libero convallis sit. Suscipit nulla at a sed',
        link: '/products/travel-pillows/original-plus-pillow',
        img: p1.src,
      },
      {
        title: 'Original Plus Pillow',
        text:
          'Ac, id interdum fusce vestibulum. Nulla tortor libero convallis sit. Suscipit nulla at a sed',
        link: '/products/travel-pillows/original-plus-pillow',
        img: p1.src,
      },
      {
        title: 'Original Plus Pillow',
        text:
          'Ac, id interdum fusce vestibulum. Nulla tortor libero convallis sit. Suscipit nulla at a sed',
        link: '/products/travel-pillows/original-plus-pillow',
        img: p1.src,
      },
      {
        title: 'Original Plus Pillow',
        text:
          'Ac, id interdum fusce vestibulum. Nulla tortor libero convallis sit. Suscipit nulla at a sed',
        link: '/products/travel-pillows/original-plus-pillow',
        img: p1.src,
      },
    ],
  },
}

export default products
