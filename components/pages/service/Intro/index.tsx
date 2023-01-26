import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import GlobalState, { changeCountryState } from '../../../../stores/GlobalState'
import InViewComponent from '../../../common/InViewComponent'
import ImageComponent from '../../../common/ImageComponent'
import Title from '../../../common/Title'
const Intro = observer(() => {
  const { content } = useContentState()
  const book = () => {
    let amount = content?.price[0].amount.find((a: any) =>
      a.country.includes(GlobalState.currentLocale.country),
    )

    localStorage.setItem(
      'treatment',
      JSON.stringify({
        id: content?.id,
        time: content?.price[0].time,
        section: content?.section,
        img: content?.img,
        name: content?.title,
        price: amount.value,
      }),
    )
    window.location.href = '/booking'
  }

  let pricelist: any = []

  pricelist = content?.price.map((p: any) => {
    if (p.amount) {
      let currency = '€'
      let amount = p.amount.find((a: any) =>
        GlobalState.currentLocale.country.includes(a.country),
      )

      if (amount) {
        currency = amount.currency
        amount = amount.value
      } else {
        amount = p.amount.find((a: any) => a.country.includes('Germany'))
        currency = amount.currency

        if (amount) {
          amount = amount.value
        }
      }

      return {
        value: amount,
        currency,
        time: p.time,
      }
    }
  })
  return (
    <section className="service-intro">
      <div className="service-intro__container">
        <InViewComponent>
          <div className="service-intro__img">
            <ImageComponent src={content?.img} />
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
              classStr="beige button-svg button-arrow p20p40"
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
                  return (
                    <div className="service-intro__table-row" key={i}>
                      <span className="service-intro__table-time">
                        {p.time} mins
                      </span>
                      <span className="service-intro__table-price">
                        {p.currency} {p.value}
                      </span>
                    </div>
                  )
                })}
              </div>
              <div className="service-intro__bottom">
                <div className="service-intro__subtext">{content?.subText}</div>
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
                return (
                  <div className="service-intro__table-row" key={i}>
                    <span className="service-intro__table-time">
                      {p.time} mins
                    </span>
                    <span className="service-intro__table-price">
                      {p.currency} {p.value}
                    </span>
                  </div>
                )
              })}
            </div>
            <div className="service-intro__bottom">
              <div className="service-intro__subtext">{content?.subText}</div>
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
