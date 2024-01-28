import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import data from './data';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './routes/Main';
import Detail from './routes/Detail';
import Event from './routes/Event';
import One from './components/One';
import Two from './components/Two';

export let Context1 = createContext();

function App() {

  let [shoes, setShoes] = useState(data);
  let [stock] = useState([10, 11, 12]);
  
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CustomShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event') }}>Event</Nav.Link>
            <Button onClick={() => {
              let shoeCopy = [...shoes];
              shoeCopy.sort((a, b) => {
                if (a.title > b.title) return 1;
                if (a.title < b.title) return -1;
                else return 0;
              });
              setShoes(shoeCopy);
            }}>오름차순 정렬</Button>
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
        <Route path='*' element={<div>Page 404</div>} />
      </Routes>
    </div>
  );
}


export default App;
