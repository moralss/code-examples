import { SAVE_CART_ITEM, GET_TOTAL, SAVE_PRODUCTS } from '../actions/actionTypes/index'
import axios from 'axios';

export const getProducts = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('http://localhost:3003/products');
      dispatch({ type: SAVE_PRODUCTS, payload: data })
    } catch (e) {
      console.log(e)
    }
  }
}

export const addItemToCart = (product) => {
  return async dispatch => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:3003/carts", product, { headers: { Authorization: token } })
      dispatch({ type: SAVE_CART_ITEM, payload: product })
      dispatch({ type: GET_TOTAL })
    } catch (e) {
      console.log(e)
    }
  }
}

export const getCartItems = (userId) => {
  return async dispatch => {
    try {
      const token = localStorage.getItem("token");
      console.log(token)
      const { data } = await axios.get(`http://localhost:3003/carts/${userId}`, { headers: { Authorization: token } })
      dispatch({ type: SAVE_CART_ITEM, payload: data })
      dispatch({ type: GET_TOTAL })
    } catch (e) {
      console.log(e)
    }
  }
}
