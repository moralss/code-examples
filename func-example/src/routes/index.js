import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history.js";
import Signup from '../containers/Signup';
import Profile from '../containers/Profile';
import { PrivateRoute, PublicRoute } from './customRoute';
import LandingPage from '../containers/LandingPage'
import Login from '../containers/Login'
import Navbar from '../containers/Navbar'
import Products from '../containers/Products'
import CartItems from '../containers/CartItems'

export const loadRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Navbar />
        <PublicRoute
          exact
          path="/signup"
          component={props => <Signup {...props} />}
        />

        <PrivateRoute
          exact
          path="/profile"
          component={props => <Profile {...props} />}
        />
        {/* 
        <PublicRoute
          exact
          path="/"
          component={props => <LandingPage {...props} />}
        /> */}

        <PublicRoute
          exact
          path="/signin"
          component={props => <Login {...props} />}
        />

        <PrivateRoute
          exact
          path="/"
          component={props => <Products {...props} />}
        />

        <PrivateRoute
          exact
          path="/cart"
          component={props => <CartItems {...props} />}
        />
      </div>
    </Router>
  )

}