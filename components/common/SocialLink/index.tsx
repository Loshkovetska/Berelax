import ImageComponent from "../ImageComponent"

const SocialLink = ({
  link,
  icon,
  classStr = 'footer__socials-item',
  isClickable = true,
}: {
  link?: string
  icon: string
  classStr?: string
  isClickable?: boolean
}) => {
  return (
    <>
      {isClickable ? (
        <a href={link} className={classStr} target={'_blank'} rel="noreferrer">
          <ImageComponent src={icon} />
        </a>
      ) : (
        <div className={classStr}>
          <ImageComponent src={icon} />
        </div>
      )}
    </>
  )
}

export default SocialLink
