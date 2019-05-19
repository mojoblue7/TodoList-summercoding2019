import React, { Component } from "react"
import "../css/TodoItem.css"

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModified: false
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.todoChecked !== nextProps.todoChecked ||
      this.props.priority !== nextProps.priority ||
      this.props.title !== nextProps.title ||
      this.props.content !== nextProps.content ||
      this.state.isModified !== nextState.isModified
    )
  }

  render() {
    let { isModified } = this.state
    const {
      title,
      content,
      todoChecked,
      id,
      priority,
      dueDate,
      onToggle,
      onRemove,
      dueDateChecked,
      onChangePriority,
      onModifyMode
    } = this.props
    return (
      <div className="todo-item" onClick={() => onToggle(id, isModified)}>
        <div>
          우선순위 :
          {!todoChecked ? (
            <input
              id={id}
              className="priority-text"
              type="text"
              value={priority}
              onClick={(e) => e.stopPropagation()}
              onChange={onChangePriority}
            />
          ) : (
            <input className="priority-text" value={priority} disabled />
          )}
        </div>
        <div className={`todo-text ${todoChecked && "checked"}`}>
          <div>
            제목 :{" "}
            {!isModified ? (
              title
            ) : (
              <input
                name="title"
                id={id}
                type="text"
                value={title}
                onClick={(e) => {
                  e.stopPropagation()
                }}
                onChange={onModifyMode}
              />
            )}
          </div>
          <div>
            내용 :{" "}
            {!isModified ? (
              content
            ) : (
              <input
                name="content"
                id={id}
                type="text"
                value={content}
                onClick={(e) => {
                  e.stopPropagation()
                  this.setState({})
                }}
                onChange={onModifyMode}
              />
            )}
          </div>
          <div>{!dueDateChecked ? "" : `마감기한 : ${dueDate.toLocaleString()}`}</div>
        </div>
        {todoChecked && <div className="check-mark">✓</div>}

        {!isModified ? (
          <div
            style={{ fontSize: "2rem" }}
            className="modify"
            onClick={(e) => {
              e.stopPropagation() // onToggle이 실행되지 않도록 함
              // onModifyMode(id)
              this.setState({
                isModified: true
              })
            }}
          >
            수정
          </div>
        ) : (
          <div
            style={{ fontSize: "2rem" }}
            className="accept"
            onClick={(e) => {
              e.stopPropagation() // onToggle이 실행되지 않도록 함
              this.setState({
                isModified: false
              })
            }}
          >
            확인
          </div>
        )}
        <div
          style={{ fontSize: "2rem" }}
          className="remove"
          onClick={(e) => {
            e.stopPropagation() // onToggle이 실행되지 않도록 함

            onRemove(id)
          }}
        >
          삭제
        </div>
      </div>
    )
  }
}

export default TodoItem
