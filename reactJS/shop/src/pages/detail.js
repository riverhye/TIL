import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail (props) {
  let {id} = useParams();
  let pickProd = props.product.find(function(prod){
    return prod.id == id});

    return (
      <Container>
        <Row className="card-row">
            <Col>
                <img src={`/outer/jacket${pickProd.id+1}.jpg`} alt={`jacket${pickProd.id+1} img`} width="100%" />
            </Col>
            <Col>
                <h4 className="pt-5">{props.product[pickProd.id].title}</h4>
                <p>{props.product[pickProd.id].content}</p>
                <p>{props.product[pickProd.id].price}원</p>
                <button className="btn btn-danger">주문하기</button> 
            </Col>
        </Row>
  </Container> 
    )
  }

  export default Detail;