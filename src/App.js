import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy, useEffect, useState } from 'react';
import data from './data';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './routes/Main';
// import Detail from './routes/Detail';
// import Cart from './routes/Cart';
import Event from './routes/Event';
import One from './components/One';
import Two from './components/Two';
import axios from 'axios';
import { useQuery } from 'react-query';

const Detail = lazy(() => import('./routes/Detail'));
const Cart = lazy(() => import('./routes/Cart'));

function App() {

  useEffect(() => {
    if(!(localStorage.getItem("recent"))) {
      localStorage.setItem("recent", JSON.stringify([]));
    }
  }, [])

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  let result = useQuery("getName", () => {
    return axios.get("https://codingapple1.github.io/userdata.json")
      .then((res) => {
        return res.data;
      })
  })

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>CustomShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event') }}>Event</Nav.Link>
          </Nav>
          <Nav className='ms-auto name-space'>
            { result.isLoading ? "로딩중" : result.data.name }
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Main shoes={shoes} setShoes={setShoes} />} />
        <Route path='/detail/:id' element={
          <Detail shoes={shoes}/>
        } />
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<One />} />
          <Route path='two' element={<Two />} />
        </Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<div>Page 404</div>} />
      </Routes>
    </div>
  );
}


export default App;
