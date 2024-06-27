import React, { useContext, useEffect, useRef } from 'react'
import { StoreContext } from './StoreContext'
import add from './../assets/add_icon_green.png';
import minus from './../assets/remove_icon_red.png';
import { FaLongArrowAltRight } from 'react-icons/fa';
import {Link} from'react-router-dom';

const CartDetails = () => {
    const {foodList,cartItems,url,addToCart, removeFromCart,getTotalCartAmount,cartLength} = useContext(StoreContext);
  
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center gap-4">
            <div className="col-lg-6">
              {
                foodList.map((item,index)=>{
                    if(cartItems[item._id]>0){
                        // cartLength += 1;
                        return(
                           <div key={index} className='d-flex gap-5 mt-3'>
                            <img src={url + "/images/" + item.image} alt="" className='img-fluid rounded-3' width={100}/>
                             <div className='d-flex  w-75 gap-5'>
                                   <div className='d-flex w-25 flex-column'>
                                    <p className='text-white fs-5'>{item.name}</p>
                                    <p className='text-warning fw-bold fs-4'>₹ {item.price*cartItems[item._id]}</p>
                                   </div>
                                    <div className='d-flex'>
                                         <p className='text-white'>
                                      <span className='d-flex gap-2 fs-4'><img src={minus} alt="" onClick={()=>removeFromCart(item._id)}/>{cartItems[item._id]}<img src={add} alt="" onClick={()=>addToCart(item._id)}/></span>
                                     </p>
                                    </div>
                             </div>
                           </div>
                          
                        )
                    } 
                })
              }
              <div className='mt-5'>
                <h3 className='text-white fw-bold'>If you have Promo Code, Enter here</h3>
                <div className='d-flex mt-3 '>
                    <input type="text" className='form-control w-75 rounded-0' placeholder='Promo Code' />
                    <button className='btn btn-warning btn-lg rounded-0'>Submit</button>
                </div>
              </div>
            </div>
            <div className='col-lg-4 ' >
             <div className='checkout'>
                  <h4 className='bg-white fw-bold text-center p-2 '>Cart Totals - {cartLength()} Items</h4>
                  <p className='text-white fs-2 d-flex justify-content-between'>Subtotal:<span>₹ {getTotalCartAmount()}</span></p>
                  <p className='text-white fs-2 d-flex justify-content-between'>Delivery:<span>₹ 100</span></p>
                  <hr  className='w-100 text-white'/>
                  <p className='text-white fs-2 d-flex justify-content-between'>Total:<span>₹ {getTotalCartAmount() + 100}</span></p>
                  <Link to='/placeorder' style={{textDecoration:"none"}}><button>PROCEED TO CHECKOUT <FaLongArrowAltRight className='checkout-arrow fs-4'/></button></Link>
             </div>

             <div className='bg-light mt-5 p-4'>
                <h5 className='fw-bold'>Review your order to avoid cancellations</h5>
                <p className='fs-6'><span className='text-danger fw-bold '>Note: </span>If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds</p>
                <p className='text-muted'>Avoid cancellation as it leads to food wastage.</p>
                <p className='text-danger fw-bold'>Read Cancellation Policy</p>
             </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartDetails
