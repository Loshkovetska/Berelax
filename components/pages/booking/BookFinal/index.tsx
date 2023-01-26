import classNames from 'classnames'
import { observer } from 'mobx-react'
import { Fragment } from 'react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'
import { UserData } from '../Steps'

const BookFinal = observer(() => {
  const { content } = useContentState()

  return (
    <section className="book-final">
      <div className="book-final__container">
        <InViewComponent>
          <div className="book-final__top">
            <h1
              className="book-final__title"
              dangerouslySetInnerHTML={{ __html: content?.result?.title }}
            ></h1>
            <div
              className="book-final__text"
              dangerouslySetInnerHTML={{ __html: content?.result?.text }}
            ></div>
            <Button
              isLink
              link="/"
              classStr={classNames(' beige button-arrow button-svg p20p40')}
              inner={
                <>
                  {' '}
                  {content?.result?.buttonTitle}
                  <IconComponent name="arrow" />
                </>
              }
            />
          </div>
        </InViewComponent>
        <InViewComponent delay={0.5}>
          <div className="book-final__content">
            <div className="book-final__img">
              <ImageComponent src={UserData?.treatments[0].img} />
            </div>
            <div className="book-final__table">
              <div className="book-final__table-col">
                <div className="book-final__row">
                  <div className="book-final__subtitle">
                    {content?.bookDetails?.locateTitle}
                  </div>
                  <div className="book-final__subtext">
                    {UserData.location?.title}
                    <br />
                    {UserData.location?.text}
                  </div>
                </div>
                {UserData.treatments?.map((tr, i) => (
                  <Fragment key={i}>
                    <div className="book-final__row">
                      <div className="book-final__subtitle">
                        {content?.bookDetails?.treatTitle}
                      </div>
                      <div className="book-final__subtext">{tr.name}</div>
                    </div>
                    <div className="book-final__row">
                      <div className="book-final__subtitle">
                        {content?.bookDetails?.duratTitle}
                      </div>
                      <div className="book-final__subtext">
                        {tr.time} min - ${tr.price}
                      </div>
                    </div>
                  </Fragment>
                ))}
                <div className="book-final__row">
                  <div className="book-final__subtitle">
                    {content?.bookDetails?.dateTitle}
                  </div>
                  <div className="book-final__subtext">
                    {new Date(UserData.date!).toLocaleDateString()}
                  </div>
                </div>
                <div className="book-final__row">
                  <div className="book-final__subtitle">
                    {content?.bookDetails?.startTitle}
                  </div>
                  <div className="book-final__subtext">{UserData.time}</div>
                </div>
              </div>

              <div className="book-final__table-col">
                <div className="book-final__row">
                  <div className="book-final__subtitle">
                    {content?.bookDetails?.fname}
                  </div>
                  <div className="book-final__subtext">{UserData.fname}</div>
                </div>
                <div className="book-final__row">
                  <div className="book-final__subtitle">
                    {content?.bookDetails?.lname}
                  </div>
                  <div className="book-final__subtext">{UserData.lname}</div>
                </div>
                <div className="book-final__row">
                  <div className="book-final__subtitle">
                    {content?.bookDetails?.phone}
                  </div>
                  <div className="book-final__subtext">{UserData.phone}</div>
                </div>
                <div className="book-final__row">
                  <div className="book-final__subtitle">
                    {content?.bookDetails?.email}
                  </div>
                  <div className="book-final__subtext">{UserData.email}</div>
                </div>
              </div>
            </div>
          </div>
        </InViewComponent>
      </div>
    </section>
  )
})

export default BookFinal
