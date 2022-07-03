import './ButtonSearch.css'

const ButtonSearch = (props) => (
  <button type="submit" disabled={!props.valid} className="button-search">
    <span className="icon-search" />
  </button>
)

export default ButtonSearch
