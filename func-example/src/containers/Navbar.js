import React, { useEffect } from 'react'
import history from '../routes/history'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/auth'

const Navbar = () => {
  const isAuthorized = useSelector(state => state.auth.isAuthorized)
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
      {!isAuthorized ? <button onClick={() => navigatePage('signin')}> signin</button> : null}
      {isAuthorized ? <button onClick={() => navigatePage('logout')}> logout </button> : null}
    </div>
  )
}


export default Navbar