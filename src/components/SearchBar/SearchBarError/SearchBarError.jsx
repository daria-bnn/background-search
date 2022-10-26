import cnSearchBar from '../SearchBar.classname'

import './SearchBarError.css'

const SearchBarError = ({ error }) => (
  <div className={cnSearchBar('Error')}>{error}</div>
)

export default SearchBarError
