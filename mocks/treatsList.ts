import sI1 from '../assets/home/image 303.png'
import sI2 from '../assets/home/image 305.png'
import sI3 from '../assets/home/image 314.png'

const treatsList = [
  {
    title: 'Absolute Massage',
    category: 'massages',
    link: '/treatments/massages/absolute-massage',
    text:
      'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
    img: sI1.src,
    time: ['30', '60'],
    bodyPart: ['Neck', 'Legs'],
    locations: [
      'Atlanta International Airport',
      'Detroit Metropolitan Airport',
    ],
    serviceType: ['Oxygen & Aromatherapy'],
  },
  {
    title: 'Be Relax',
    link: '/treatments/massages/be-relax',
    category: 'massages',

    text:
      'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
    img: sI2.src,
    time: ['20', '30', '40'],
    bodyPart: ['Shoulders', 'Legs'],
    locations: ['Frankfurt Airport', 'London Heathrow Airport'],
    serviceType: ['Oxygen & Aromatherapy'],
  },
  {
    title: 'Be Up',
    link: '/treatments/massages/be-up',
    category: 'massages',

    text:
      'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
    img: sI3.src,
    time: ['20', '30', '40'],
    bodyPart: ['Back', 'Arms'],
    locations: ['Frankfurt Airport', 'Detroit Metropolitan Airport'],
    serviceType: ['Facial'],
  },
  {
    title: 'Be Feet',
    link: '/treatments/massages/be-feet',
    category: 'massages',

    text:
      'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
    img: sI3.src,
    time: ['20', '30'],
    bodyPart: ['Back', 'Face', 'Hands'],
    locations: ['Detroit Metropolitan Airport', 'London Heathrow Airport'],
    serviceType: ['Waxing', 'Facial'],
  },
]

export default treatsList
