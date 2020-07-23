import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { useSelector, useDispatch } from "react-redux";
import { loadRoutes } from './routes/index';
import { checkAuthState } from './routes/privateRoute';


function App () {
  const message = useSelector(state => state.message);
  const dispatch = useDispatch()

  useEffect(() => {
    checkAuthState()
  }, [])



  return (
    <div className="App">
      {loadRoutes()}
    </div>
  );
}

export default App;
