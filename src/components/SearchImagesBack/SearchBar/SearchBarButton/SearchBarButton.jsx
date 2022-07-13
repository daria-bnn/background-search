import { cn } from '@bem-react/classname'

import './SearchBarButton.css'

const cnSearchBar = cn('SearchBar')

const SearchBarButton = ({ valid }) => (
  <button type="submit" disabled={!valid} className={cnSearchBar('Button')}>
    <span className={cnSearchBar('IconSearch')} />
  </button>
)

export default SearchBarButton
