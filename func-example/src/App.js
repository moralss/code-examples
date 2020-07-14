import React,{useState} from 'react';
import logo from './logo.svg';
import { useSelector , useDispatch} from "react-redux";
import { updateMessage  } from './actions/index';
// import './App.css';

function App() {
 const message = useSelector(state => state.message);
 const [messageValue, setMessage] = useState("") 
 const dispatch = useDispatch()


  return (
    <div className="App">
      <header className="App-header">
      <input onChange={(e) => setMessage(e.target.value) } type="text"/>
      <button onClick={() => dispatch(updateMessage(messageValue))}>d</button>
      <h1>{message}</h1>
      </header>
    </div>
  );
}

export default App;
