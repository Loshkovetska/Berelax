import sI1 from '../assets/home/image 303.png'
import sI2 from '../assets/home/image 305.png'
import sI3 from '../assets/home/image 314.png'
import usa from '../assets/book/usa.png'
import UA from '../assets/book/UA.png'

const booking = {
  tabs: [
    {
      title: 'Location & Treatment',
      value: 'location',
    },
    {
      title: 'Date & Time',
      value: 'date',
    },
    {
      title: 'Client Info',
      value: 'info',
    },
  ],
  block1: {
    title: '1. Select location',
    text:
      'Arcu posuere in rhoncus leo volutpat aliquet. Dignissim tortor vitae dolor posuere tempor morbi hac elementum.',
    buttonTitle: 'Select Date & Time',
  },
  block2: {
    title: '2. Choose treatment & Duration',
    text:
      'Vulputate justo ultrices feugiat volutpat feugiat id congue. Natoque nibh turpis eu ante fermentum viverra sit volutpat tempus. Porta duis turpis cursus.',
    cards: [
      {
        id: 1,
        section: 'massage',
        title: 'Absolute Massage',
        link: '/treatments/massages/absolute-massage',
        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI1.src,
        bodyPart: ['Neck', 'Legs'],
        locations: [
          'Atlanta International Airport',
          'Detroit Metropolitan Airport',
        ],
        serviceType: ['Oxygen & Aromatherapy'],
        price: [
          {
            time: '20',
            amount: '70',
          },
          {
            time: '30',
            amount: '90',
          },
          {
            time: '40',
            amount: '110',
          },
          {
            time: '60',
            amount: '120',
          },
        ],
      },
      {
        id: 2,

        section: 'massage',
        title: 'Be Relax',
        link: '/treatments/massages/be-relax',

        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI2.src,
        bodyPart: ['Shoulders', 'Legs'],
        locations: ['Frankfurt Airport', 'London Heathrow Airport'],
        serviceType: ['Oxygen & Aromatherapy'],
        price: [
          {
            time: '20',
            amount: '70',
          },
          {
            time: '30',
            amount: '90',
          },
          {
            time: '40',
            amount: '110',
          },
          {
            time: '60',
            amount: '120',
          },
        ],
      },
      {
        id: 3,

        section: 'massage',

        title: 'Be Up',
        link: '/treatments/massages/be-up',
        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI3.src,
        price: [
          {
            time: '20',
            amount: '70',
          },
          {
            time: '30',
            amount: '90',
          },
          {
            time: '40',
            amount: '110',
          },
          {
            time: '60',
            amount: '120',
          },
        ],
        bodyPart: ['Back', 'Arms'],
        locations: ['Frankfurt Airport', 'Detroit Metropolitan Airport'],
        serviceType: ['Facial'],
      },
      {
        section: 'massage',
        id: 4,

        title: 'Be Feet',
        link: '/treatments/massages/be-feet',
        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI3.src,
        price: [
          {
            time: '20',
            amount: '70',
          },
          {
            time: '30',
            amount: '90',
          },
          {
            time: '40',
            amount: '110',
          },
          {
            time: '60',
            amount: '120',
          },
        ],
        bodyPart: ['Back', 'Face', 'Hands'],
        locations: ['Detroit Metropolitan Airport', 'London Heathrow Airport'],
        serviceType: ['Waxing', 'Facial'],
      },
      {
        section: 'nail-care',
        id: 5,

        title: 'Be Feet',
        link: '/treatments/massages/be-feet',
        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI3.src,
        price: [
          {
            time: '20',
            amount: '70',
          },
          {
            time: '30',
            amount: '90',
          },
        ],
        bodyPart: ['Back', 'Face', 'Hands'],
        locations: ['Detroit Metropolitan Airport', 'London Heathrow Airport'],
        serviceType: ['Waxing', 'Facial'],
      },
      {
        id: 6,

        section: 'nail-care',

        title: 'Be Feet',
        link: '/treatments/massages/be-feet',
        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI3.src,
        price: [
          {
            time: '20',
            amount: '70',
          },
          {
            time: '30',
            amount: '90',
          },
        ],
        bodyPart: ['Back', 'Face', 'Hands'],
        locations: ['Detroit Metropolitan Airport', 'London Heathrow Airport'],
        serviceType: ['Waxing', 'Facial'],
      },
      {
        section: 'beauty',
        id: 7,

        title: 'Be Feet',
        link: '/treatments/massages/be-feet',
        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI3.src,
        price: [
          {
            time: '20',
            amount: '70',
          },
          {
            time: '30',
            amount: '90',
          },
        ],
        bodyPart: ['Back', 'Face', 'Hands'],
        locations: ['Detroit Metropolitan Airport', 'London Heathrow Airport'],
        serviceType: ['Waxing', 'Facial'],
      },
      {
        section: 'beauty',
        id: 8,

        title: 'Be Feet',
        link: '/treatments/massages/be-feet',
        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI3.src,
        price: [
          {
            time: '20',
            amount: '70',
          },
          {
            time: '30',
            amount: '90',
          },
        ],
        bodyPart: ['Back', 'Face', 'Hands'],
        locations: ['Detroit Metropolitan Airport', 'London Heathrow Airport'],
        serviceType: ['Waxing', 'Facial'],
      },
      {
        section: 'beauty',
        id: 9,

        title: 'Be Feet',
        link: '/treatments/massages/be-feet',
        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI3.src,
        price: [
          {
            time: '20',
            amount: '70',
          },
          {
            time: '30',
            amount: '90',
          },
        ],
        bodyPart: ['Back', 'Face', 'Hands'],
        locations: ['Detroit Metropolitan Airport', 'London Heathrow Airport'],
        serviceType: ['Waxing', 'Facial'],
      },
      {
        section: 'wellness',
        id: 10,

        title: 'Be Feet',
        link: '/treatments/massages/be-feet',
        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI3.src,
        price: [
          {
            time: '20',
            amount: '70',
          },
          {
            time: '30',
            amount: '90',
          },
        ],
        bodyPart: ['Back', 'Face', 'Hands'],
        locations: ['Detroit Metropolitan Airport', 'London Heathrow Airport'],
        serviceType: ['Waxing', 'Facial'],
      },
      {
        section: 'wellness',
        id: 11,

        title: 'Be Feet',
        link: '/treatments/massages/be-feet',
        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI3.src,
        price: [
          {
            time: '20',
            amount: '70',
          },
          {
            time: '30',
            amount: '90',
          },
        ],
        bodyPart: ['Back', 'Face', 'Hands'],
        locations: ['Detroit Metropolitan Airport', 'London Heathrow Airport'],
        serviceType: ['Waxing', 'Facial'],
      },
      {
        section: 'combos',
        id: 11,

        title: 'Be Feet',
        link: '/treatments/massages/be-feet',
        text:
          'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
        img: sI3.src,
        price: [
          {
            time: '20',
            amount: '70',
          },
          {
            time: '30',
            amount: '90',
          },
        ],
        bodyPart: ['Back', 'Face', 'Hands'],
        locations: ['Detroit Metropolitan Airport', 'London Heathrow Airport'],
        serviceType: ['Waxing', 'Facial'],
      },
    ],
  },
  backTitle: 'Back to ',
  bookDetails: {
    title: 'Booking Details',
    locateTitle: 'Location:',
    treatTitle: 'Treatment:',
    duratTitle: 'Duration:',
    dateTitle: 'Date:',
    startTitle: 'Starts at:',
    fname: 'First Name:',
    lname: 'Last Name:',
    phone: 'Phone:',
    email: 'Email:',
  },
  popDurationTitle: 'Select Duration',
  popCalendarText: '*London Time Zone',
  block3: {
    title: '3. Select Date & Time',
    text:
      'Make sure that you have 12 hours to reserve before you come to us. Just fill out the reservation form and wait for a response from our manager. ',
    datePlaceholder: 'Select date',
    timePlaceholder: 'Select time',
    buttonTitle: 'Fill in Contact Info',
    time: ['10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm'],
  },
  block4: {
    buttonTitle: 'Confirm Booking',
    title: '4. Fill in contact info',
    text:
      'Diam placerat pellentesque velit tristique magna at. At maecenas enim volutpat nunc. Commodo mi diam mauris fermentum eget quis donec. ',
    fnamePlaceholder: 'First Name*',
    lnamePlaceholder: 'Last Name*',
    emailPlaceholder: 'Email Address*',
    phonePlaceholder: 'Phone Number*',
    addInfoPlaceholder: 'Any additional request?',
    onecheck: 'I agree with BeRelax Terms & Conditions',
    secondcheck:
      'Subscribe to be one of first to receive our promotions, cool offers and get other relevant information.',
  },
  phoneCodes: [
    {
      code: '+1',
      flag: usa.src,
      title: 'United States of America',
    },
    {
      code: '+380',
      flag: UA.src,
      title: 'Ukraine',
    },
  ],
  result: {
    title: 'Booking request has been successfully sent ',
    text:
      'Wait for a confirmation from our manager during 12 hours  We will do our best to honour your reservation according to the number  of customers. We hope to welcome you very soon at our SPA.',
    buttonTitle: 'Home page',
  },
}

export default booking
