import { useState } from 'react'

import { cn } from '@bem-react/classname'

import './SearchImagesBack.css'

import SearchBar from './SearchBar/SearchBar'
import BlockImages from './BlockImages/BlockImages'

const cnSearchImagesBack = cn('SearchImagesBack')

const SearchImagesBack = () => {
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
      <SearchBar getData={getData} />
      {data && <BlockImages chooseBack={chooseBack} data={data} />}
    </div>
  )
}

export default SearchImagesBack
