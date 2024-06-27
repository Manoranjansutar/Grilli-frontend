import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import login from './../assets/login6.jpg';
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import { StoreContext } from './StoreContext';
import axios from 'axios';


const LoginModal = ({show,handleClose,handleShow}) => {
    const [state,setState] = useState("LOGIN");
    const [showPassword,setShowPassword] = useState(false);
    const url = 'https://grilli-backend.onrender.com';
    const [showModal,setShowModal] = useState(false);
    const {token,setToken} = useContext(StoreContext);
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })
    const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value =event.target.value;
      setData(data =>({...data,[name]:value}))
    }

    const onLogin = async (event) =>{
       event.preventDefault();
       let newUrl = url;
       if(state === 'LOGIN'){
          newUrl += "/api/user/login"
       } else {
         newUrl += '/api/user/register';
       }
       const response = await axios.post(newUrl,data);
       if(response.data.success){
         setToken(response.data.token);
         localStorage.setItem("token",response.data.token);
         handleClose();
       } else{
         alert(response.data.message);
       }
    }

 

  return (
    <div>
       <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
         <div className="container">
          <div className="row">
              <div className="col-lg-6 mt-lg-4">
                  <img src={login} alt="" className='img-fluid' />
              </div>
              <div className='col-lg-5 mt-lg-5'>
                      <h3 className='bg-black text-white text-center p-2 mt-2 rounded-2'>{state}</h3>
                    <Form onSubmit={onLogin}>
                        {
                          state === 'SIGN UP' ?  <div
                          class="input-group mb-4 mt-4"
                          style={{ border: "1px solid black" }}
                        >
                          <span class="input-group-text">
                          <FaUser />
                          </span>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter your Name"
                            style={{ border: "none", outline: "none" }}
                            name="name"
                            value={data.name}
                            onChange={onChangeHandler}
                          />
                        </div> : <></>
                        }
                       
                      <div
                        class="input-group mb-4 mt-4 position-relative"
                        style={{ border: "1px solid black" }}
                      >
                        <span class="input-group-text">
                          <FaEnvelope />
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your Email"
                          style={{ border: "none", outline: "none" }}
                          name="email"
                          value={data.email}
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div
                        class="input-group mb-4 mt-4"
                        style={{ border: "1px solid black" }}
                      >
                        <span class="input-group-text">
                          <FaLock />
                        </span>
                        <input
                          type={showPassword ? "text" : "password"}
                          class="form-control"
                          placeholder="Enter your Password"
                          style={{ border: "none", outline: "none" }}
                          name="password"
                          value={data.password}
                          onChange={onChangeHandler}
                        />
                        {
                          showPassword ? <FaEyeSlash className=' position-absolute password-show-icon' onClick={()=>setShowPassword(false)}/>
                          :  <FaEye className=' position-absolute password-show-icon' onClick={()=>setShowPassword(true)}/>
                        }
                      </div>

                      <div >
                        <p className='d-flex align-items-center gap-3 fs-6'> <input type="checkbox"  required/> By continuing , i agree to the term of use & privacy policy</p>
                      </div>
                      
                        <div className='my-lg-3 d-flex justify-content-center align-items-center gap-3 mt-3 mb-2'>
                        <button className='btn btn-dark w-100' type='submit'>{state}</button>
                        <button className='btn btn-dark w-100' onClick={handleClose} >CANCEL</button>
                        </div>
                        <div className='mb-3'>
                        {
                          state === 'LOGIN' ? 
                          <div>
                            Create a new Account ? <span className='fw-bold' onClick={()=>{setState("SIGN UP")}} style={{cursor:"pointer"}}> Sign Up Here</span>
                          </div> :
                          <div>
                            Already have an account ?<span className='fw-bold' onClick={()=>{setState("LOGIN")}} style={{cursor:"pointer"}}> Login Here</span>
                          </div>
                        }
                      </div>
                    </Form>
              </div>
          </div>
         </div>
       </Modal>
    </div>
  )
}

export default LoginModal
