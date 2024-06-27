import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import Headroom from 'react-headroom';
import name from './../assets/hero-slider-1.jpg';
import { FaSearch, FaUser } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { useState } from 'react';
import LoginModal from './LoginModal';
import { StoreContext } from './StoreContext';
import { MdAccountCircle } from "react-icons/md";
import { PiShoppingBagFill } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
import CartModal from './CartModal';





const Navbars = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const {token , setToken} = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () =>{
     localStorage.removeItem("token");
     setToken("");
     navigate('/');
  }
  // 
  return (
    <Headroom>
      <Navbar expand="lg"   style={{backgroundImage:`url(${name})`, width:"100%"}} className='navbar '>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="" className='mx-5' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:'hsl(38, 61%, 73%'}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-4" >
            <Link to='/' style={{textDecoration:"none"}} className='fs-3 text-white'>Home</Link>
            <Link to='/about' style={{textDecoration:"none"}} className='fs-3 text-white'>About</Link>
            <Link to='/menu' style={{textDecoration:"none"}} className='fs-3 text-white'>Menu</Link>
            <Link to='/blog' style={{textDecoration:"none"}} className='fs-3 text-white'>Blog</Link>
            <Link to='/contact' style={{textDecoration:"none"}} className='fs-3 text-white'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4" >
          <Link to='/bookatable' className='mt-2 '><button className='btn btn-outline-light btn-lg fw-bolder'>FIND A TABLE</button></Link>
            <div className='navbar-search mt-2'>
              <input type="text" placeholder='Search here...' />
              <Link to='#' style={{textDecoration:"none"}} >
               <FaSearch className='fs-5 bg-light  text-black'/>
              </Link>
            </div>
            <Link to='/cart' style={{textDecoration:"none"}}  >
             <IoBagAdd className='text-white mt-1' style={{fontSize:"52px"}} onClick={handleShow1}/>
            </Link>
            {
                token ? <div>
                  <div className="dropdown mt-2" >
                    <a
                      href="#"
                      className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                      id="dropdownUser1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {/* <img
                        src="https://github.com/mdo.png"
                        alt=""
                        width="40"
                        height="40"
                        className="rounded-circle me-2 mx-2"
                      /> */}
                      <MdAccountCircle style={{fontSize:"52px"}}/>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark text-small shadow"
                      aria-labelledby="dropdownUser1"
                    >
                      <li>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                          <FaUser className='me-2'/>Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item d-flex align-items-center" href="/myorders">
                        <PiShoppingBagFill className='me-2'/> Orders
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item d-flex align-items-center" onClick={logout} >
                        <TbLogout className='me-2'/> Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> : <></>
              }
              {
                 token ? <></> :    <Link onClick={handleShow} className='mt-2'><button className='btn btn-outline-light btn-lg fw-bolder' >LOGIN</button></Link>
              }
           
            <LoginModal show={show} handleClose={handleClose} handleShow={handleShow}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </Headroom>
  )
}

export default Navbars
