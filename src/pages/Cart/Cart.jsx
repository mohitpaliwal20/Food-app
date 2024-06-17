import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

  const {cartItems,food_list,removeFromCart}=useContext(StoreContext)

  return (
    <div className='cart'>
      <div></div>
    </div>
  )
}

export default Cart