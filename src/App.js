import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import data from './data';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './routes/Main';
import Detail from './routes/Detail';
import Event from './routes/Event';
import Cart from './routes/Cart';
import One from './components/One';
import Two from './components/Two';

export let Context1 = createContext();

function App() {

  useEffect(() => {
    if(!(localStorage.getItem("recent"))) {
      localStorage.setItem("recent", JSON.stringify([]));
    }
  }, [])

  let [shoes, setShoes] = useState(data);
  let [stock] = useState([10, 11, 12]);
  
  let navigate = useNavigate();

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
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Main shoes={shoes} setShoes={setShoes} />} />
        <Route path='/detail/:id' element={
          <Context1.Provider value={{stock}}>
            <Detail shoes={shoes}/>
          </Context1.Provider>
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
