import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

const App = () => {
  let [name, setName] = useState('UwU')
  const [address, setAddress] = useState('')

  const handleClickEvent = (event) => {
    setName(address)
    console.log(event, name);
  }

  const handleOnChangeInput = (event) => {
    console.log(event.target.value);
    setAddress(event.target.value)
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World and hello {name}</h1>
        <input type={'text'} value={address} onChange={(event) => { handleOnChangeInput(event) }} />
        <button onClick={(event) => { handleClickEvent(event) }}>Click me</button>
      </header>
    </div>
  );
}

export default App;
