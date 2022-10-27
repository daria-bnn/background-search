import React, { FC } from 'react'
import cnSearchBar from '../SearchBar.classname'

import './SearchBarInput.css'

type TSearchBarInput = {
  value: string
  onChange: (value: string) => void
}

const SearchBarInput: FC<TSearchBarInput> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e

    onChange(target.value)
  }

  return (
    <input
      value={value}
      placeholder="Найдите фоновую картинку по душе"
      onChange={handleChange}
      className={cnSearchBar('Input')}
    />
  )
}
export default SearchBarInput
