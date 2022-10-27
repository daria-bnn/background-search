import React, { FC, useState } from 'react'

import cnSearchImagesBack from './SearchImagesBack.classname'
import SearchBar from '../SearchBar/SearchBar'
import Images from '../Images/Images'

import './SearchImagesBack.css'

const SearchImagesBack: FC = () => (
  <div className={cnSearchImagesBack()}>
    <SearchBar />
    <Images />
  </div>
)

export default SearchImagesBack
