import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { CHANGE_AUTHORIZATION, AUTH_SAVE_USER } from '../actions/actionTypes/index'
import store from '../store/index';
import axios from 'axios';

export const checkAuthState = async () => {
  var token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwtDecode(token)
    console.log(decodedToken)
    if (decodedToken.lat < decodedToken.expireDate) {
      const { data } = await axios.post(`http://localhost:3003/refreshToken/${store.getState().auth.user.userId}`)
      localStorage.removeItem("token");
      localStorage.setItem("token", data.token)
    }
    store.dispatch({ type: AUTH_SAVE_USER, payload: decodedToken })
    store.dispatch({
      type: CHANGE_AUTHORIZATION,
      payload: true
    })

  }
}


export const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  checkAuthState()
  return (
    <Route {...rest}
      component={
        props => store.getState().auth.isAuthorized ? (
          <Component {...rest} {...props} />
        ) : (
            <Redirect to="/signup" />
          )
      } />
  );
}


export const PublicRoute = ({
  component: Component,
  ...rest
}) => {
  checkAuthState()
  return (
    <Route {...rest}
      component={
        props => !store.getState().auth.isAuthorized ? (
          <Component {...rest} {...props} />
        ) : (
            <Redirect to="/profile" />
          )
      } />
  );
}
