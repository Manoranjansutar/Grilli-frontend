import React from 'react'
import { menu_list } from '../assets/menuList'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='container'>
       <div className="row">
        <div className="col-lg-12">
          <h2 className='text-warning my-3'>Explore Our Menu</h2>
          <p className='text-white fs-4'>Choose from a diverse menu featuring a delectable array of dishes . Our mission is to satisfy your cravings and elevate your dining experience , one delicious meal at a time.</p>
        </div>
        <div className='col-lg-12 d-flex my-3 justify-content-between  category'>
          {
            menu_list.map((item,index)=>{
               return(
                 <div className='d-flex justify-content-center align-items-center flex-column' key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All" : item.menu_name)}>
                  <img src={item.menu_image} alt="" className={category===item.menu_name?"active" :""}/>
                  <h4 className='text-warning'>{item.menu_name}</h4>
                 </div>
               )
            })
          }
        </div>
       </div>
    </div>
  )
}

export default ExploreMenu
