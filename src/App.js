import React, { useState } from 'react'
import './App.css'

const Dropdown = ({ options, id, onSelectedValueChange }) => (
  <select name="pets" id={id} onChange={(event) => onSelectedValueChange(event.target.value)}>
    {/* <option value="">--Please choose an option--</option> */}
    {options.map(({ value, label }) => (
      <option id={value} value={value} key={value}>
        {label}
      </option>
    ))}
  </select>
)

const options = [
  { value: 'dog', label: 'dog' },
  { value: 'cat', label: 'cat' },
  { value: 'hamster', label: 'hamster' },
  { value: 'parrot', label: 'parrot' },
  { value: 'spider', label: 'spider' },
  { value: 'goldfish', label: 'goldfish' }
]

const App = () => {
  // state is a good way to keep track of the selected option
  const [selectedValue, setSelectedValue] = useState()
  console.log(selectedValue)

  return (
    <div>
      <label htmlFor="pet-select">Choose a pet:</label>
      <Dropdown options={options} id="pet-select" onSelectedValueChange={setSelectedValue} />
    </div>
  )
}

export default App
