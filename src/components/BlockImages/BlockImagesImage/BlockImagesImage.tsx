import React, { FC } from 'react'
import cnBlockImages from '../BlockImages.classname'

import './BlockImagesImage.css'

const BlockImagesImage: FC = ({ dataImg }) => {
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
