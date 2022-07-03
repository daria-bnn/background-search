import { useEffect, useState } from 'react'

const getValue = (initValue) => {
  const [value, setValue] = useState(initValue)
  const [valid, setValid] = useState(true)

  useEffect(() => {
    value ? setValid(true) : setValid(false)
  }, [value])

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return { value, onChange, valid }
}

export default getValue
