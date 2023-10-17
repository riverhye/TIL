/* eslint-disabled */

import './App.css';
import {useState} from 'react';

function App() {
  const [title, setTitle] = useState(['23 FW 패션', '용산 맛집', '가을 나들이 명소']);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>
      <button onClick={()=>{
        const copyTitleArr = [...title];
        setTitle(copyTitleArr.sort());
      }}>가나다순 정렬</button>
      <button onClick={()=>{
        const copy = [...title];
          copy[1] = '강남 맛집';
          setTitle(copy)}}>맛집 지역 변경</button>
      <button onClick={()=>{
        const copyTitle = [...title];
        copyTitle[2] = '여름 나들이 명소';
        setTitle(copyTitle);
      }}>나들이 계절 변경</button>
      <div className="list">
        <h4>{title[0]}<span onClick={()=>{setCount(count+1)}}>❤️</span> {count} </h4>
        <p>date</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>date</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>date</p>
      </div>

      <Modal />

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h4>Title</h4>
      <p>Date</p>
      <p>Content</p>
    </div>
  )
}

export default App;
