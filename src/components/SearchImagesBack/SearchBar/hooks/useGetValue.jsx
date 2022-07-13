import { useState } from 'react'

const useGetValue = (initValue) => {
  const [value, setValue] = useState(initValue)

  const valid = Boolean(value)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return { value, onChange, valid }
}

export default useGetValue
