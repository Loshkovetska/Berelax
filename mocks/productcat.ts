import banner from '../assets/products/MUSCLE_THERAPY_0091 1.png'
import img1 from '../assets/menu/image 12.png'
import img2 from '../assets/menu/image 300.png'
import img3 from '../assets/menu/FACE_LIFTER_0034 1.png'
import img4 from '../assets/menu/Rectangle 5.png'

const productcat = {
  title: 'Travel pillows',
  text:
    'We understand that Southwest can turn over planes quickly and on time. With the hustle and bustle of this busy terminal we are able to offer quick, relaxing treatments for the on the go passenger. ',
  select1Title: 'Sort by',
  select1: ['Best seller', 'New'],
  categories: [
    {
      img: img1.src,
      title: 'Pillows',
      link: '/products/travel-pillows',
    },
    {
      img: img2.src,
      title: 'Travel accessories',
      link: '/products/travel-accessories/',
    },
    {
      img: img3.src,
      title: 'Massage devices',
      link: '/products/massage-devices/',
    },
    {
      img: img4.src,
      title: 'Beauty devices',
      link: '/products/beauty-devices/',
    },
  ],
  //electric
  //   select2Title: 'bodyPart',
  //   select2: ['neck', 'back', 'legs'],

  //   select3Title: 'Heating Option',
  //   select3: ['1', '2'],

  //pillows
  //select2Title:'Color',
  //   select2: ['blue', 'red', 'beige'],
  //   select3Title: 'Filling',
  //   select3: ['inflatable', 'memory foam', 'microbead'],

  //beauty
  //   select2Title: 'Concern',
  //   select2: ['anti-aging', 'firming', 'cleaning', 'glowing'],
  //   select3Title: 'Type',
  //   select3: ['electric', 'manual'],

  //travel
  select2Title: 'Color',
  select2: ['black', 'blue', 'red'],
  select3Title: 'Type',
  select3: ['electric', 'manual'],
  buttonText: 'See Details',
  banner: {
    title: 'Wellness Pillow Sleep Therapy ',
    text:
      'It combines soft and antiperspirant Tencel® fabric, ergo-smart shape for ultimate comfort and shiatsu point for complete relaxation.',
    link: '/products/pillows/wellness-pillow',
    buttonText: 'See Details',
    img: banner.src,
  },
  paramsForFilter: ['isNew', 'color', 'type'],
}

export default productcat
