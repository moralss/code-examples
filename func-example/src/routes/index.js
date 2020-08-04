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
        <Route
          exact
          path="/signup"
          component={props => <Signup {...props} />}
        />

        <Route
          exact
          path="/profile"
          component={props => <Profile {...props} />}
        />

        <Route
          exact
          path="/"
          component={props => <LandingPage {...props} />}
        />

        <Route
          exact
          path="/signin"
          component={props => <Login {...props} />}
        />

      </div>
    </Router>
  )

}