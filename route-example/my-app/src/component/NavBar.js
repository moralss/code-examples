import React from 'react'
import history from '../routes/history'

function NavBar () {
  const navigate = (navName) => {
    console.log("changed route", navName)
    history.push(navName)
  }

  return (
    <div>
      <button onClick={() => navigate("register")}>Register</button>
      <button onClick={() => navigate("profile")}>Profile</button>
    </div>
  )
}

export default NavBar
