import React, { useContext } from 'react'
// import banner from './../assets/Online Order Now Restaurant Discount Banner - Made with PosterMyWall.jpg';
// import banner from './../assets/cart_banner.jpg';
// import banner from './../assets/Online Order Now Restaurant Discount Banner.jpg';
import banner from './../assets/order banner.jpg';
import CartDetails from './CartDetails';
import { StoreContext } from './StoreContext';
import EmptyCart from './EmptyCart';

const Cart = () => {
    const {cartLength} = useContext(StoreContext)
  return (
    <div className='conatiner-fluid bg-black'>
        <div className="row">
            <div className="col-lg-12">
                <h1 className='text-white text-center my-3'>My Cart</h1>
                {
                   cartLength() ? <CartDetails/> : <EmptyCart/>
                }
            </div>
        </div>
    </div>
  )
}

export default Cart
