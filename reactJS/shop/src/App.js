import './App.css';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom'
import data from './data';
import Detail from './pages/detail';

function App() {
  const [product] = useState(data);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar className="nav-container" bg="warning" data-bs-theme="light">
        <Container>
          <Navbar.Brand className="nav-brand" onClick={()=>{navigate('/')}} fixed="top">
            Autumn Style
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate(-1)}>뒤로 가기</Nav.Link>
            <Nav.Link onClick={()=>navigate('/detail')}>Detail</Nav.Link>
            <Nav.Link href="top">Top</Nav.Link>
            <Nav.Link href="bottom">Bottom</Nav.Link>
            <Nav.Link href="shoes">Shoes</Nav.Link>
            <Nav.Link href="acc">Acc</Nav.Link>
            <NavDropdown title="Special" id="navbarScrollingDropdown">
              <NavDropdown.Item href="sale">Sale</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate('/event')}>Event</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="foru">For you</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Main product={product}/>} />
        <Route path="/detail/:id" element={<Detail product={product} />} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
        </Route>
      </Routes>
    </div>
  )};

function Main(props) {
  return (
    <>
    <div className="main-img"></div>
    <Row className="card-row">
    {
      props.product.map((a, i)=>{
        return <Jacket product={props.product[i]} i={i} />
      })
    }
    </Row>
    </>
  )
}

function Jacket(props) {
  return (
    <>
      <Col>
        <img className="sub-img" alt="sub-img" src={`/outer/jacket${props.i+1}.jpg`} />
        <h4>{props.product.title}</h4>
        <p>{props.product.price}</p>
      </Col>
    </>
  )
}

function Event() {
  return (
    <>
    <h2>오늘의 이벤트</h2>
    <Outlet></Outlet>
    </>
  )
}

export default App;
