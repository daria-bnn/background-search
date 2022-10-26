import React, { FC, useState } from 'react'
import { cn } from '@bem-react/classname'

import SearchBar from '../SearchBar/SearchBar'
import BlockImages from '../BlockImages/BlockImages'

import './SearchImagesBack.css'

const cnSearchImagesBack = cn('SearchImagesBack')

const SearchImagesBack: FC = () => {
  const [data, setData] = useState('')
  const [src, setSrc] = useState('')

  const getData = (arrayImg) => {
    setData(arrayImg)
  }

  const chooseBack = (event) => {
    if (event.target.src) {
      setSrc(event.target.src)
      setData('')
    }
  }

  return (
    <div
      className={cnSearchImagesBack()}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <SearchBar />
      {/* {data && <BlockImages chooseBack={chooseBack} data={data} />} */}
    </div>
  )
}

export default SearchImagesBack
