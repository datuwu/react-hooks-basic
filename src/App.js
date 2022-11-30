import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

const App = () => {
  let name = "uwu"

  const handleClickEvent = (event) => {
    console.log(event, event.target);
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World and hello {name}</h1>
        <input type={'text'} value={'Eric'} onClick={(event) => { handleClickEvent(event) }} />
        <button onClick={(event) => { handleClickEvent(event) }}>Visit this link</button>
      </header>
    </div>
  );
}

export default App;
