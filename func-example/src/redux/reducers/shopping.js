import { SAVE_CART_ITEM, SAVE_PRODUCTS, GET_TOTAL } from '../actions/actionTypes'

const initialState = {
  products: [],
  cartItems: [],
  totalAmount: null
}

const ShoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return { ...state, products: [...action.payload] }
    case SAVE_CART_ITEM:
      return { ...state, cartItems: [...action.payload] }
    case GET_TOTAL:
      const calculatedTotal = state.cartItems.reduce((acc, val) => acc + Number(val.price), 0)
      return { ...state, totalAmount: calculatedTotal }
    default:
      return { ...state }
  }

}


export default ShoppingReducer