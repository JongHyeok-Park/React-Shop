import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
      <Col sm={4}>
        <Link to={'/detail/' + props.shoe.id}>
          <img src={`https://codingapple1.github.io/shop/shoes${props.shoe.id + 1}.jpg`} width={'80%'} alt=''/>
          <h4>{props.shoe.title}</h4>
          <p>{props.shoe.price}</p>
        </Link>
      </Col>
    )
  }

  export default Card;