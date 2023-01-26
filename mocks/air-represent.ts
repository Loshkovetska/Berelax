import img from '../assets/story/term.png'
import ic1 from '../assets/story/service.svg'
import ic2 from '../assets/story/award.svg'
import ic3 from '../assets/story/plane.svg'
import ic4 from '../assets/story/love.svg'

import usa from '../assets/book/usa.png'
import UA from '../assets/book/UA.png'
const airRepresent = {
  title: 'Be Relax in your airport',
  text: `Get ready to take airport experiences to the next level! Do you want to offer something different from restaurants and gift stores to your visitors? Connect with us today and let's elevate the journey of passengers together. Wellness is the new Black.`,
  img: img.src,
  values: {
    title: 'Company Value',
    list: [
      {
        title: 'Passion for service',
        icon: ic1,
        text:
          '(Need text here)  diam ridiculus congue blandit. Lorem ut mi senectus non. Pharetra mauris id massa pulvinar quis ipsum convallis. Elementum fames duis elit aliquam tempus feugiat. Et et nisi enim id. In venenatis sed ',
      },
      {
        title: 'Winning spirit',
        icon: ic2,
        text:
          'We want to grow and to be number one. Innovation, creation and development are key! We wish to continuously improve ourselves at every opportunity and always turn towards the action.',
      },
      {
        title: 'Open-mindedness',
        icon: ic3,
        text:
          '(Need text here)  diam ridiculus congue blandit. Lorem ut mi senectus non. Pharetra mauris id massa pulvinar quis ipsum convallis. Elementum fames duis elit aliquam tempus feugiat. Et et nisi enim id. In venenatis sed ',
      },
      {
        title: 'Confidence',
        icon: ic4,
        text:
          'We respect our colleagues and our clients. We trust the abilities and intentions of each and everyone. We believe that people work better in an environment of trust. We work in a transparent environment.',
      },
    ],
  },

  form: {
    title: 'Want a Be Relax Spa in your airport?',
    text:
      'Please fill all the required field and we will get in touch with you shortly',
    fnamePlaceholder: 'First Name*',
    lnamePlaceholder: 'Last Name*',
    emailPlaceholder: 'Email Address*',
    phoneNumberPlaceholder: 'Phone Number*',
    companyPlaceholder: 'Company/Airport*',
    msgPlaceholder: 'Tell us more ',
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

export default airRepresent
  // book: {
  //   title: 'Be Relax Profile',
  //   text:
  //     'Neque tristique odio nunc amet maecenas. Id sed commodo odio nec. Sed congue mauris eu nibh pretium fringilla viverra donec ',
  //   buttonTitle: 'Download company profile',
  //   buttonLink: '#',
  // },