import { observer } from 'mobx-react'
import { useContentState } from '../../../../hooks/RootStoreProvider'
import Button from '../../../common/Button'
import { IconComponent } from '../../../common/IconComponent'
import ImageComponent from '../../../common/ImageComponent'

const StoryBlocks = observer(() => {
  const { content } = useContentState()

  return (
    <section className="story-blocks">
      <div className="story-blocks__container">
        {content?.storyblocks?.map((st: any, i: number) => (
          <div className="story-blocks__item" key={i}>
            <div className="story-blocks__item-img">
              <ImageComponent src={st.img} alt={st.alt} />
            </div>
            <div className="story-blocks__item-cont">
              <div
                className="story-blocks__item-subtitle"
                style={{
                  color: `${st.color}`,
                }}
              >
                {st.subtitle}
              </div>
              <div
                className="story-blocks__item-title"
                style={{
                  color: `${st.color}`,
                }}
              >
                {st.title}
              </div>
            </div>
            <Button
              isLink
              link={`${st.link}`}
              classStr="button-arrow button-svg white p24"
              inner={
                <>
                  {st.buttonTitle} <IconComponent name={'arrow'} />
                </>
              }
            />
          </div>
        ))}
      </div>
    </section>
  )
})

export default StoryBlocks
