import img from '../assets/story/im1.png'
import usa from '../assets/book/usa.png'
import UA from '../assets/book/UA.png'
const career = {
  title: 'Career',
  text:
    'Are you looking for a motivating professional challenge?Whether it`s head of a subsidiary, store manager, beautician or student intern, there is no doubt that a place for you exists at Be Relax!',
  blocks: [
    {
      img: img.src,
      title: 'Developing Talents',
      text:
        'At Be Relax, we are confident that the talent and potential of each person takes precedence over age, background or degree. We attach great importance to talent development. ',
    },
    {
      img: img.src,
      title: 'Developing Talents',
      text:
        'At Be Relax, we are confident that the talent and potential of each person takes precedence over age, background or degree. We attach great importance to talent development. ',
    },
    {
      img: img.src,
      title: 'Developing Talents',
      text:
        'At Be Relax, we are confident that the talent and potential of each person takes precedence over age, background or degree. We attach great importance to talent development. ',
    },
  ],
  offers: {
    title: 'Job Offers',
    buttonTitle: 'Permanent contract',

    select1: [
      'All Professional Type',
      'Accountant',
      'Admin',
      'Purchasing',
      'Cosmetologist',
    ],
    select2Placeholder: 'Location',
  },
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
    title: 'Spontaneous Application',
    text: 'You can send us your spontaneous application anytime.',
    fnamePlaceholder: 'First Name*',
    lnamePlaceholder: 'Last Name*',
    emailPlaceholder: 'Email Address*',
    cityPlaceHolder: 'City*',
    countryPlaceholder: 'Country*',
    phoneNumberPlaceholder: 'Phone Number*',
    profPlaceholder: 'Profession Type',
    locatePlaceholder: 'Location',
    msgPlaceholder: 'Tell us why you want to join our team*',
    buttonTitle: 'Apply this Job',
    uploadResume: 'Upload your resume*',
    coverLetter: 'Attach your covering letter',
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

export default career
