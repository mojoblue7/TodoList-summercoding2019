import React, { Component } from "react"
import "../css/Form.css"
import DatePicker from "./CustomDatePicker"

class Form extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.warningText !== nextProps.warningText ||
      this.props.title !== nextProps.title ||
      this.props.content !== nextProps.content ||
      this.props.dueDate !== nextProps.dueDate ||
      this.props.dueDateChecked !== nextProps.dueDateChecked
    )
  }

  render() {
    const {
      title,
      content,
      handleChangeTitle,
      handleChangeContent,
      onCreate,
      onKeyPress,
      warningText,
      onChangeDueDate,
      onChangeCheckBox,
      dueDateChecked
    } = this.props

    return (
      <div className="form-wrapper">
        <div className="form">
          <p> 제목 : </p>
          <input
            className="todo-title"
            value={title}
            onChange={handleChangeTitle}
            onKeyPress={onKeyPress}
          />
          <p> 내용 : </p>
          <input
            className="todo-content"
            value={content}
            onChange={handleChangeContent}
            onKeyPress={onKeyPress}
          />
          <div className="create-button" onClick={onCreate}>
            추가
          </div>
        </div>
        <div className="warning-box">
          <div className="warning-text">{warningText}</div>
        </div>

        <div className="due-date-form-wrapper">
          <div className="due-date-text">마감기한 설정</div>

          <input
            className="checkbox"
            type="checkbox"
            onChange={onChangeCheckBox}
            checked={dueDateChecked}
          />
          <div className={`due-date-form ${dueDateChecked}`}>
            <DatePicker
              onChange={onChangeDueDate}
              disabled={dueDateChecked ? false : true}
              dateFormat="yyyy/MM/dd aa hh:mm"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Form
