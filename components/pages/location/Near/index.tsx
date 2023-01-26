import { observer } from 'mobx-react'
import {
  useContentState,
  useRootStore,
} from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import CustomSlider from '../../../common/CustomSlider'
import { IconComponent } from '../../../common/IconComponent'
import InViewComponent from '../../../common/InViewComponent'
import NearItem from '../../../common/NearItem'

const Near = observer(() => {
  const { content } = useContentState()

  return (
    <section className="near-by">
      <div className="near-by__top">
        <h2
          className="near-by__title"
          dangerouslySetInnerHTML={{ __html: content?.nearTitle }}
        ></h2>
        <Button
          isLink
          link="/find-us"
          classStr="beige button-arrow button-svg p20p28"
          inner={
            <>
              {content?.nearButton} <IconComponent name={'arrow'} />
            </>
          }
        />
      </div>
      <div className="near-by__list">
        {content?.nearSpas.map((l: any, i: number) => (
          <InViewComponent delay={i * 0.1} key={i}>
            <NearItem item={l} />
          </InViewComponent>
        ))}
      </div>
      <div className="near-by__slider">
        <CustomSlider
          slidesToScroll={1}
          slidesToShow={1}
          infinite={false}
          variableWidth
        >
          {content?.nearSpas.map((l: any, i: number) => (
            <InViewComponent delay={i * 0.1} key={i}>
              <NearItem item={l} />
            </InViewComponent>
          ))}
        </CustomSlider>
      </div>
      <InViewComponent>
        <Button
          isLink
          link="/find-us"
          classStr="beige button-arrow button-svg p20p28"
          inner={
            <>
              {content?.nearButton} <IconComponent name={'arrow'} />
            </>
          }
        />
      </InViewComponent>
    </section>
  )
})

export default Near
