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
      <Row className="card-row">
        
        {
        product.map((a, i)=>{
          return <Jacket product={product[i]} i={i} />
        })
        }
      </Row>
    </div>

  )
  };

function Jacket(props) {
  return (
      <Col key = {props.id}>
          <img className="sub-img" alt="sub img"
          src={'/outer/jacket' + (props.i+1) + '.jpg'} />
          <h4>{props.product.title}</h4>
          <p>{props.product.price}</p>
      </Col>

  );
}

export default App;
