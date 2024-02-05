import { Container, Row, Col } from 'react-bootstrap';
import Card from '../components/Card';
import Recent from '../components/Recent';
import axios from 'axios';
import { useState } from 'react';

function Main(props) {
  let [loading, setLoading] = useState(false);
  let [moreCount, setMoreCount] = useState(2);
  let recent = localStorage.getItem("recent");
  recent = JSON.parse(recent);

    return (
      <div>
        <div className='main-bg'></div>
        <Container>
          <Row>
            {
              props.shoes.map((shoe, i) => {
                return (
                  <Card shoe={shoe} key={i}></Card>
                )
              })
            }
          </Row>
          {loading ? <Row><Col>로딩중...</Col></Row> : null}
        </Container>
        <button onClick={() => {
          if (moreCount < 4) {
            setLoading(true);
            axios.get(`https://codingapple1.github.io/shop/data${moreCount}.json`)
            .then((res) => {
              let shoesCopy = [...props.shoes];
              let newShoes = [...shoesCopy, ...(res.data)];
              console.log(newShoes);
              props.setShoes(newShoes);
              setMoreCount(moreCount += 1);
              setLoading(false);
            })
            .catch((err) => {
              alert("상품을 가져오는데 실패했습니다.");
              setLoading(false);
            })
          } else {
            alert("상품이 더 없습니다.")
          }
          
        }}>더보기</button>
        {
          recent.length > 0 ? <Recent recent={recent}/> : null
        }
      </div>
    )
}

export default Main;