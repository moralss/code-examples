import React from 'react'
import { useSelector } from 'react-redux'

function CartItems () {
  const cartItems = useSelector(state => state.shopping.cartItems)
  const totalAmount = useSelector(state => state.shopping.totalAmount)
  return (
    <div>
      <h1> Cart </h1>
      {cartItems.map(cartItem =>
        <div>
          name : {cartItem.name} price : {cartItem.price}
        </div>)}
        totalAmount : {totalAmount === null ? 0 : totalAmount}
    </div>
  )
}

export default CartItems
