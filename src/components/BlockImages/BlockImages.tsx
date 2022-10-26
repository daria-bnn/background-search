import React, { FC } from 'react'
import BlockImagesImage from './BlockImagesImage/BlockImagesImage'

import cnBlockImages from './BlockImages.classname'

import './BlockImages.css'

const BlockImages:FC = ({ chooseBack, data }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={chooseBack}
    className={cnBlockImages()}
    onKeyDown={chooseBack}
  >
    {data.map((el) => (
      <BlockImagesImage key={el.id} dataImg={el} />
    ))}
  </div>
)

export default BlockImages
