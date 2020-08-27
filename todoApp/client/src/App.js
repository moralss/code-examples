import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App () {
  const [currentCount, setCount] = useState(60);
  const [total, setTime] = useState("")
  const [todos, settodos] = useState([{ homework: "home", status: false }])
  const timer = () => setCount(currentCount - 1);

  useEffect(
    () => {
      if (currentCount <= 0) {
        return;
      }
      const id = setInterval(timer, 1000);
      updateClockDisplay(currentCount)
      return () => clearInterval(id);
    },
    [currentCount]
  );

  const updateClockDisplay = (counter) => {
    var minutes = Math.floor(counter / 60);
    var seconds = counter % 60;
    var formattedSeconds = seconds >= 10 ? seconds : "0" + seconds;
    setTime(minutes + ":" + formattedSeconds);
  };


  return (
    <div className="App">
      <h1> timer {total} </h1>
    </div>
  );
}

export default App;
