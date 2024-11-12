import React, { useReducer } from 'react'
import './App.css';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';
import HookCounterTwo from './components/HookCounterTwo';
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
switch(action) {
    case 'increment':
        return state + 1
    case 'decrement':
        return state - 1
    case 'reset' :
        return initialState
    default:
        return state
}
}



function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>

   <div className="App">
      Count - {count}
      {/* <HookCounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      <ComponentA />
      <ComponentB />
      <ComponentC />
     
    </div>
    </CountContext.Provider>
  );
}

export default App;
