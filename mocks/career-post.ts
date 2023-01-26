import im1 from '../assets/news/Frame 14.png'
import usa from '../assets/book/usa.png'
import UA from '../assets/book/UA.png'

const careerPost = {
  title: 'Massage therapist',
  text:
    'This is an amazing opportunity for Massage therapists to deliver a first class experience to customers flying around the world.',
  img: im1.src,
  typeContract: 'Permanent contract',
  location: 'Anywhere',
  datetime: '2022-11-16',
  dateTimeText: 'Published on',
  buttonTitle: 'Apply for Job',
  positionTitle: 'Position',
  positionText: `<p>Licensed Massage Therapist
Be Relax is a Paris born Company and is a worldwide leader in the well-being industry. We offer beauty and relaxation services in airports all over the world. Be Relax enhances the customers journey through massage therapy and a wide range of specialized products to use while traveling.</p>
<p>We know people perform their best in an environment of trust, diversity, transparency and Positivity. At Be Relax, we know that great customer service starts with Happy Employees. Our mission is to promote a virtuous circle of excitement. Happiness is contagious!</p>
<p>We are seeking MASSAGE THERAPY ENTHUSIASTS for our spas at San Diego SAN airport that are driven, enjoy working in a Luxurious environment, and want to grow with the company. This is an amazing opportunity for Massage therapists to deliver a first class experience to customers flying around the world.</p>`,
  responsibilitiesTitle: 'Duties and responsibilities',
  responsibilitiesText: `
  <ul>
  <li>Providing excellent massage services</li>
    <li>Increasing personal sales by up-selling and promoting retail items to their customers</li>
      <li>Increasing team sales by cross-selling</li>
      <li>Effectively performing operations functions: spa opening and closing, operating the cash register, maintaining the cleanliness of the spa</li>
  </ul>`,
  profileTitle: 'Profile',
  profileText: `
  <ul>
  <li>Providing excellent massage services</li>
    <li>Increasing personal sales by up-selling and promoting retail items to their customers</li>
      <li>Increasing team sales by cross-selling</li>
      <li>Effectively performing operations functions: spa opening and closing, operating the cash register, maintaining the cleanliness of the spa</li>
  </ul>`,
  benefitsTitle: 'Benefits',
  benefitsText: `
  <ul>
  <li>Providing excellent massage services</li>
    <li>Increasing personal sales by up-selling and promoting retail items to their customers</li>
      <li>Increasing team sales by cross-selling</li>
      <li>Effectively performing operations functions: spa opening and closing, operating the cash register, maintaining the cleanliness of the spa</li>
  </ul>
  <p>Please send your application to <a href='mailto:sandiego@berelax.com'>sandiego@berelax.com</a>
Looking forward to hearing from you!</p>
  `,
  form: {
    title: 'Apply this Job',
    text: 'Please fill all the required fields to apply',
    fnamePlaceholder: 'First Name*',
    lnamePlaceholder: 'Last Name*',
    emailPlaceholder: 'Email Address*',
    cityPlaceHolder: 'City*',
    countryPlaceholder: 'Country*',
    phoneNumberPlaceholder: 'Phone Number*',
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

export default careerPost
