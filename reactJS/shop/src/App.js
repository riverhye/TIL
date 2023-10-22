import './App.css';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import data from './data';
import { useState } from 'react';

function App() {
  const [product] = useState(data);

  return (
    <div className="App">
      <Navbar className="nav-container" bg="warning" data-bs-theme="light">
        <Container>
          <Navbar.Brand className="nav-brand" href="#home" fixed="top">
            Autumn Style
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">New Arrivals</Nav.Link>
            <Nav.Link href="#features">Outer</Nav.Link>
            <Nav.Link href="#features">Top</Nav.Link>
            <Nav.Link href="#features">Bottom</Nav.Link>
            <Nav.Link href="#features">Shoes</Nav.Link>
            <Nav.Link href="#features">Acc</Nav.Link>
            <NavDropdown title="Special" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sale</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Event</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">For you</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#features">My Pages</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-img"></div>
      <Container className="sub-img-list"></Container>

      <Jacket
        product0={product[0]}
        product1={product[1]}
        product2={product[2]}
      />
    </div>
  );
}

function Jacket(props) {
  const url = [
    '/outer/RedJacket.jpg',
    '/outer/Denim.jpg',
    '/outer/YellowJacket.jpg',
  ];
  return (
    <Row className="card-row">
      {
      ['product0', 'product1', 'product2'].map((a, i) => {
        return (
          <Col key = {i}>
            <img
              className="sub-img"
              alt="sub img"
              src={process.env.PUBLIC_URL + url[i]}
            />
            <h4>{a}</h4>
            <p>{props.product0.price}</p>
          </Col>
        );
      })
      }
    </Row>
  );
}

export default App;
