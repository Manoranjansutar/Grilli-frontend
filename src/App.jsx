import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Navbars from './components/Navbars';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart';
import PlaceOrder from './components/PlaceOrder';
import Verify from './components/Verify';
import MyOrders from './components/MyOrders';
import Blog from './components/Blog';
import BookTable from './components/BookTable';

function App() {

  return (
    <BrowserRouter>
     <ToastContainer/>
     <Navbars/>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/contact' element = {<Contact/>} />
      <Route path='/menu' element = {<Menu/>} />
      <Route path='/cart' element = {<Cart/>} />
      <Route path='/placeorder' element = {<PlaceOrder/>} />
      <Route path='/verify' element = {<Verify/>} />
      <Route path='/myorders' element = {<MyOrders/>} />
      <Route path='/blog' element = {<Blog/>} />
      <Route path='/bookatable' element = {<BookTable/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
