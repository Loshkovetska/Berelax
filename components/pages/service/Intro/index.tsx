import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import GlobalState, { changeCountryState } from '../../../../stores/GlobalState'
import InViewComponent from '../../../common/InViewComponent'
import ImageComponent from '../../../common/ImageComponent'
import Title from '../../../common/Title'
import { Fragment } from 'react'
import classNames from 'classnames'
const Intro = observer(() => {
  const { content } = useContentState()
  const book = () => {
    let amount = content?.price[0].amount.find((a: any) =>
      a.country.includes(GlobalState.currentLocale.country),
    )

    if (!amount) {
      amount = content?.price[0].amount.find((a: any) =>
        a.country.includes('United States of America'),
      )
    }

    localStorage.setItem(
      'treatment',
      JSON.stringify({
        id: content?.id,
        time: content?.price[0].time,
        category: content?.section,
        img: content?.img,
        name: content?.title,
        price: amount.value,
      }),
    )
    window.location.href = '/booking'
  }

  let pricelist: any = []

  pricelist = content?.price
    ?.map((p: any) => {
      if (p.amount) {
        let currency = 'USD',
          country = ''
        let amount = p.amount.find((a: any) =>
          GlobalState.currentLocale.country.includes(a.country),
        )
        if (amount) {
          currency = amount.currency
          country = amount.country
          amount = amount.value
        } else {
          // amount = p.amount.find((a: any) =>
          //   a.country.includes('United State of America'),
          // )
          // currency = amount?.currency || ''
          // if (amount) {
          //   country = amount?.country || ''
          //   amount = amount.value || 0
          // }

          return null
        }

        return {
          value: amount,
          currency,
          time: p.time,
          country,
        }
      }
    })
    .filter((c: any) => c)

  return (
    <section className="service-intro">
      <div className="service-intro__container">
        <InViewComponent animationClass="fadein service-intro__img-cont">
          <div className="service-intro__img">
            <ImageComponent src={content?.img} alt={content?.alt} />
          </div>
        </InViewComponent>
        <InViewComponent>
          <div className="service-intro__col">
            <Title classStr="service-intro__title" text={content?.title} />
            <div
              className="service-intro__text"
              dangerouslySetInnerHTML={{ __html: content?.text }}
            ></div>
            <Button
              classStr={`beige button-svg button-arrow p20p40 ${
                !pricelist?.length ? 'disabled' : ''
              }`}
              action={book}
              isLink={false}
              inner={
                <>
                  {content?.bookText}
                  <IconComponent name="arrow" />
                </>
              }
            />
            <div className="service-intro__responsive desk">
              <div className="service-intro__table">
                {pricelist.map((p: any, i: number) => {
                  if (!p.currency?.length || !p.value?.length)
                    return <Fragment key={i}></Fragment>
                  return (
                    <div className="service-intro__table-row" key={i}>
                      <span className="service-intro__table-time">
                        {p.time}{' '}
                        {content.section != 'nail-care' &&
                          content.section != 'beauty' &&
                          'mins'}
                      </span>
                      <span className="service-intro__table-price">
                        {p.currency} {p.value}
                      </span>
                    </div>
                  )
                })}
              </div>

              <div className="service-intro__bottom">
                <div className="service-intro__subtext">
                  {pricelist?.length
                    ? `*Prices are for ${pricelist[0].country} locations only   `
                    : `This service is unavailable in your location.  `}
                </div>
                <div
                  className="service-intro__link"
                  onClick={changeCountryState}
                >
                  {content?.changeLocationText}
                </div>
              </div>
            </div>
          </div>
        </InViewComponent>
        <div className="service-intro__responsive mob">
          <InViewComponent>
            <div className="service-intro__table">
              {pricelist.map((p: any, i: number) => {
                if (!p.currency?.length || !p.value?.length)
                  return <Fragment key={i}></Fragment>

                return (
                  <div className="service-intro__table-row" key={i}>
                    <span className="service-intro__table-time">
                      {p.time}{' '}
                      {content.section != 'nail-care' &&
                        content.section != 'beauty' &&
                        'mins'}
                    </span>
                    <span className="service-intro__table-price">
                      {p.currency} {p.value}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="service-intro__bottom">
              <div className="service-intro__subtext">
                {pricelist?.length
                  ? `*Prices are for ${pricelist[0].country} locations only   `
                  : `This service is unavailable in your location.  `}
              </div>
              <div className="service-intro__link" onClick={changeCountryState}>
                {content?.changeLocationText}
              </div>
            </div>
          </InViewComponent>
        </div>
      </div>
    </section>
  )
})

export default Intro
