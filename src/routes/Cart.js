import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../store/cartSlice";
import { setAge } from "./../store/userSlice";
import { memo, useMemo, useState } from "react";

function foo() {   // 매우 오래 걸리는 함수
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return sum;
}

let Child = memo( function() {  // props가 변경될 때만 재렌더링함
  console.log("재랜더링");
  return (
    <div>
      자식임
    </div>
  )
})

function Cart(props) {
  let dispatch = useDispatch();
  let products = useSelector(state => state.cart);
  let user = useSelector(state => state.user)
  let [count, setCount] = useState(0);
  useMemo(() => { return foo() })   // 컴포넌트 렌더링시 1회만 실행해줌 (useEffect랑 비슷함. but, useEffect는 html보여준 후 실행됨)
  return (
    <div>
      <Child count={count}></Child>
      <button onClick={() => { setCount(count + 1) }}>+</button>

      <h6>{user.age}살 {user.name}의 장바구니</h6>
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