import cnBlockImages from '../BlockImages.classname'

import './BlockImagesImage.css'

const BlockImagesImage = ({ dataImg }) => {
  const { urls } = dataImg
  const description = dataImg.alt_description

  return (
    <div className={cnBlockImages('Image')}>
      <img
        src={urls.regular}
        alt={description}
        className={cnBlockImages('ImageElement')}
      />
    </div>
  )
}

export default BlockImagesImage
