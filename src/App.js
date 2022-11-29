import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

const App = () => {
  let name = "uwu"
  let number = 2022
  let obj = { name: "uwwU", number: 69 }
  let link = 'https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=9'
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World and hello {name} at {number}</h1>
        <a href={link} target='_blank'>Visit this link</a>
      </header>
    </div>
  );
}

export default App;
