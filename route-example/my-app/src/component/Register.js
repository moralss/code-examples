import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import history from './../routes/history'
import { addUser } from './../redux/actions/user'
function Register () {
  const [user, setUser] = useState({ name: '', email: '', password: '' })
  const dispatch = useDispatch()
  const submit = (event) => {
    const { name, email, password } = user
    event.preventDefault()
    console.log(user)
    dispatch(addUser(user))

    /// send to sever
  }

  return (
    <div>
      <h1> Register </h1>
      <form onSubmit={submit}>
        <input type='text'
          value={user.name}
          placeholder='name'
          onChange={(event) => setUser({ ...user, [event.target.name]: event.target.value })}
          name='name' />
        <input type='email'
          placeholder='email'
          name='email'
          onChange={(event) => setUser({ ...user, [event.target.name]: event.target.value })} />
        <input type='password'
          placeholder='password'
          name='password'
          onChange={(event) => setUser({ ...user, [event.target.name]: event.target.value })} />
        <input type='submit' />
      </form>
    </div>
  )
}

export default Register
