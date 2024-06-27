import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from './StoreContext'
import axios from 'axios';
import { BsFillBoxFill } from "react-icons/bs";
import parcel from './../assets/parcel.png';

const MyOrders = () => {
    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);

    const fetchOrders = async (req,res) =>{
        const response = await axios.post(url + "/api/order/userorders" , {} ,{headers:{token}});
        setData(response.data.data);
        console.log(data)
    }

    useEffect(()=>{
      if(token){
        fetchOrders();
      }
    },[token])
  return (
    <div className='bg-black'>
        <div className='container'>
           <div className="row">
             <h2 className='text-white my-3 text-center fw-bold'>My Orders</h2>
    
             <div className="col-lg-12 w-100">
                {
                    data.map((order,index)=>{
                      return(
                        <div className='d-flex gap-4 align-items-center w-100 border border-light p-2 my-3' key={index}>
                            {/* <BsFillBoxFill className='text-white ' /> */}
                            <img src={parcel} alt="" className='img-fluid'/>
                          <div className='d-flex flex-column w-50'>
                                <p className='text-white w-100 fs-4'>
                                    {
                                        order.items.map((item,index)=>{
                                          if(index === order.items.length -1){
                                             return item.name+ " x " + item.quantity
                                          } else {
                                             return item.name+ " x " + item.quantity + " , "
                                          }
                                        })}
                                </p>
                                <div className='d-flex gap-5 '>
                                    <p className='text-white fs-5'>Items:{order.items.length}</p>
                                    <p className='text-white fs-4 fw-bold '>₹{order.amount}.00</p>
                                </div>
                          </div>
                          <div className='d-flex gap-5 '>
                             <p className='text-white '><span>&#x25cf;</span><b>{order.status}</b></p>
                             {/* <p className='text-white'>{order.date}</p> */}
                             <button className='btn btn-light'>Track Order</button>
                          </div>
                        </div>
                      )
                    })
                }
             </div>
           </div>
        </div>
    </div>
  )
}

export default MyOrders
