import React, { FC } from 'react'

import cnSearchBar from '../SearchBar.classname'

import './SearchBarError.css'

const SearchBarError: FC = ({ error }) => (
  <div className={cnSearchBar('Error')}>{error}</div>
)

export default SearchBarError
