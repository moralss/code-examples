import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history.js";
import Signup from '../containers/Signup';
import Profile from '../containers/Profile';
import { PrivateRoute, PublicRoute } from './customRoute';
import LandingPage from '../containers/LandingPage'
import Login from '../containers/Login'
import Navbar from '../containers/Navbar'

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

        <PublicRoute
          exact
          path="/"
          component={props => <LandingPage {...props} />}
        />

        <PublicRoute
          exact
          path="/signin"
          component={props => <Login {...props} />}
        />

      </div>
    </Router>
  )

}