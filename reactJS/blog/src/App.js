/* eslint-disabled */

import './App.css';
import {useState} from 'react';

function App() {
 const [title, setTitle] = useState(['23 FW 패션', '용산 맛집', '가을 나들이 명소']);
 const [count, setCount] = useState([0, 0, 0]);
 const [modal, setModal] = useState(false);

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

      {
        title.map(function(a, i){
          return (
            <div className="list">
            <h4 onClick={()=>{setModal(!modal)}}>
              {title[i]}
              <span key={i} onClick={()=>{
                const copyCount = [...count]
                copyCount[i]++
                setCount(copyCount)
              }}>❤️</span>
              {count[i]}
              </h4>
            <p>date</p>
          </div>
          )
        })
      }

  { 
    modal === true ? <Modal color={'yellow'} title={title} setTitle={setTitle} /> : null
   }
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal" style={{backgroundColor: props.color}}>
      <h4>{props.title[0]}</h4>
      <p>Date</p>
      <p>Content</p>
      <button onClick={()=>{
        const copyTitle = [...props.title]
        copyTitle[0] = '23 Winter 패션'
        props.setTitle(copyTitle)
      }}>EDIT</button>
    </div>
  )
}

export default App;
