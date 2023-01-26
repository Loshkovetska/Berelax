import partner from '../assets/location/Logo (1).png'
import usa from '../assets/book/usa.png'
import UA from '../assets/book/UA.png'
const partners = {
  title: 'Partners',
  text:
    'Are you looking for a motivating professional challenge?Whether it`s head of a subsidiary, store manager, beautician or student intern, there is no doubt that a place for you exists at Be Relax!',
  linkText: 'Visit website',
  list: [
    {
      text:
        'Mauris in hac eros sapien congue volutpat tempor eu diam. Sed mauris eu suspendisse felis ut lectus. Id semper lobortis ultricies.',
      src: partner.src,
      link: '',
    },
    {
      text:
        'Mauris in hac eros sapien congue volutpat tempor eu diam. Sed mauris eu suspendisse felis ut lectus. Id semper lobortis ultricies.',
      src: partner.src,
      link: '',
    },
    {
      text:
        'Mauris in hac eros sapien congue volutpat tempor eu diam. Sed mauris eu suspendisse felis ut lectus. Id semper lobortis ultricies.',
      src: partner.src,
      link: '',
    },
    {
      text:
        'Mauris in hac eros sapien congue volutpat tempor eu diam. Sed mauris eu suspendisse felis ut lectus. Id semper lobortis ultricies.',
      src: partner.src,
      link: '',
    },
    {
      text:
        'Mauris in hac eros sapien congue volutpat tempor eu diam. Sed mauris eu suspendisse felis ut lectus. Id semper lobortis ultricies.',
      src: partner.src,
      link: '',
    },
    {
      text:
        'Mauris in hac eros sapien congue volutpat tempor eu diam. Sed mauris eu suspendisse felis ut lectus. Id semper lobortis ultricies.',
      src: partner.src,
      link: '',
    },
  ],
  follow: {
    title: 'Follow Us on Linkedin',
    text: 'Sudscribe to get our latest news and future opportunities.',
    textLink: 'Visit our Profile',
    link: '',
    list: [
      `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7000457907980877824" height="439" width="504" frameborder="0" allowfullscreen="" title="Встроенная публикация"></iframe>`,
      `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6972914216538136576" height="523" width="504" frameborder="0" allowfullscreen="" title="Встроенная публикация"></iframe>`,
      `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6945400486996901888" height="481" width="504" frameborder="0" allowfullscreen="" title="Встроенная публикация"></iframe>`,
    ],
  },
  form: {
    title: 'Become our partner',
    text:
      'You have a partnership idea that can revolutionize the airport wellness world? Please share it with us.',
    fnamePlaceholder: 'First Name*',
    lnamePlaceholder: 'Last Name*',
    emailPlaceholder: 'Email Address*',
    phoneNumberPlaceholder: 'Phone Number*',
    companyPlaceholder: 'Company',
    msgPlaceholder: 'Share your idea with us',
    buttonTitle: 'Send Request',
    upload: 'Upload a file',
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
  },

  pop: {
    title: 'Thank you!',
    text:
      'Your request has been successfully sent. We will contact you to discuss all details.',
    buttonTitle: 'Got It!',
  },
}

export default partners
