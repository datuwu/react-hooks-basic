import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';

const App = () => {
  let [name, setName] = useState('UwU')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Learn React', type: 'Dat' },
    { id: 'todo2', title: 'Learn JS', type: 'Dat' },
    { id: 'todo3', title: 'Learn C#', type: 'Dat OwO' },
    { id: 'todo4', title: 'Sleep', type: 'Dat OwO' },
  ])

  const handleEventClick = (event) => {
    if (!address) {
      alert('Empty input')
      return
    }
    let newTodo = { id: Math.random(), title: address }
    setTodos([...todos, newTodo])
    console.log(event, name);
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World and hello {name}</h1>

        <Todo
          myData={todos}
          title={"All todos"}
        />
        <Todo
          myData={todos.filter(todo => todo.type === 'Dat')}
          title={`Dat's Todos`}
        />
        <input type={'text'} value={address} onChange={(event) => { handleOnChangeInput(event) }} />
        <button onClick={(event) => { handleEventClick(event) }}>Click me</button>
      </header>
    </div>
  );
}

export default App;
