import { createContext, useEffect, useState } from "react";
import axios from'axios'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{
    const url = 'https://grilli-backend.onrender.com'
    const [foodList, setFoodList] = useState([]);
    const [cartItems,setCartItems] = useState({});
    const [token,setToken] = useState("");


    const fetchFoodList = async () =>{
      const response = await axios.get(`${url}`+"/api/food/list");
      setFoodList(response.data.data);
    }

    const addToCart = async (itemId) =>{
      if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
      } else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      }
      if(token){
        await axios.post(url + "/api/cart/add" ,{itemId} , {headers:{token}})
      }
    }

    const removeFromCart = async (itemId) =>{
       setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
       if(token){
        await axios.post(url + "/api/cart/remove" ,{itemId} , {headers:{token}})
      }
    }

    const loadCartData = async (token)=>{
       const response = await axios.post(url + "/api/cart/list" ,{}, {headers:{token}});
       setCartItems(response.data.cartData)
    }

    const getTotalCartAmount = () =>{
      let totalAmount = 0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInfo = foodList.find((product)=>product._id === item)
          totalAmount += itemInfo.price * cartItems[item]
        }
      }
      return totalAmount;
      
    }

    const cartLength = () =>{
      let cartlength =0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          cartlength += 1
        }
      }
      return cartlength;
    }

    useEffect(()=>{
      async function loadData (){
        await fetchFoodList();
        if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"))       
       }
      }
      loadData();
    },[])


    useEffect(()=>{
        fetchFoodList();
    },[])
   const contextValue = {
      url,
      foodList,
      addToCart,
      removeFromCart,
      cartItems,
      setCartItems,
      token,
      setToken,
      getTotalCartAmount,
      cartLength
   }


   return(
      <StoreContext.Provider value={contextValue}>
        {props.children}
      </StoreContext.Provider>
   )
}

export default StoreContextProvider;