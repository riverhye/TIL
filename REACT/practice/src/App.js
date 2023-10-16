import Header from './component/Header';
import Content from './component/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;

// 첫 방향
// CRUD 기능, 체크박스, day마다 새 페이지로 이동하여 새 정보

// 궁극적으로 하고 싶은 것
// 1. 달력 첫화면 -> 날짜 클릭시 그부분 scale 커지면서 오늘의 TO DO 입력 리스트 -> 투두 CRUD -> 데이터 저장
// 2. 아니면 오늘 날짜와 투두 첫 화면 -> 달력 아이콘 누르면 전체 data 달력으로 열람 가능

// 날짜 라이브러리 moment.js 혹은 리액트로..