import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import InViewComponent from '../../../common/InViewComponent'
const BookBlock = observer(
  ({ isRepresent = false }: { isRepresent?: boolean }) => {
    const {
      content: { book },
    } = useContentState()
    return (
      <section className={classNames('book-block', isRepresent && 'represent')}>
        <InViewComponent>
          <div className="book-block__container">
            <div className="book-block__content">
              <div
                className="book-block__title"
                dangerouslySetInnerHTML={{ __html: book?.title }}
              ></div>
              <div
                className="book-block__text"
               
                dangerouslySetInnerHTML={{ __html: book?.text }}
              ></div>
              {!isRepresent ? (
                <Button
                  isLink
                  link="/booking"
                  classStr="beige button-arrow p20p40 button-svg"
                  inner={
                    <>
                      {book?.buttonTitle} <IconComponent name="arrow" />
                    </>
                  }
                />
              ) : (
                <a
                  download={'be-relax profile'}
                  href={book?.buttonLink}
                  className="button white p16p24 button-svg border-grey"
                >
                  {book?.buttonTitle} <IconComponent name="socials/download" />
                </a>
              )}
            </div>
          </div>
        </InViewComponent>
      </section>
    )
  },
)

export default BookBlock
