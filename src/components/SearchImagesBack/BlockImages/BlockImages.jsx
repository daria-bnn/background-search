import { cn } from '@bem-react/classname'

import "./BlockImages.css"

import BlockImagesImage from './BlockImagesImage/BlockImagesImage'

const cnBlockImages = cn('BlockImages')

const BlockImages = ({ chooseBack, data }) => (
  <div
    role="button"
    tabIndex="0"
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
