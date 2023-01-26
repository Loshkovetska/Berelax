import banner from '../assets/location/banner.svg'
import img1 from '../assets/menu/image 12.png'
import img2 from '../assets/menu/image 300.png'
import img3 from '../assets/menu/FACE_LIFTER_0034 1.png'
import img4 from '../assets/menu/Rectangle 5.png'
import img5 from '../assets/menu/image 345.png'

const treatcat = {
  title: 'Massages',
  text:
    'In eu eu orci egestas bibendum proin consequat lectus. Egestas id cras neque orci arcu. Ultricies tempus, aliquam egestas sollicitudin in diam placerat. ',
  select1Title: 'Duration',
  select2Title: 'Location',
  select3Title: 'Body Part',
  select1: ['to 10', 'from 11 to 30', 'from 31'],
  select2: [
    'Atlanta International Airport',
    'Detroit Metropolitan Airport',
    'Dallas-Fort Worth International Airport',
    'Frankfurt Airport',
    'London Heathrow Airport',
  ],
  paramsForFilter: ['time', 'locations', 'bodyPart'], //bodyPart//serviceType
  select3: ['Back', 'Neck', 'Shoulders', 'Arms', 'Hands', 'Face', 'Legs'],
  // select3: ['Oxygen & Aromatherapy', 'Facial', 'Waxing'],

  banner: {
    title: 'Make your travels more comfortable with our products',
    buttonText: 'Explore our wellness products',
    img: banner,
    link: '',
  },
  categories: [
    {
      img: img1.src,
      title: 'Massages',
      link: '/treatments/massages',
    },
    {
      img: img2.src,
      title: 'nail care',
      link: '/treatments/nail-care',
    },
    {
      img: img3.src,
      title: 'beauty',
      link: '/treatments/beauty',
    },
    {
      img: img4.src,
      title: 'Wellness',
      link: '/treatments/wellness',
    },
    {
      img: img5.src,
      title: 'Combos',
      link: '/treatments/combos',
    },
  ],
}

export default treatcat
