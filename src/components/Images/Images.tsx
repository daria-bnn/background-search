import React, { FC } from 'react'
import PhotoAlbum from 'react-photo-album'
import { ThreeDots } from 'react-loader-spinner'

import { useAppSelector } from '../../store/hooks/storeHelpers'
import {
  selectError,
  selectLoadingPhoto,
  selectPhotos,
} from '../../store/selectors/photoSelectors'
import cnImages from './Images.classname'

import './Images.css'

const Images: FC = () => {
  const error = useAppSelector(selectError)
  const loading = useAppSelector(selectLoadingPhoto)
  const images = useAppSelector(selectPhotos)

  if (loading) {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#fe5f55"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible
      />
    )
  }

  if (error) {
    return <div className={cnImages({error: true})}>{error}</div>
  }

  if (!images.length) {
    return null
  }

  const handleClick = () => {
    console.log({ images })
  }

  return (
    <div className={cnImages()}>
      <PhotoAlbum photos={images} layout="columns" onClick={handleClick} />
    </div>
  )
}

export default Images
