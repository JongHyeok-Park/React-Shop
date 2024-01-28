import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart(props) {
  let products = useSelector(state => state.cart);

  return (
    <div>
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
            products.map((item) => {
              return (
                <CartRow product={item} />
              );
            })
          }
          
        </tbody>
      </Table>  
    </div>
  );
}

function CartRow(props) {
  return (
    <tr>
      <td>{props.product.id}</td>
      <td>{props.product.name}</td>
      <td>{props.product.count}</td>
      <td>안녕</td>
    </tr>
  );
}

export default Cart;