import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../actions/auth';
import history from '../routes/history';
import { shouldRedirect } from '../routes/privateRoute';

const Signup = () => {
  const [formInfo, setFormInfo] = useState({ password: '', email: '', name: '' })
  const isAuthorized = useSelector(state => state.auth.isAuthorized);
  const dispatch = useDispatch()


  const submit = () => {
    dispatch(signup(formInfo))
  }

  return (
    <div>
      <div>
        <input type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
          value={formInfo.password}
        />

        <input type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
          value={formInfo.email}
        />

        <input type="name"
          name="name"
          onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
          value={formInfo.name}
          placeholder="name"
        />
        <button onClick={() => submit()}> submit </button>
      </div>
    </div>
  )

}

export default Signup;