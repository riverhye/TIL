import './App.css';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import data from './data';
import Detail from './detail';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'

function App() {
  const [product] = useState(data);

  return (
    <div className="App">
      <Navbar className="nav-container" bg="warning" data-bs-theme="light">
        <Container>
          <Navbar.Brand className="nav-brand" href="/" fixed="top">
            Autumn Style
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">New Arrivals</Nav.Link>
            <Nav.Link href="detail">Detail</Nav.Link>
            <Nav.Link href="top">Top</Nav.Link>
            <Nav.Link href="bottom">Bottom</Nav.Link>
            <Nav.Link href="shoes">Shoes</Nav.Link>
            <Nav.Link href="acc">Acc</Nav.Link>
            <NavDropdown title="Special" id="navbarScrollingDropdown">
              <NavDropdown.Item href="sale">Sale</NavDropdown.Item>
              <NavDropdown.Item href="event">Event</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="foru">For you</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="mypages">My Pages</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Main product={product}/>} />
        <Route path="/detail" element={<Detail />} />
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

export default App;
