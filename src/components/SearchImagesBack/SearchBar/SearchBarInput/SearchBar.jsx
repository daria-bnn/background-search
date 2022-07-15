import { cn } from '@bem-react/classname'

import './SearchBarInput.css'

const cnSearchBar = cn('SearchBar')

const SearchBarInput = ({ getValue }) => {
  const { value, onChange } = getValue
  return (
    <input
      value={value}
      placeholder="Введите слово"
      onChange={onChange}
      className={cnSearchBar('Input')}
    />
  )
}
export default SearchBarInput
