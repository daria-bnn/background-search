import { useState } from 'react'

import { cn } from '@bem-react/classname'

import './SearchBar.css'

import useGetValue from './hooks/useGetValue'

import SearchBarInput from './SearchBarInput/SearchBar'
import SearchBarButton from './SearchBarButton/SearchBarButton'
import ErrorSearch from './SearchBarError/ErrorSearch'

import getImages from '../../../api/getImages'

export const cnSearchBar = cn('SearchBar')

const SearchBar = ({ getData }) => {
  const inputValue = useGetValue('')

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
    <form onSubmit={onSubmit} className={cnSearchBar()}>
      <SearchBarInput getValue={inputValue} />
      {error && <ErrorSearch error={error} />}
      <SearchBarButton valid={inputValue.valid} />
    </form>
  )
}

export default SearchBar
