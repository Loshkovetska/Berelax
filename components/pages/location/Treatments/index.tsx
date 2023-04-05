import { observer } from 'mobx-react'
import { useWindowDimensions } from '../../../../hooks/getWindowDimensions'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import InViewComponent from '../../../common/InViewComponent'
import TreatmentItem from '../../../common/TreatmentItem'
const Treatments = observer(() => {
  const {
    content,
    header: { menu },
  } = useContentState()

  const list =
    menu.find((m: any) => m.link.includes('treatments'))?.submenu || []
  return (
    <section className="treatments">
      <div className="treatments__container">
        <InViewComponent>
          <div className="treatments__top">
            <h2
              className="treatments__title"
              dangerouslySetInnerHTML={{ __html: content?.treatmentsTitle }}
            ></h2>
            {/* <Button
              classStr="beige button-arrow button-svg"
              isLink
              link="/treatments"
              inner={
                <>
                  {content?.treatmentsButton}
                  <IconComponent name={'arrow'} />
                </>
              }
            /> */}
          </div>
        </InViewComponent>
        <div className="treatments__list">
          {content?.treatments.map((tr: any, i: number) => {
            const current = list?.find((l: any) => l.link.includes(tr.link))
            return (
              <InViewComponent key={i} delay={0.1 * i}>
                <TreatmentItem
                  item={{
                    ...tr,
                    img: current ? current?.img : tr.img,
                    alt: current ? current?.alt : tr.alt,
                  }}
                />
              </InViewComponent>
            )
          })}
        </div>
        {/* <InViewComponent>
          <Button
            classStr="beige button-arrow button-svg"
            isLink
            link="/treatments"
            inner={
              <>
                {content?.treatmentsButton}
                <IconComponent name={'arrow'} />
              </>
            }
          />
        </InViewComponent> */}
      </div>
    </section>
  )
})

export default Treatments
