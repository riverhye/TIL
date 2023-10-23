import { Container, Row, Col } from 'react-bootstrap';


function Detail () {
    return (
      <Container>
        <Row className="card-row">
            <Col>
                <img src="/outer/jacket1.jpg" alt="jacket1 img" width="100%" />
            </Col>
            <Col >
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button> 
            </Col>
        </Row>
  </Container> 
    )
  }

  export default Detail;