import { useState } from 'react'

import cnSearchBar from './SearchBar.classname'
import getImages from '../../api/getImages'
import useGetValue from './hooks/useGetValue'
import SearchBarInput from './SearchBarInput/SearchBarInput'
import SearchBarButton from './SearchBarButton/SearchBarButton'
import SearchBarError from './SearchBarError/SearchBarError'

import './SearchBar.css'

const SearchBar = ({ getData }) => {
  const useInputValue = useGetValue('')

  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    getImages(useInputValue.value)
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
      <SearchBarInput getValue={useInputValue} />
      {error && <SearchBarError error={error} />}
      <SearchBarButton valid={useInputValue.valid} />
    </form>
  )
}

export default SearchBar
