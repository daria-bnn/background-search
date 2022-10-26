import cnSearchBar from '../SearchBar.classname'

import './SearchBarInput.css'

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
