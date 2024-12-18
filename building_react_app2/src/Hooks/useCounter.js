import {useState} from 'react'

function useCounter(initialCount = 0, value) {
    const [count, setCount] = useState(10, 10)
    const increment = () =>{
        setCount(prevCount => prevCount + value)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }
    const reset = () => {
        setCount(initialCount)
    }
    return [count, increment, decrement, reset]
}

export default useCounter