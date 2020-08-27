import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { useSelector, useDispatch } from "react-redux";
import { loadRoutes } from './routes/index';
import { checkAuthState } from './routes/customRoute';
import { getCartItems } from './redux/actions/shopping'

function App () {

  return (
    <div className="App">
      {loadRoutes()}
    </div>
  );
}

export default App;
