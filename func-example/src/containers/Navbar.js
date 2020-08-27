import React, { useEffect } from 'react'
import history from '../routes/history'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/auth'

const Navbar = () => {
  const isAuthorized = useSelector(state => state.auth.isAuthorized)
  const cartItems = useSelector(state => state.shopping.cartItems)
  const dispatch = useDispatch()
  const navigatePage = (routeName) => {
    if (routeName == "logout") {
      dispatch(logout())
      return
    }
    history.push(routeName)
  }

  return (
    <div style={{ textAlign: "center" }}>
      {!isAuthorized ? <button onClick={() => navigatePage('signup')}> signup </button> : null}
      {isAuthorized ? <button onClick={() => navigatePage('cart')}> cart {cartItems.length} </button> : null}
      {isAuthorized ? <button onClick={() => navigatePage('/')}> products </button> : null}
      {!isAuthorized ? <button onClick={() => navigatePage('signin')}> signin</button> : null}
      {isAuthorized ? <button onClick={() => navigatePage('logout')}> logout </button> : null}
    </div>
  )
}


export default Navbar