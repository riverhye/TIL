import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [title, setTitle] = useState('가을 머리 추천');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>date</p>
      </div>
      <div className="list">
        <h4>{}</h4>
        <p>date</p>
      </div>
      <div className="list">
        <h4>{}</h4>
        <p>date</p>
      </div>
    </div>
  );
}

export default App;
