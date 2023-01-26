import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import ImageComponent from '../../../common/ImageComponent'
import InViewComponent from '../../../common/InViewComponent'
import Title40 from '../../../common/Title40'
import Title54 from '../../../common/Title54'

const Courses = observer(() => {
  const { content } = useContentState()
  return (
    <section className="courses">
      <div className="courses__container">
        <InViewComponent>
          <Title54 classStr="courses__title" text={content?.coursesTitle} />
        </InViewComponent>
        <div className="courses__list">
          {content?.courses?.map((co: any, i: number) => (
            <InViewComponent delay={i * 0.1} key={i}>
              <div className={classNames('courses__row', i == 1 && 'reverse')}>
                <>
                  <div className="courses__row-img">
                    <ImageComponent src={co.img} />
                  </div>
                  <div className="courses__row-block">
                    <Title40 text={co.title} classStr="courses__row-title" />
                    <div
                      className="courses__row-text"
                      dangerouslySetInnerHTML={{ __html: co.text }}
                    ></div>
                    <ul>
                      {co?.list?.map((re: any, id: number) => (
                        <li className="courses__row-text" key={id}>
                          {re}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              </div>
            </InViewComponent>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Courses
