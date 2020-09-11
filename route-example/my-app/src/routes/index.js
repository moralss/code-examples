import React from 'react'
import { Router, Route } from 'react-router';
import Register from '../component/Register'
import history from './history'
import Profile from '../component/Profile'


const loadRoutes = () => {
  return (
    <Router history={history}>
      <Route exact path="/register" component={() => <Register />} />
      <Route exact path="/profile" component={() => <Profile />} />
    </Router>
  )
}



export default loadRoutes;