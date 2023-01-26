import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import CustomSlider from '../../../common/CustomSlider'
import { IconComponent } from '../../../common/IconComponent'
import InViewComponent from '../../../common/InViewComponent'
import Text from '../../../common/Text'
import Title54 from '../../../common/Title54'

const Follow = observer(() => {
  const { content } = useContentState()

  const follow = content?.follow
  return (
    <section className="follow-us linkedin">
      <div className="follow-us__container">
        <InViewComponent>
          <div className={classNames('follow-us__top')}>
            <Title54 classStr="follow-us__title" text={follow?.title} />
            <Text classStr="follow-us__text" text={follow?.text} />
            <Button
              classStr="white button-arrow button-svg p24"
              isLink
              link={follow?.link}
              target
              inner={
                <>
                  {follow?.textLink}
                  <IconComponent name={'arrow'} />
                </>
              }
            />
          </div>
        </InViewComponent>
        <div className="follow-us__blocks">
          {follow?.list?.map((f: any, i: number) => (
            <InViewComponent key={i} delay={f}>
              <div
                className="follow-us__blocks-item"
                dangerouslySetInnerHTML={{ __html: f }}
              ></div>
            </InViewComponent>
          ))}
        </div>
        <div className="follow-us__slider">
          <CustomSlider
            slidesToShow={1}
            slidesToScroll={1}
            infinite={false}
            variableWidth
          >
            {follow?.list?.map((f: any, i: number) => (
              <InViewComponent key={i} delay={f}>
                <div
                  className="follow-us__blocks-item"
                  dangerouslySetInnerHTML={{ __html: f }}
                ></div>
              </InViewComponent>
            ))}
          </CustomSlider>
        </div>
      </div>
    </section>
  )
})

export default Follow
