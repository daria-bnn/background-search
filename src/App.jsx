/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

import { useState } from 'react'

import { v4 } from 'uuid'

import './App.css'

import SearchBar from './components/SearchBar/SearchBar'
import Image from './components/Image/Image'

const App = () => {
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
      className="app wrapper"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <SearchBar getData={getData} />
      {data && (
        <div
          role="button"
          tabIndex="0"
          onClick={chooseBack}
          className="block-images"
        >
          {data.map((el) => (
            <Image dataImg={el} key={v4()} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
