import { cn } from '@bem-react/classname'

import './SearchBarError.css'

const cnSearchBar = cn('SearchBar')

const ErrorSearch = ({ error }) => (
  <div className={cnSearchBar('Error')}>{error}</div>
)

export default ErrorSearch
