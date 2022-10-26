import React, { FC } from 'react'

import cnSearchImagesBack from './SearchImagesBack.classname'
import SearchBar from '../SearchBar/SearchBar'
import Images from '../Images/Images'
import { useAppSelector } from '../../store/hooks/storeHelpers'
import {
  selectError,
  selectLoadingPhoto,
} from '../../store/selectors/photoSelectors'

import './SearchImagesBack.css'

const SearchImagesBack: FC = () => {
  const currentBG = useAppSelector(selectLoadingPhoto)

  return (
    <div
      className={cnSearchImagesBack()}
      style={{
        backgroundImage: `url(${''})`,
      }}
    >
      <SearchBar />
      <Images />
    </div>
  )
}

export default SearchImagesBack
