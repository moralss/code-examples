import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/auth';

const Login = () => {
  const [loginDetails, setloginData] = useState({ email: "", password: "" })
  const dispatch = useDispatch()
  const error = useSelector(state => state.auth.error.error)

  const submit = () => {
    console.log(loginDetails)
    dispatch(signin(loginDetails))
  }

  return (
    <div>
      <input type="text"
        placeholder="email"
        value={loginDetails.email}
        name="email"
        onChange={(e) => setloginData({ ...loginDetails, [e.target.name]: e.target.value })} />
      <input type="password"
        value={loginDetails.password}
        onChange={(e) => setloginData({ ...loginDetails, [e.target.name]: e.target.value })}
        name="password"
        placeholder="password" />
      <br />
      <p style={{ color: "red" }}>{error} </p>
      <button onClick={() => submit()}> submit </button>
    </div>
  )
}


export default Login