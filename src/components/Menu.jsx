import React, { useState } from 'react'
import menuBanner from './../assets/menu_banner.png';
import ExploreMenu from './ExploreMenu';
import FoodDisplay from './FoodDisplay';
import mobileapp from './../assets/mobileapp.png'
import appstore from './../assets/app_store.png';
import playstore from './../assets/play_store.png';



const Menu = () => {
  const [category,setCategory] = useState('All')
  return (
   <div className='bg-black'>
      <div className='container-fluid bg-black' >
         <div className="row">
          <div className="col-lg-12">
            <img src={menuBanner} alt="" className='img-fluid object-fit-cover'/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <hr  className='text-warning container'/>
            <FoodDisplay category={category}/>
            <div className='d-flex justify-content-center align-items-center'>
            </div>
          </div>
         </div>
      </div>
      <div className="container  py-5">
        <div className="row">
        <div className="col-lg-6 flex-center">
            <img src={mobileapp} alt="" className='' width={450}/>
          </div>
          <div className="col-lg-6 text-center flex-center flex-column text-white py-4">
             <h2 className='ultra-regular'>For better Experience download our Mobile App</h2>
             <div className='d-flex mt-3 gap-2'>
              <img src={appstore} alt="" className='border border-secondary rounded-3'/>
              <img src={playstore} alt="" className='border border-secondary rounded-3'/>
             </div>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Menu
