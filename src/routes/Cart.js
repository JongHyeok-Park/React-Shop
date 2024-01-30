import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../store";

function Cart(props) {
  let products = useSelector(state => state.cart);
  let user = useSelector(state => state.user)

  return (
    <div>
      {user}의 장바구니

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((item, i) => {
              return (
                <CartRow product={item} key={i}/>
              );
            })
          }
          
        </tbody>
      </Table>  
    </div>
  );
}

function CartRow(props) {
  let dispatch = useDispatch();

  return (
    <tr>
      <td>{props.product.id}</td>
      <td>{props.product.name}</td>
      <td>{props.product.count}</td>
      <td><button onClick={() => {
        dispatch(setName("새로운 이름"));
        console.log("누름");
      }}>+</button></td>
    </tr>
  );
}

export default Cart;