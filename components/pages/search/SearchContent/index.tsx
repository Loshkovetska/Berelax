import classNames from 'classnames'
import { observer } from 'mobx-react'
import { Fragment, useEffect, useState } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import Input from '../../../common/Input'
import Select from '../../../common/MainSelect'
import NewsPost from '../../../common/NewsPost'
import ProductItem from '../../../common/ProductItem'
import pI1 from '../../../../assets/products/product.png'
import im1 from '../../../../assets/news/Frame 14.png'
import sI1 from '../../../../assets/home/image 303.png'
import ServiceItem from '../../../common/ServiceItem'
import InViewComponent from '../../../common/InViewComponent'
import Title from '../../../common/Title'

const SearchContent = observer(() => {
  const { content } = useContentState()
  const [value, setTitle] = useState('')
  const [section, setSection] = useState('')
  const [results, setResults] = useState<any>({
    section: '',
    list: Array(),
  })
  useEffect(() => {
    if (sessionStorage.getItem('search-value')) {
      setTitle(sessionStorage.getItem('search-value') || '')
      search(sessionStorage.getItem('search-value') || '', content?.sections[0])
    }
    if (content?.sections) {
      setSection(content?.sections[0])
    }
  }, [])

  const search = (value: string, section: string) => {
    const fd = new FormData()
    fd.append('status', 'search')
    fd.append('value', value)
    fd.append('section', section)
    fetch('https://api.publicapis.org/entries', {
      //   method: 'POST',
      //   body: fd,
    }).then(() => {
      if (section == 'news') {
        setResults({
          section: 'news',
          list: [
            {
              id: 1,
              link: '/news/integer',
              title:
                'Facial massage with a jade <br/> stone. Techniques and tips.',
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
              title:
                'Facial massage with a jade<br/> stone. Techniques and tips.',
              text:
                'Aliquet amet nec justo, sit auctor nisl, nunc. Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis',
              datetime: '2022-10-16',
              cat: 'Beauty',
              readTime: '2min',
              img: im1.src,
            },
            {
              id: 3,
              link: '/news/integer',
              title:
                'Facial massage with a jade<br/> stone. Techniques and tips.',
              text:
                'Aliquet amet nec justo, sit auctor nisl, nunc. Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis',
              datetime: '2022-11-08',
              cat: 'Travel',
              readTime: '2min',
              img: im1.src,
            },
            {
              id: 1,
              link: '/news/integer',
              title: 'Integer rhoncus diam<br/> tristique odio donec.',
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
              title: 'Integer rhoncus diam<br/> tristique odio donec.',
              text:
                'Aliquet amet nec justo, sit auctor nisl, nunc. Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis',
              datetime: '2022-10-16',
              cat: 'Beauty',
              readTime: '2min',
              img: im1.src,
            },
            {
              id: 3,
              link: '/news/integer',
              title: 'Integer rhoncus diam<br/> tristique odio donec.',
              text:
                'Aliquet amet nec justo, sit auctor nisl, nunc. Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis Maecenas felis nunc id ut nisi, condimentum sit vulputate. Sit est suspendisse bibendum rutrum eget. Sapien mattis',
              datetime: '2022-11-06',
              cat: 'Travel',
              readTime: '2min',
              img: im1.src,
            },
          ],
        })
      }
      if (section == 'products') {
        setResults({
          section: 'products',
          list: [
            {
              id: 1,
              title: 'Original Plus Pillow Original Plus Pillow',
              text:
                'Ac, id interdum fusce vestibulum. Nulla tortor libero convallis sit. Suscipit nulla at a sed',
              link: '/products/travel-pillows/original-plus-pillow',
              img: pI1.src,
              color: ['red', 'black'],
              isNew: true,
              soldCount: 100,
              filling: ['inflatable'],
              bodyPart: ['neck', 'back'],
              heatOption: ['1', '2'],
              concern: ['firming', 'cleaning'],
              type: 'electric',
            },
            {
              id: 1,
              link: '/products/travel-pillows',
              title: 'Original Plus Pillow',
              text:
                'Ac, id interdum fusce vestibulum. Nulla tortor libero convallis sit. Suscipit nulla at a sed',
              img: pI1.src,
              color: ['black'],
              isNew: false,
              soldCount: 10,
              filling: ['microbead'],
              bodyPart: ['legs', 'back'],
              heatOption: ['1', '2'],
              concern: ['firming', 'cleaning'],
              type: 'manual',
            },
            {
              id: 1,
              link: '/products/travel-pillows',
              title: 'Original Plus Pillow',
              text:
                'Ac, id interdum fusce vestibulum. Nulla tortor libero convallis sit. Suscipit nulla at a sed',
              img: pI1.src,
              color: ['blue'],
              isNew: false,
              soldCount: 10,
              filling: ['microbead'],
              bodyPart: ['legs', 'back', 'calf'],
              heatOption: ['1', '2'],
              concern: ['firming', 'cleaning'],
              type: 'manual',
            },
          ],
        })
      }
      if (section == 'treatments') {
        setResults({
          section: 'treatments',
          list: [
            {
              title: 'Absolute Massage',
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

              text:
                'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
              img: sI1.src,
              time: ['20', '30', '40'],
              bodyPart: ['Shoulders', 'Legs'],
              locations: ['Frankfurt Airport', 'London Heathrow Airport'],
              serviceType: ['Oxygen & Aromatherapy'],
            },
            {
              title: 'Be Up',
              link: '/treatments/massages/be-up',
              text:
                'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
              img: sI1.src,
              time: ['20', '30', '40'],
              bodyPart: ['Back', 'Arms'],
              locations: ['Frankfurt Airport', 'Detroit Metropolitan Airport'],
              serviceType: ['Facial'],
            },
            {
              title: 'Be Feet',
              link: '/treatments/massages/be-feet',
              text:
                'Massage focused on full body muscle relief. It is ideal to relax your body within a short time and to help you sleep better on the plane.',
              img: sI1.src,
              time: ['20', '30'],
              bodyPart: ['Back', 'Face', 'Hands'],
              locations: [
                'Detroit Metropolitan Airport',
                'London Heathrow Airport',
              ],
              serviceType: ['Waxing', 'Facial'],
            },
          ],
        })
      }
    })
  }

  useEffect(() => {
    search(value, section)
  }, [section, value])
  return (
    <section className="search-content">
      <div className="search-content__container">
        <InViewComponent>
          <Title classStr="search-content__title" text={value} />
          <div className="search-content__count">
            {results.list?.length}{' '}
            {!results.list?.length || results.list?.length > 1
              ? 'results'
              : 'result'}
          </div>
        </InViewComponent>
        <InViewComponent delay={0.1}>
          <div className="search-content__search">
            <section className={'loc-select'}>
              <div className="loc-select__top">
                <Input
                  classStr=""
                  value={value}
                  setValue={setTitle}
                  placeHolder=""
                />

                <Button
                  inner={
                    <>
                      <IconComponent name="Search" />
                    </>
                  }
                  classStr="beige button-search"
                  isLink={false}
                  action={() => search(value, section)}
                />
              </div>
            </section>
            <Select
              defaultValue={section}
              placeholder={section}
              getValue={(value) => {
                if (!value.length) return
                setSection(value)
              }}
              multiple={false}
              dt={JSON.parse(
                JSON.stringify(content?.sections),
              ).sort((a: any, b: any) => a.localeCompare(b))}
            />
          </div>
        </InViewComponent>
        <div className="search-content__result">
          <InViewComponent delay={0.2}>
            <h2 className="search-content__result-title">
              {results.list?.length} “{value}” {results?.section}
            </h2>
          </InViewComponent>
          <div
            className={classNames(
              'search-content__result-list',
              results?.section == 'news' && 'single',
              results?.section == 'products' && 'three',
              results?.section == 'treatments' && 'two',
            )}
          >
            {results.list?.map((re: any, i: number) => (
              <Fragment key={i}>
                {results?.section == 'news' && (
                  <InViewComponent delay={i * 0.1 + 0.2}>
                    <NewsPost post={re} />
                  </InViewComponent>
                )}
                {results?.section == 'products' && (
                  <InViewComponent delay={i * 0.1 + 0.2}>
                    <ProductItem
                      item={re}
                      buttonText={content?.productButton}
                    />
                  </InViewComponent>
                )}
                {results?.section == 'treatments' && (
                  <InViewComponent delay={i * 0.1 + 0.2}>
                    <ServiceItem item={re} />
                  </InViewComponent>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default SearchContent
