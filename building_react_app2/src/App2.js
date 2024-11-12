import React from 'react';
import './App.css';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className='App'>
        {/* <DataFetchingOne /> */}
        {/* <DataFetchingTwo /> */}
        <ParentComponent />
    </div>
  )
}

export default App