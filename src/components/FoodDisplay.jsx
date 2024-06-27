import React, { useContext } from 'react'
import FoodItem from './FoodItem'
import { StoreContext } from './StoreContext';

const FoodDisplay = ({category}) => {
    const {foodList} = useContext(StoreContext);
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-12">
        <h2 className='text-warning my-3'>Top dishes near you</h2>
        <div className='d-flex flex-wrap gap-4'>
            {
                foodList.map((item,index)=>{
                    if(category === 'All' || category === item.category){
                        return(
                            <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                        )
                    }
                })
            }
        </div>
        </div>
      </div>
    </div>
  )
}

export default FoodDisplay
