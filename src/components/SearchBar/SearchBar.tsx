import React, { FC, useState } from 'react'

import cnSearchBar from './SearchBar.classname'
import SearchBarInput from './SearchBarInput/SearchBarInput'
import SearchBarButton from './SearchBarButton/SearchBarButton'
import { useAppDispatch } from '../../store/hooks/storeHelpers'
import thunkFetchPhotosUnplash from '../../store/thunks/photoThunk'

import './SearchBar.css'

const SearchBar: FC = () => {
  const [value, setValue] = useState('')

  const dispatch = useAppDispatch()
  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(thunkFetchPhotosUnplash(value))
  }

  return (
    <form onSubmit={onSubmit} className={cnSearchBar()}>
      <SearchBarInput value={value} onChange={setValue} />
      <SearchBarButton />
    </form>
  )
}

export default SearchBar
