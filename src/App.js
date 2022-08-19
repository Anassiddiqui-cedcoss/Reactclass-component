import React from 'react';
import './App.css';
// import ClassComponent from './components';
import MobileOS from './mobileOS';
import Mobilemanufacturers from './mobilemanufacturers';

const App=()=> {
  return (
    <div>
      <header className="App-header">
      {/* <ClassComponent/> */}
      <MobileOS/>
      <Mobilemanufacturers/>
      </header>
       
    </div>
  );
}

export default App;
