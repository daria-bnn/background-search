import './Image.css'

const Image = (props) => {
  const { urls } = props.dataImg
  const description = props.dataImg.alt_description

  return (
    <div className="wrapper-image">
      <img src={urls.regular} alt={description} className="image" />
    </div>
  )
}

export default Image
