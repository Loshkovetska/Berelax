import img from '../assets/gallery/Be Relax Philadelphia (1) 1.png'
import bg from '../assets/news/Frame 411.png'
import banner from '../assets/location/banner.svg'
import bg1 from '../assets/news/Frame 411 (1).png'
import bg2 from '../assets/news/Frame 412.png'
import s1 from '../assets/socials/instagram.svg'
import s2 from '../assets/socials/linkedin.svg'
import s3 from '../assets/socials/facebook.svg'
import im1 from '../assets/news/Frame 14.png'
import im2 from '../assets/news/Frame 14 (1).png'
import im3 from '../assets/news/Frame 14 (2).png'

const newsPost = {
  title: 'Become the master of baggage packing',
  text:
    'Be Relax’s mission is to make your journey more enjoyable and less stressful, and that’s why we put together some packing tips that will help you to handle the trip preparation with less stress. Get ready to become the luggage packing master with these five tips.',
  img: img.src,
  written: 'written by',
  author: 'John Norman',
  publish: 'published on',
  datetime: '2022-11-15',
  share: 'Share Article',
  content: `
    <h2>Luggage requirements in one place</h2>
    <p>Every flight company has different <a href='/dd'>Link here</a> luggage sizes and quantities requirements, which can be pretty overwhelming. Discover the overview of check-in baggage allowances for more than 60 flight companies here. The carry-on allowance can be found here. </p>
    <h2>Luggage requirements in one place</h2>
    <p>Every flight company has different luggage sizes and quantities requirements, which can be pretty overwhelming. Discover the overview of check-in baggage allowances for more than 60 flight companies here. The carry-on allowance can be found here. </p>
    <img src='${bg.src}' alt='be-relax'/>
     <h2>Luggage requirements in one place</h2>
    <p>Every flight company has different luggage sizes and quantities requirements, which can be pretty overwhelming. Discover the overview of check-in baggage allowances for more than 60 flight companies here. The carry-on allowance can be found here. </p>
        <p>Every flight company has different luggage sizes and quantities requirements, which can be pretty overwhelming. Discover the overview of check-in baggage allowances for more than 60 flight companies here. The carry-on allowance can be found here. </p>
          <p>Every flight company has different luggage sizes and quantities requirements, which can be pretty overwhelming. Discover the overview of check-in baggage allowances for more than 60 flight companies here. The carry-on allowance can be found here. </p>
<div>
    <img src='${bg1.src}' alt='be-relax'/>
    <img src='${bg2.src}' alt='be-relax'/>
</div>
  <h2>Luggage requirements in one place</h2>
    <p>Every flight company has different luggage sizes and quantities requirements, which can be pretty overwhelming. Discover the overview of check-in baggage allowances for more than 60 flight companies here. The carry-on allowance can be found here. </p>
        <p>Every flight company has different luggage sizes and quantities requirements, which can be pretty overwhelming. Discover the overview of check-in baggage allowances for more than 60 flight companies here. The carry-on allowance can be found here. </p>
   <h2>Luggage requirements in one place</h2>
<ul><li>alalal</li> <li>alalal</li></ul>

   <h3>Luggage requirements in one place</h3>
<ol><li>alalal</li> <li>alalal</li></ol>
<div>
    <img src='${bg1.src}' alt='be-relax'/>
    <img src='${bg2.src}' alt='be-relax'/>
</div>
        `,
  socials: [
    {
      icon: s1,
      link: 'https://instagram.com/',
    },
    {
      icon: s2,
      link: 'https://instagram.com/',
    },
    {
      icon: s3,
      link: 'https://instagram.com/',
    },
  ],
  banner: {
    title: 'Your tailor-made massage!',
    text:
      'Irotate Body Massager provides a unique massage with 4 interchangeable attachments to eliminate cellulite, smooth skin and relax muscle aches.',
    buttonText: 'Explore our product',
    img: banner,
    link: '',
  },
  similiar: {
    title: 'You may also like',
    text:
      'Simple and efficient airport spa service accessible to everyone before take-off.  Need to freshen up before your flight ',
    buttonTitle: 'See All News',
    buttonLink: '/news',
    cards: [
      {
        id: 1,
        link: 'integer',
        title: 'Facial massage with a jade  stone. Techniques and tips.',
        isNew: true,
        text:
          'Aliquet amet nec justo, sit auctor nisl, nunc. Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis',
        datetime: '2022-10-11',
        cat: 'Massage',
        readTime: '5min',
        img: im1.src,
      },
      {
        id: 2,
        link: 'integer',
        title: 'Facial massage with a jade stone. Techniques and tips.',
        isNew: true,
        text:
          'Aliquet amet nec justo, sit auctor nisl, nunc. Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis',
        datetime: '2022-10-16',
        cat: 'Beauty',
        readTime: '2min',
        img: im3.src,
      },
      {
        id: 3,
        link: 'integer',
        title: 'Facial massage with a jade stone. Techniques and tips.',
        isNew: true,
        text:
          'Aliquet amet nec justo, sit auctor nisl, nunc. Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis',
        datetime: '2022-11-08',
        cat: 'Travel',
        readTime: '2min',
        img: im2.src,
      },
      {
        id: 1,
        link: 'integer',
        title: 'Facial massage with a jade  stone. Techniques and tips.',
        isNew: true,
        text:
          'Aliquet amet nec justo, sit auctor nisl, nunc. Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis',
        datetime: '2022-10-11',
        cat: 'Massage',
        readTime: '5min',
        img: im1.src,
      },
      {
        id: 2,
        link: 'integer',
        title: 'Facial massage with a jade stone. Techniques and tips.',
        isNew: true,
        text:
          'Aliquet amet nec justo, sit auctor nisl, nunc. Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis',
        datetime: '2022-10-16',
        cat: 'Beauty',
        readTime: '2min',
        img: im3.src,
      },
      {
        id: 3,
        link: 'integer',
        title: 'Facial massage with a jade stone. Techniques and tips.',
        isNew: true,
        text:
          'Aliquet amet nec justo, sit auctor nisl, nunc. Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis',
        datetime: '2022-11-08',
        cat: 'Travel',
        readTime: '2min',
        img: im2.src,
      },
      {
        id: 1,
        link: 'integer',
        title: 'Facial massage with a jade  stone. Techniques and tips.',
        isNew: true,
        text:
          'Aliquet amet nec justo, sit auctor nisl, nunc. Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis',
        datetime: '2022-10-11',
        cat: 'Massage',
        readTime: '5min',
        img: im1.src,
      },
      {
        id: 2,
        link: 'integer',
        title: 'Facial massage with a jade stone. Techniques and tips.',
        isNew: true,
        text:
          'Aliquet amet nec justo, sit auctor nisl, nunc. Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis',
        datetime: '2022-10-16',
        cat: 'Beauty',
        readTime: '2min',
        img: im3.src,
      },
    ],
  },
}

export default newsPost
