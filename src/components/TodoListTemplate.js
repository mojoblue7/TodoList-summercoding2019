import React from "react"
import "../css/TodoListTemplate.css"

const TodoListTemplate = ({ form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        <b>To do list</b>
      </div>
      {/* <section className="palette-wrapper">{palette}</section> */}
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  )
}

export default TodoListTemplate
