import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 css
import data from './pages/productData'
import About from './pages/About'
import Detail from './pages/Detail';
import Cart from './pages/Cart'

//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//  ↓  
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap'; // 부트스트랩 nav layout
import {Routes, Route, Link, useNavigate} from 'react-router-dom' // useNavigate: 위치를 앵커포인트로 넘겨줌 온클릭으로 넘어가기 위해서
import { useState } from 'react'; //useState를 배열로 가져와서 data로 받겠다
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './pages/store';


function App() {
  const navigate = useNavigate() 
  const [best] = useState(data)
  const state = useSelector((state)=>state)
  const dispatch = useDispatch()

  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>Samjin Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/info')}}>Information</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={
          <Container>
            <img src={process.env.PUBLIC_URL + './images/visual_main_01.jpg'} alt='main'/>
            <h2>Best 상품</h2>
            <Row>
              {
                best.map((best,index)=>{
                  return (
                    <Col key={index}>
                      <Link to={`detail/${index}`}>
                        <img src={best.image} alt='상품img' style={{width:280}}/>
                        <h4>{best.title}</h4>
                        <p>{best.desc}</p>
                        <p>{best.price}</p>
                      </Link>
                      <button onClick={()=>{dispatch(addItem({id:best.id,title:best.title,count:1}))}}>장바구니</button>
                    </Col>
                  )
                })
              }
            </Row>
        </Container>
        }/>
        <Route path='about' element={<About/>}>
          <Route path='info' element={<div>Information</div>}/>
          <Route path='loca' element={<div>Location</div>}/>
        </Route>
        <Route path='detail/:id' element={<Detail best={best}/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </div>
  ); //const navigate = useNavigate() → 훅
};

export default App;
