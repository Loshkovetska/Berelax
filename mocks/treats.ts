import sI1 from '../assets/home/image 303.png'
import sI2 from '../assets/home/image 305.png'
import sI3 from '../assets/home/image 314.png'
import sI4 from '../assets/home/image 315.png'
import banner from '../assets/treats/image 342.png'
const treats = {
  title: 'Treatments',
  text:
    'We understand that Southwest can turn over planes quickly and on time. With the hustle and bustle of this busy terminal we are able to offer quick, relaxing treatments for the on the go passenger. ',
  servicesBtn: 'See details',
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
  book: {
    title: 'Plan your relaxation in advance',
    text:
      'Take the opportunity to book the service in advance. Just fill out the reservation form and wait for a response from our manager. Make sure that you have 12 hours to reserve before you come to us.',
    buttonTitle: 'Book Now',
    buttonLink: '#',
  },
  banner: {
    title: 'Manicure & Pedicure',
    text:
      'Take the advantage of our combo offer. (Some additional text). Turpisproin sed quisque mi egestas id pellentesque viverra. Egestas dui.',
    buttonText: 'Discover our Combos',
    img: banner.src,
    link: '',
  },
  faq: {
    title: 'Frequently asked questions',
    buttonTitle: 'Explore more questions',
    link: '/faq',
    list: [
      {
        title: 'Diam mi augue est purus quam?',
        text:
          'Nisi, nisi, ornare lorem convallis enim, consectetur nulla proin. Risus id risus in purus nisl, a. Mi fermentum pretium ut varius dui integer tellus cursus semper. Nisi, tempus, nunc commodo vulputate. A erat facilisis egestas et nisl fringilla at.',
      },
      {
        title: 'Diam mi augue est purus quam?',
        text:
          'Nisi, nisi, ornare lorem convallis enim, consectetur nulla proin. Risus id risus in purus nisl, a. Mi fermentum pretium ut varius dui integer tellus cursus semper. Nisi, tempus, nunc commodo vulputate. A erat facilisis egestas et nisl fringilla at.',
      },
      {
        title: 'Diam mi augue est purus quam?',
        text:
          'Nisi, nisi, ornare lorem convallis enim, consectetur nulla proin. Risus id risus in purus nisl, a. Mi fermentum pretium ut varius dui integer tellus cursus semper. Nisi, tempus, nunc commodo vulputate. A erat facilisis egestas et nisl fringilla at.',
      },
    ],
  },
}

export default treats
