import React, { useEffect } from 'react'
import history from '../routes/history'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/auth'
import { getCartItems, addItemToCart, getProducts } from '../redux/actions/shopping';

const Products = () => {
  const products = useSelector(state => state.shopping.products)
  const userId = useSelector(state => state.auth.user.userId)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCartItems(userId))
  }, [])

  const addToCart = (product) => {
    const cartDetails = { name: product.name, price: product.price, userId }
    dispatch(addItemToCart(cartDetails))
    dispatch(getCartItems(userId))
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1> Products </h1>
      {products.map(product =>
        <div>
          name : {product.name} price : {product.price}
          <button onClick={() => addToCart(product)}> Add to cart</button>
        </div>)}
    </div>
  )
}


export default Products