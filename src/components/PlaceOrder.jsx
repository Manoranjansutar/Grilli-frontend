import React, { useContext , useState } from 'react'
import { StoreContext } from './StoreContext'
import { FaLongArrowAltRight } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



const PlaceOrder = () => {
    const {getTotalCartAmount ,cartLength ,foodList ,url ,cartItems ,token} = useContext(StoreContext);
    const [data,setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        country:"",
        state:"",
        city:"",
        zipCode:"",
        street:"",
        phone:""
    })

    const onChangeHandler = (event)=>{
       const name = event.target.name;
       const value = event.target.value;
       setData(data=>({...data,[name]:value}))
    }
   
    
    const placeOrder = async (event)=>{
       event.preventDefault();
       let orderItems= [];
       foodList.map((item)=>{
         if( cartItems[item._id]>0){
            let itemInfo = item;
            itemInfo["quantity"] = cartItems[item._id];
            orderItems.push(itemInfo);

         }
       })
       console.log(orderItems)
       let orderData = {
         address:data,
         items:orderItems,
         amount:getTotalCartAmount() + 100,
       }
       console.log(orderData);
       let response = await axios.post(url+"/api/order/placeorder",orderData,{headers:{token}});
       console.log(response);
       if(response.data.success){
        const {session_url} = response.data.success_url;
        console.log(session_url);
        window.location.replace(response.data.success_url)
       }
       else {
         alert("error")
       }
    }

  return (
   <div className='bg-black pt-5'>
        <div className='container mt-5'>
        <Form onSubmit={placeOrder}>
           <div className="row">
            <div className="col-lg-6">
                <h2 className='bg-white p-2 rounded-2 text-center fw-bold mb-3'>Delivery Information</h2>
                    <div className='d-flex gap-4 '>
                        <input required type="text" className='form-control bg-transparent text-light fw-bold custom-placeholder border  border-secondary' placeholder='First Name' name='firstName' value={data.firstName} onChange={onChangeHandler}/>
                        <input required type="text" className='form-control bg-transparent custom-placeholder text-light fw-bold border  border-secondary' placeholder='Last Name' name='lastName' value={data.lastName} onChange={onChangeHandler}/>
                    </div>
                    <input required type="email" className='form-control my-3 bg-transparent custom-placeholder text-light fw-bold border  border-secondary' placeholder='Email Addresss' name='email' value={data.email} onChange={onChangeHandler}/>
                    <div className='d-flex gap-4 my-3'>
                        <input required type="text" className='form-control bg-transparent custom-placeholder text-light fw-bold border  border-secondary' placeholder='Country' name='country' value={data.country} onChange={onChangeHandler}/>
                        <input required type="text" className='form-control bg-transparent custom-placeholder text-light fw-bold border  border-secondary' placeholder='State' name='state' value={data.state} onChange={onChangeHandler}/>
                    </div>
                    <div className='d-flex gap-4 '>
                        <input required type="text" className='form-control bg-transparent custom-placeholder text-light fw-bold border  border-secondary' placeholder='City' name='city' value={data.city} onChange={onChangeHandler}/>
                        <input required type="number" className='form-control bg-transparent custom-placeholder text-light fw-bold border  border-secondary' placeholder='ZipCode' name='zipCode' value={data.zipCode} onChange={onChangeHandler}/>
                    </div>
                    <input required type="text" className='form-control my-3 bg-transparent custom-placeholder text-light fw-bold border  border-secondary' placeholder='Street' name='street' value={data.street} onChange={onChangeHandler}/>
                   <input required type="number"  placeholder='Phone Number' className='form-control bg-transparent custom-placeholder text-light fw-bold border  border-secondary' name='phone' value={data.phone} onChange={onChangeHandler}/>
               
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4">
            <div className='checkout'>
                      <h2 className='bg-white fw-bold text-center p-2 rounded-2'>Cart Totals - {cartLength()} Items</h2>
                      <p className='text-white fs-2 d-flex justify-content-between'>Subtotal:<span>₹ {getTotalCartAmount()}</span></p>
                      <p className='text-white fs-2 d-flex justify-content-between'>Delivery:<span>₹ 100</span></p>
                      <hr  className='w-100 text-white'/>
                      <p className='text-white fs-2 d-flex justify-content-between'>Total:<span>₹ {getTotalCartAmount() + 100}</span></p>
                      <button type='submit'>PROCEED TO PAYMENT <FaLongArrowAltRight className='checkout-arrow fs-4'/></button>
                 </div>
                 <div className='bg-light mt-5 p-4'>
                <h5 className='fw-bold'>Review your order and address details to avoid cancellations</h5>
                <p className='fs-6'><span className='text-danger fw-bold '>Note: </span>If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds</p>
                <p className='text-muted'>Avoid cancellation as it leads to food wastage.</p>
                <p className='text-danger fw-bold'>Read Cancellation Policy</p>
             </div>
            </div>
           </div>
           </Form>
        </div>
   </div>
  )
}

export default PlaceOrder
