import './BlockImagesImage.css'

const BlockImagesImage = ({ dataImg }) => {
  const { urls } = dataImg
  const description = dataImg.alt_description

  return (
    <div className="wrapper-image">
      <img src={urls.regular} alt={description} className="image" />
    </div>
  )
}

export default BlockImagesImage
