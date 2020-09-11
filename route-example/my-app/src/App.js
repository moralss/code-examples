import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoadRoutes from './routes'
import NavBar from './component/NavBar'

function App () {
  return (
    <div className="App">
      <NavBar />
      <LoadRoutes />
    </div>
  );
}

export default App;
