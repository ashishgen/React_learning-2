import React, { useState } from 'react'

export default function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
  return (
    <div>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() =>setCount(count-1)}>Decrement</button>
        
    </div>
  )
}
