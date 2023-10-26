import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail (props) {
  const [div, setDiv] = useState(true)
  const [value, setValue] = useState();
  const [alert, setAlert] = useState(false);
  useEffect(()=>{ 
    if(isNaN(value)) { setAlert(true)}
    else {setAlert(false)}}, [value])
  
  useEffect(()=>{
    const a = setTimeout(()=>{
      setDiv(false); 
    }, 2000);
    return()=>{
      clearTimeout(a);
    }
  }, [])
  
  let {id} = useParams();
  let pickProd = props.product.find(function(prod){
    return prod.id == id});
    return (
      <Container>
        {
          div === true ? <div className="alert alert-warning">2초 이내 구매시 할인</div> : null
        }
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
        <div style={{'color': 'red'}} className="alert">
        { alert === true ? '숫자를 입력하세요!' : null }
        </div> 
        
        <input onChange={(e)=>{ setValue(e.target.value)}} />
  </Container> 
    )
  }

  export default Detail;