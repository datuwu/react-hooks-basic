import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { Countdown, NewCountdown } from './views/Countdown';
import Blog from './views/Blog';
import BlogDetail from './views/BlogDetail'
import BlogAdd from './views/BlogAdd.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import NotFound from './views/404NotFound';

const App = () => {
  let [name, setName] = useState('UwU')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Learn React', type: 'Dat' },
    { id: 'todo2', title: 'Learn JS', type: 'Dat' },
    { id: 'todo3', title: 'Learn C#', type: 'Dat OwO' },
    { id: 'todo4', title: 'Sleep', type: 'Dat OwO' },
  ])

  // useEffect(() => {
  //   console.log('run address use effect');
  // }, [address])
  // useEffect(() => {
  //   console.log('run todos use effect');
  // }, [todos])

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

  const onTimesUp = () => {
    alert('Times up')
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/timer">
            <Countdown onTimesUp={onTimesUp} />
            <span>------------------------</span>
            <NewCountdown onTimesUp={onTimesUp} />
          </Route>
          <Route path="/todo">
            <Todo
              address={address}
              todos={todos}
              title={"All todos"}
              deleteTodoData={deleteTodoData}
              handleOnChangeInput={handleOnChangeInput}
              handleEventClick={handleEventClick}
            />

          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <BlogDetail />
          </Route>
          <Route path="/add-new-blog">
            <BlogAdd />
          </Route>
          <Route path="/secret">

          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
