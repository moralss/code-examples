import React from 'react'

function Todo (props) {
  return (
    <div>
      <div key={props.todo.id}>
        <p onClick={() => props.startTodo(props.todo)}> todo name : {props.todo.name}</p>
        <p> todo time : {props.todo.time}</p>
      </div>
    </div>
  )
}

export default Todo
