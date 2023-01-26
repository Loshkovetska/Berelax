import img1 from '../assets/service/im1.png'
import img2 from '../assets/service/im2.png'
import img3 from '../assets/service/img3.png'
import banner from '../assets/location/banner.svg'
import sI1 from '../assets/home/image 303.png'
import sI2 from '../assets/home/image 305.png'
import sI3 from '../assets/home/image 314.png'
import bg from '../assets/service/head up.png'
const service = {
  id: 1,
  title: 'Head Up',
  section: 'massage',
  img: bg.src,
  text:
    'This head massage is ideal for relieving stress and tension. It is also accompanied by a stimulating back massage based on acupressure techniques for ultimate relaxation. This massage is ideal for stress reduction and relieving chronic headaches.',
  bookText: 'Book Now',
  price: [
    {
      time: '20',
      amount: [
        {
          country: 'United Kingdom',
          value: '70',
          currency: '$',
        },
        {
          country: 'Germany',
          value: '1200',
          currency: '€',
        },
      ],
    },
    {
      time: '30',
      amount: [
        {
          country: 'United Kingdom',
          value: '90',
          currency: '$',
        },
        {
          country: 'Germany',
          value: '1400',
          currency: '€',
        },
      ],
    },
    {
      time: '40',
      amount: [
        {
          country: 'United Kingdom',
          value: '110',
          currency: '$',
        },
        {
          country: 'Germany',
          value: '1600',
          currency: '€',
        },
      ],
    },
    {
      time: '60',
      amount: [
        {
          country: 'United Kingdom',
          value: '120',
          currency: '$',
        },
        {
          country: 'Germany',
          value: '1800',
          currency: '€',
        },
      ],
    },
  ],
  subText: '*Prices are only for the US locations. ',
  changeLocationText: 'Change Location',
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
    img: banner,
    link: '',
  },
  similiar: {
    title: 'You may also like',
    text:
      'Simple and efficient airport spa service accessible to everyone before take-off.  Need to freshen up before your flight ',
    buttonTitle: 'See All Treatments',
    buttonLink: '/treatments',
    cards: [
      {
        title: 'Absolute Massage',
        link: '/treatments/massages/absolute-massage',
        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI1.src,
        time: ['30', '60'],
      },
      {
        title: 'Be Relax',
        link: '/treatments/massages/be-relax',

        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI2.src,
        time: ['20', '30', '40'],
      },
      {
        title: 'Be Up',
        link: '/treatments/massages/be-up',

        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI3.src,
        time: ['20', '30', '40'],
      },
      {
        title: 'Be Feet',
        link: '/treatments/massages/be-feet',
        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI3.src,
        time: ['20', '30'],
      },
    ],
  },
}

export default service
