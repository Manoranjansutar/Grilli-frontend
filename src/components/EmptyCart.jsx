import React from 'react';
import emptycart from './../assets/EmptyCart-removebg-preview.png';


const EmptyCart = () => {
  return (
    <div className='text-center'>
      <img src={emptycart} alt="" className='w-50 img-fluid' />
    </div>
  )
}

export default EmptyCart
