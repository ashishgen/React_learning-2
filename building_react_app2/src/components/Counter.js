import React, {useState} from 'react'

function Counter() {
    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)

    const incrementOne = () => {
        setcounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setcounterTwo(counterTwo + 1)
    }
    const isEven = () => {
        
    }

  return (
    <div>
        <div>
            <button onClick={incrementOne}>Count One - {counterOne}</button>
        </div>
        <div>
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>

    </div>
  )
}

export default Counter