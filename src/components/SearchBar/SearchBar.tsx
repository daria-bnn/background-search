import React, { FC, useState } from 'react'

import cnSearchBar from './SearchBar.classname'
import SearchBarInput from './SearchBarInput/SearchBarInput'
import SearchBarButton from './SearchBarButton/SearchBarButton'
import { useAppDispatch, useAppSelector } from '../../store/hooks/storeHelpers'
import { selectError } from '../../store/selectors/photoSelectors'
import thunkFetchPhotosUnplash from '../../store/thunks/photoThunk'

import './SearchBar.css'

const SearchBar: FC = () => {
  const [value, setValue] = useState('')

  const dispatch = useAppDispatch()
  const error = useAppSelector(selectError)

  const onSubmit = async (e) => {
    e.preventDefault()

    dispatch(thunkFetchPhotosUnplash(value))
  }

  return (
    <form onSubmit={onSubmit} className={cnSearchBar()}>
      <SearchBarInput value={value} onChange={setValue} />
      {error && <div className={cnSearchBar('Error')}>{error}</div>}
      <SearchBarButton />
    </form>
  )
}

export default SearchBar
