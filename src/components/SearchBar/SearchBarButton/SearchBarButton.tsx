import React, { FC } from 'react'

import cnSearchBar from '../SearchBar.classname'

import './SearchBarButton.css'

const SearchBarButton: FC = () => (
  <button type="submit" className={cnSearchBar('Button')}>
    <span className={cnSearchBar('ButtonIcon')} />
  </button>
)

export default SearchBarButton
