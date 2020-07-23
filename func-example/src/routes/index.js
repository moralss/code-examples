import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history.js";
import Signup from '../containers/Signup';
import Profile from '../containers/Profile';
import { PrivateRoute, PublicRoute } from './customRoute';
import LandingPage from '../containers/LandingPage'

export const loadRoutes = () => {
  return (
    <Router history={history}>
      <div>
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

      </div>
    </Router>
  )

}