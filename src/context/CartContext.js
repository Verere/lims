"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

       
      useEffect(() => {
        setCartToState()
    }, [])

      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const setCartToState = () => {
      setCart (
        localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))        : []
      )
    }
      useEffect(() => {
        setOrderToState()
    }, [])

      useEffect(() => {
        localStorage.setItem('order', JSON.stringify(order))
    }, [order])

    const setOrderToState = () => {
      setOrder (
        localStorage.getItem('order')
        ? JSON.parse(localStorage.getItem('order'))        : []
      )
    }
    
    
   const addToCart = async ({product, name, category, image, price,  qty =1, onSale}) => {
        const item = {product, name, category, image, price, qty, amount: qty * price, onSale}

        const isItemExist = cart?.cartItems?.find(  
          (i) => i.product === item.product
        )

        let newCartItems;

        if(isItemExist){
            newCartItems =  cart?.cartItems?.map((i) =>
            i.product ===isItemExist.product ? item : i)
        }else{
            newCartItems =[...(cart?.cartItems || []), item]
        }
        localStorage.setItem('cart', JSON.stringify({cartItems: newCartItems}))
        setCartToState()
   }
   
   const incr = async (cart, item) => {  
        const newData = [...cart?.cartItems?? []]
        newData.forEach(items => {
          if (items.product === item.product) {
            items.qty += 1
            items.amount= items.qty * items.price 
          }
        })
        localStorage.setItem('cart', JSON.stringify({cartItems: newData}))
        setCartToState()
      }
       
   const decr = async (cart, item) => {        
    
        const newData = [...cart?.cartItems?? []]
        newData.forEach(items => {
          if (items.product === item.product) { 
            items.qty -= 1
            items.amount= items.qty * items.price
                  }

        })
        localStorage.setItem('cart', JSON.stringify({cartItems: newData}))
        setCartToState()
   }
        
      const deleteItem = (cart, item) => {

        const newData = cart?.cartItems?.filter(items => items.product !== item.product)
        localStorage.setItem('cart', JSON.stringify({cartItems: newData}))
        setCartToState()
      }
  

  return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        decr,
       incr,
       setCartToState,
        setCart,
        deleteItem,
        order, 
        setOrder,
        setOrderToState
      }}
      >        
      <div >{children}</div>
    </CartContext.Provider>
  );
};
