import React, { FC } from 'react'
import PhotoAlbum from 'react-photo-album'
import { ThreeDots } from 'react-loader-spinner'

import { useAppDispatch, useAppSelector } from '../../store/hooks/storeHelpers'
import {
  selectError,
  selectLoadingPhoto,
  selectPhotos,
  selectShowPhotos,
} from '../../store/selectors/photoSelectors'
import cnImages from './Images.classname'
import { getCurrentBG } from '../../store/actions/currentBGActaions'

import './Images.css'

const Images: FC = () => {
  const error = useAppSelector(selectError)
  const loading = useAppSelector(selectLoadingPhoto)
  const images = useAppSelector(selectPhotos)
  const isShowImgs = useAppSelector(selectShowPhotos)

  const dispatch = useAppDispatch()

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
    return <div className={cnImages({ error: true })}>{error}</div>
  }

  if (!images.length || !isShowImgs) {
    return null
  }

  const handleClick = (event: React.MouseEvent) => {
    const { src } = event.currentTarget as HTMLImageElement

    dispatch(getCurrentBG(src))
  }

  return (
    <div className={cnImages()}>
      <PhotoAlbum photos={images} layout="columns" onClick={handleClick} />
    </div>
  )
}

export default Images
