import React, { useState } from 'react'
import Dropdown from './components/Dropdown'
import './App.css'

const options = [
  { value: 'dog', label: 'Dog' },
  { value: 'cat', label: 'Cat' },
  { value: 'hamster', label: 'Hamster' },
  { value: 'parrot', label: 'Parrot' },
  { value: 'spider', label: 'Spider' },
  { value: 'goldfish', label: 'Goldfish' }
]

const initialValue = 'hamster'

const App = () => {
  // state is a good way to keep track of the selected option
  const [selectedValue, setSelectedValue] = useState(initialValue)
  console.log(selectedValue)

  return (
    <div>
      <label htmlFor="pet-select">Choose a pet:</label>
      <Dropdown //
        options={options}
        selectedValue={selectedValue}
        onSelectedValueChange={setSelectedValue}
        id="pet-select"
      />
    </div>
  )
}

export default App
