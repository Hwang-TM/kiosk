import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  useEffect(() => {
    fetch("http://localhost:8080/api") // 서버 불러오는 곳
    .then(res => res.json())  // 리턴 값
    .then(data => console.log(data)); // data를 뿌려주는 곳
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
