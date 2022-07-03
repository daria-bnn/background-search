import './Input.css'

const Input = (props) => {
  const { value, onChange } = props.getValue
  return (
    <input
      value={value}
      placeholder="Введите слово"
      onChange={onChange}
      className="input"
    />
  )
}
export default Input
