import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import CustomSlider from '../../../common/CustomSlider'
import InViewComponent from '../../../common/InViewComponent'
import PartnerItem from '../../../common/PartnerItem'

const PartnersList = observer(() => {
  const { content } = useContentState()
  return (
    <section className="partners-list">
      <div className="partners-list__container">
        <div className="partners-list__list">
          {content?.list?.map((li: any, id: number) => (
            <InViewComponent key={id} delay={0.1 * id}>
              <PartnerItem item={li} linkTitle={content?.linkText} />
            </InViewComponent>
          ))}
        </div>
        <div className="partners-list__slider">
          <CustomSlider
            slidesToShow={1}
            slidesToScroll={1}
            showArrows={false}
            variableWidth
            infinite={false}
          >
            {content?.list?.map((li: any, id: number) => (
              <InViewComponent key={id}>
                <PartnerItem item={li} linkTitle={content?.linkText} />
              </InViewComponent>
            ))}
          </CustomSlider>
        </div>
      </div>
    </section>
  )
})

export default PartnersList
