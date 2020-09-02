import React, { useState } from 'react'
import './App.css';
import FormTodo from './components/formTodo'
import Todo from './components/Todo'

function App () {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({ name: "", id: "", seconds: "", minutes: "" })

  const setClock = (counter) => {
    var minutes = Math.floor(counter / 60);
    var seconds = counter % 60;
    var formattedSeconds = seconds >= 10 ? seconds : "0" + seconds;
    return minutes + ":" + formattedSeconds
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setTodo({ ...todo, [name]: value })

  }

  const startTodo = (selectedTodo) => {
    setInterval(() => {
      if (selectedTodo.timeInSeconds !== 0) {
        selectedTodo.timeInSeconds--;
        const filteredTodos = todos.filter(todo => todo.id !== selectedTodo.id)
        var currentTime = setClock(selectedTodo.timeInSeconds)
        setTodos([...filteredTodos, { name: todo.name, timeInSeconds: todo.timeInSeconds, time: currentTime }])
        console.log(todos)
      }
    }, 1000)
  }

  const saveTodo = (e) => {
    e.preventDefault();
    const timeInSeconds = 60
    const newTodo = { id: Math.random(), name: todo.name, timeInSeconds: timeInSeconds, time: setClock(timeInSeconds) }
    setTodos([...todos, newTodo])
  }

  return (
    <div className="App">
      <h1>  Todo app </h1>
      {todos.map(todo =>
        <Todo startTodo={startTodo} todo={todo} />
      )}
      <FormTodo saveTodo={saveTodo} todo={todo} handleChange={handleChange} />
    </div>
  )
}

export default App;

