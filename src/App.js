

import { useState } from 'react';
import './App.css';
import Counterclass from './components/Counterclass';
import Counterfunction from './components/Counterfunction';
import Employee from './components/Employee';
import User from './components/User';

function App() {

  const [username,setUsername]=useState('Navaneeth')
  const [age,setAge]=useState(21)

  return (
    <div className="App">
      <header className="App-header">
        <Counterfunction/>
        {/* <Counterclass/>
        <User username={username} age={age}/>
        <Employee/> */}
      </header>
    </div>
  );
}

export default App;
