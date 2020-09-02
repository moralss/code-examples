import React from 'react'

function FormTodo (props) {
  return (
    <div>
      <form onSubmit={(e) => props.saveTodo(e)}
        style={{ display: "grid", margin: "auto auto", gridTemplateColumns: "repeat(1fr , 1)", width: "20%" }}>
        <input value={props.todo.name}
          placeholder="name"
          name="name"
          onChange={(e) => props.handleChange(e)}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default FormTodo
