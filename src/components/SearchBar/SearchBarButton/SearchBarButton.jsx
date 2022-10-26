import cnSearchBar from '../SearchBar.classname'

import './SearchBarButton.css'

const SearchBarButton = ({ valid }) => (
  <button type="submit" disabled={!valid} className={cnSearchBar('Button')}>
    <span className={cnSearchBar('ButtonIcon')} />
  </button>
)

export default SearchBarButton
