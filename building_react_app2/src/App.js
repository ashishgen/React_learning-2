import React from 'react';
import './App.css';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOne1 from './components/CounterOne1';
import CounterTwo2 from './components/CounterTwo2';
import UserForm from './components/UserForm';
import { UseState } from './components/UseState/UseState';
import { UseReducer } from './components/UseReducer/UseReducer';
// import { ObjectUseState } from './components/Immutable State/ObjectUseState';
import { ArrayUseState } from './components/Immutable State/ArrayUseState';
import { Parent } from './components/Immutable State/Parent Child/Parent';
function App() {
  return (
    <div className='App'>
        {/* <Counter /> */}
        {/* <FocusInput /> */}
        {/* <ClassTimer />
        <HookTimer /> */}
        {/* <DocTitleOne />
        <DocTitleTwo /> */}
        {/* <CounterOne1 />
        <CounterTwo2 />
        <useCounter /> */}
        {/* <UserForm /> */}
        {/* <UseState /> */}
        {/* <UseReducer /> */}
        {/* <ObjectUseState /> */}
        {/* <ArrayUseState /> */}
        <Parent />

    </div>
  )
}

export default App