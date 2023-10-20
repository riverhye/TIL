/* eslint-disabled */

import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState([
    "23 FW 패션",
    "용산 맛집",
    "가을 나들이 명소",
  ]);
  const [count, setCount] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>

      <button
        onClick={() => {
          const copyTitleArr = [...title].sort();
          setTitle(copyTitleArr);
        }}
      >
        가나다순 정렬
      </button>

      {title.map(function (t, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal);
                setIndex(i);
              }}
            >
              {title[i]}
              <span
                key={i}
                onClick={(e) => {
                  const copyCount = [...count];
                  copyCount[i]++;
                  setCount(copyCount);
                  e.stopPropagation();
                }}
              >
                ❤️
              </span>
              {count[i]}
            </h4>
            <div className="btn-line">
              <p>Upload Date.</p>
              <button
                className="btn"
                onClick={() => {
                  setTitle(title.filter((a) => a !== t));
                }}
              >
                Del
              </button>
            </div>
          </div>
        );
      })}

      {modal === true ? (
        <Modal
          color={"yellow"}
          title={title}
          setTitle={setTitle}
          index={index}
        />
      ) : null}

      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={() => setTitle([input, ...title])}>Add</button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ backgroundColor: props.color }}>
      <h4>{props.title[props.index]}</h4>
      <p>Date</p>
      <p>Content</p>
      <button
        onClick={() => {
          const copyTitle = [...props.title];
          copyTitle[0] = "23 Winter 패션";
          props.setTitle(copyTitle);
        }}
      >
        EDIT
      </button>
    </div>
  );
}

export default App;
