import React, { Component } from "react"
import TodoItem from "./TodoItem"
import "../css/TodoItemList.css"

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos
  }

  render() {
    const {
      todos,
      onToggle,
      onRemove,
      onChangePriority,
      onModifyMode,
      onAcceptModifyMode
    } = this.props

    const todoList = todos.map((todos) => (
      <TodoItem
        {...todos}
        onToggle={onToggle}
        onRemove={onRemove}
        priority={todos.priority}
        key={todos.id}
        onChangePriority={onChangePriority}
        onModifyMode={onModifyMode}
        onAcceptModifyMode={onAcceptModifyMode}
      />
    ))

    return <div>{todoList}</div>
  }
}

export default TodoItemList
