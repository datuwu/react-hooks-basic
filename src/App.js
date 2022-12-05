import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';

const App = () => {
  let [name, setName] = useState('UwU')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Learn React', type: 'Dat' },
    { id: 'todo2', title: 'Learn JS', type: 'Dat' },
    { id: 'todo3', title: 'Learn C#', type: 'Dat OwO' },
    { id: 'todo4', title: 'Sleep', type: 'Dat OwO' },
  ])

  useEffect(() => {
    console.log('run address use effect');
  }, [address])
  useEffect(() => {
    console.log('run todos use effect');
  }, [todos])

  const handleEventClick = (event) => {
    if (!address) {
      alert('Empty input')
      return
    }
    let newTodo = { id: (Math.floor(Math.random() * 1000) + 1), title: address }
    setTodos([...todos, newTodo])
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value)
  }

  const deleteTodoData = (id) => {
    let currentTodo = todos
    currentTodo = currentTodo.filter(todo => todo.id !== id)
    setTodos(currentTodo)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World and hello {name}</h1>

        <Covid />
        {/* <Todo
          todos={todos}
          title={"All todos"}
          deleteTodoData={deleteTodoData}
        />
        <Todo
          todos={todos.filter(todo => todo.type === 'Dat')}
          title={`Dat's Todos`}
          deleteTodoData={deleteTodoData}
        />
        <input type={'text'} value={address} onChange={(event) => { handleOnChangeInput(event) }} />
        <button onClick={(event) => { handleEventClick(event) }}>Click me</button> */}

      </header>
    </div>
  );
}

export default App;
