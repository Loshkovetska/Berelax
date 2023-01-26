import img1 from '../assets/service/im1.png'
import img2 from '../assets/service/im2.png'
import img3 from '../assets/service/img3.png'
import banner from '../assets/products/image.png'
import pI1 from '../assets/products/product.png'

import p1 from '../assets/product/BeRelax_Antinomia_OriginalPlus_Focus_B 1.png'
import p2 from '../assets/product/BeRelax_Antinomia_OriginalPlus_B 1.png'
import p3 from '../assets/product/BeRelax_Antinomia_BackTherapy_Focus_B 1.png'

import p4 from '../assets/product/2022-12-19 17.58.40.jpg'
import p5 from '../assets/product/image-removebg-preview (2) 1.png'

const product = {
  title: 'Original Plus Pillow',
  text: `The Original Plus Pillow is the world’s first pillow with front chin support. This unique feature provides the head with 360 degrees support to prevent the head from falling forward and neck stiffness.`,
  buttonTitle1: 'Buy on Amazon',
  buttonLink1: '',
  buttonTitle2: 'Find me in store',
  buttonLink2: '',

  colors: [
    {
      bg: '#0F3E93',
      title: 'blue',
    },
    {
      bg: '#222831',
      title: 'black',
    },
  ],
  characteristicsList: [
    {
      title: 'Specification',
      list: [
        {
          title: 'Recharge Time',
          text: '4-12 hours [depends on specifications of the charging port',
        },
        {
          title: 'size',
          text: '29 x 26 x 12 cm',
        },
      ],
    },
  ],
  gallery: [
    {
      color: 'blue',
      images: [p1.src, p2.src, p3.src],
    },
    {
      color: 'black',
      images: [p4.src, p5.src],
    },
  ],
  video: `<iframe width="860" height="484" src="https://www.youtube.com/embed/8bmn0J6mLoY" title="Be Relax - My Perfect Sleep Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  benefits: {
    title: 'Enjoy all the treatment benefits',
    list: [
      {
        title: 'Sensitive skin',
        text:
          'Vulputate gravida morbi vel, euismod. Ipsum nec bibendum varius venenatis eget scelerisque in. Aliquam eget semper sit.',
        src: img1.src,
      },
      {
        title: 'Ultrices quis ',
        text:
          'Vulputate gravida morbi vel, euismod. Ipsum nec bibendum varius venenatis eget scelerisque in. Aliquam eget semper sit.',
        src: img2.src,
      },
      {
        title: 'Et aliquet sagittis ',
        text:
          'Vulputate gravida morbi vel, euismod. Ipsum nec bibendum varius venenatis eget scelerisque in. Aliquam eget semper sit.',
        src: img3.src,
      },
    ],
  },
  banner: {
    title: 'Make your travels more comfortable with our products',
    buttonText: 'Explore our wellness products',
    img: banner.src,
    link: '',
  },
  similiar: {
    title: 'You may also like',
    text:
      'Simple and efficient airport spa service accessible to everyone before take-off.  Need to freshen up before your flight ',
    buttonTitle: 'See All Products',
    cardButton: 'See Details',
    buttonLink: '/products',
    cards: [
      {
        id: 1,
        title: 'Original Plus Pillow Original Plus Pillow',
        text:
          'Ac, id interdum fusce vestibulum. Nulla tortor libero convallis sit. Suscipit nulla at a sed',
        link: '/products/travel-pillows/original-plus-pillow',
        img: pI1.src,
        color: ['red', 'black'],
        isNew: true,
        soldCount: 100,
        filling: ['inflatable'],
        bodyPart: ['neck', 'back'],
        heatOption: ['1', '2'],
        concern: ['firming', 'cleaning'],
        type: 'electric',
      },
      {
        id: 1,
        link: '/products/travel-pillows/chair',
        title: 'Original Plus Pillow',
        text:
          'Ac, id interdum fusce vestibulum. Nulla tortor libero convallis sit. Suscipit nulla at a sed',
        img: pI1.src,
        color: ['black'],
        isNew: false,
        soldCount: 10,
        filling: ['microbead'],
        bodyPart: ['legs', 'back'],
        heatOption: ['1', '2'],
        concern: ['firming', 'cleaning'],
        type: 'manual',
      },
      {
        id: 1,
        link: '/products/travel-pillows/chair',
        title: 'Original Plus Pillow',
        text:
          'Ac, id interdum fusce vestibulum. Nulla tortor libero convallis sit. Suscipit nulla at a sed',
        img: pI1.src,
        color: ['blue'],
        isNew: false,
        soldCount: 10,
        filling: ['microbead'],
        bodyPart: ['legs', 'back', 'calf'],
        heatOption: ['1', '2'],
        concern: ['firming', 'cleaning'],
        type: 'manual',
      },
      {
        id: 1,
        link: '/products/travel-pillows/chair',
        title: 'Original Plus Pillow',
        text:
          'Ac, id interdum fusce vestibulum. Nulla tortor libero convallis sit. Suscipit nulla at a sed',
        img: pI1.src,
        color: ['blue'],
        isNew: true,
        soldCount: 10,
        filling: ['memory foam'],
        bodyPart: ['legs', 'feet', 'calf'],
        heatOption: ['1', '2'],
        concern: ['firming', 'cleaning'],
        type: 'manual',
      },
    ],
  },
  pop: {
    title: 'Find a Retailer',
    tooltip: `Our wellness products sell out quickly. The product you are looking for may not be available at the desire location. We invite you to contact the store prior to your arrival to make sure it is available.`,
    placeholder: 'Type a location',
    locations: ['New York', 'Dubai'],
  },
}

export default product
