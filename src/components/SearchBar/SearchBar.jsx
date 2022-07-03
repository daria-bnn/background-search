import { useState } from 'react'

import './SearchBar.css'

import getValue from '../../hooks/hookGetValue'

import Input from './Input/Input'
import ButtonSearch from './ButtonSearch/ButtonSearch'
import ErrorSearch from './ErrorSearch/ErrorSearch'

import getImages from '../../api/getImages'

const SearchBar = ({ getData }) => {
  const inputValue = getValue('')

  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    getImages(inputValue.value)
      .then((data) => {
        getData(data)
      })
      .then(() => {
        setError('')
      })
      .catch((er) => {
        setError(er.message)
        getData('')
      })
  }

  return (
    <form onSubmit={onSubmit} className="search-bar">
      <Input getValue={inputValue} />
      {error && <ErrorSearch error={error} />}
      <ButtonSearch valid={inputValue.valid} />
    </form>
  )
}

export default SearchBar
