import React, { useContext, useState } from 'react'
import { StoreContext } from './StoreContext'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import addiconwhite from './../assets/add_icon_white.png';
import minus from './../assets/remove_icon_red.png';
import add from './../assets/add_icon_green.png';
import { toast } from 'react-toastify';



const FoodItem = ({id,name,description,price,image}) => {
    
    const {cartItems,addToCart,removeFromCart ,url} = useContext(StoreContext);
  return (
             <div className='fooditem-responsive border border-secondary rounded-4 position-relative' style={{width:"300px"}}>
                 <img src={`${url}`+"/images/"+image} alt="" className='rounded-4 ' width={300}/>
                 {
                    !cartItems[id]
                    ? <div>
                        <img src={addiconwhite} alt="" onClick={()=>{addToCart(id), toast.success("Item Added to the Cart!");}} className='food-item-addicon'/>
                      </div>
                    : 
                    <div className='food-item-counter'>
                      <img src={minus} alt="" onClick={()=>removeFromCart(id)} />
                      <p className='mt-3 fs-3'>{cartItems[id]}</p>
                      <img src={add} alt="" onClick={()=>addToCart(id)}/>
                    </div>
                 }
                 <div className='d-flex justify-content-between mt-2 px-3'>
                  <h5 className='text-warning fs-4'>{name}</h5>
                   <div className="rating text-warning">
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStarHalfAlt />
                   </div>
                 </div>
                 <h5 className='text-white px-3 mb-2' width={300} >{description}</h5>
                 <h3 className='text-warning px-3'>₹{price}</h3>
             </div>
  )
}

export default FoodItem
