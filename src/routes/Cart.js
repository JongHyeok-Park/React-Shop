import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../store/cartSlice";
import { setAge } from "./../store/userSlice";

function Cart(props) {
  let dispatch = useDispatch();
  let products = useSelector(state => state.cart);
  let user = useSelector(state => state.user)

  return (
    <div>
      {user.age}살 {user.name}의 장바구니
      <button onClick={() => {
        dispatch(setAge(5));
      }}>버튼</button>
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
        let productId = props.product.id;
        dispatch(increaseCount(productId));
      }}>+</button></td>
    </tr>
  );
}

export default Cart;