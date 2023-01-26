import im1 from '../assets/news/1.png'
import im2 from '../assets/news/2.png'
import im3 from '../assets/news/3.png'

const news = {
  title: 'News',
  text:
    'Immerse yourself in an atmosphere of relaxation and get the most out of our articles. Useful tips, reviews of cosmetics, massage techniques and more.  We have gathered the best information for yous',
  top: {
    title: 'Top Articles',
    list: [
      {
        id: 1,
        link: '/news/integer',
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
        link: '/news/integer',
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
        link: '/news/integer',
        title: 'Facial massage with a jade stone. Techniques and tips.',
        isNew: true,
        text:
          'Aliquet amet nec justo, sit auctor nisl, nunc. Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis',
        datetime: '2022-11-08',
        cat: 'Travel',
        readTime: '2min',
        img: im2.src,
      },
    ],
  },

  select1: ['Newest First', 'Popular First'],
  select2: ['All Topics', 'Massage', 'Beauty', 'Travel'],
  select3: ['All Durations', '2 mins', '5 mins', '10 mins'],
  loadButton: 'Load more',
}

export default news
