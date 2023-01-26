import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import InViewComponent from '../../../common/InViewComponent'
import SocialLink from '../../../common/SocialLink'
const FindUs = observer(() => {
  const { content } = useContentState()
  const find = content?.find
  return (
    <InViewComponent>
      <section className="find-us">
        <div className="find-us__container">
          <div className="find-us__col">
            <h2
              className="find-us__title"
              dangerouslySetInnerHTML={{ __html: find?.title }}
            ></h2>
            <div
              className="find-us__text"
              dangerouslySetInnerHTML={{ __html: find?.text }}
            ></div>
            <Button
              classStr="white button-svg button-arrow"
              isLink
              link="/find-us"
              inner={
                <>
                  {find?.buttonTitle} <IconComponent name="arrow" />
                </>
              }
            />
          </div>
          <div className="find-us__contacts">
            {find?.contacts?.map((co: any, i: number) => (
              <div className="find-us__contacts-item" key={i}>
                <SocialLink isClickable={false} icon={co.icon} />
                {co.isLink ? (
                  <a href={(co.isPhone ? `tel:` : 'mailto:') + co.text}>
                    {co.text}
                  </a>
                ) : (
                  <div>{co.text}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </InViewComponent>
  )
})
export default FindUs
