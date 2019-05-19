import React, { Component } from "react"
import TodoListTemplate from "./components/TodoListTemplate"
import Form from "./components/Form"
import TodoItemList from "./components/TodoItemList"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.notifyOverDueDate()
  }

  id = 4

  state = {
    currTime: new Date(),
    title: "",
    content: "",
    dueDate: "",
    dueDateChecked: false,
    priority: "",
    todos: [
      {
        id: 0,
        title: "test title",
        dueDate: "",
        dueDateChecked: false,
        content: "test content",
        priority: "",
        todoChecked: false
      },
      {
        id: 1,
        title: "test dueDateChecked title",
        dueDate: "",
        dueDateChecked: false,
        content: "test dueDateChecked content",
        priority: "",
        todoChecked: true
      },
      {
        id: 2,
        title: "Over1",
        dueDate: new Date(2000, 10, 1),
        dueDateChecked: true,
        content: "test dueDateChecked content",
        priority: "1",
        todoChecked: false
      },
      {
        id: 3,
        title: "Over2",
        dueDate: new Date(2015, 10, 1),
        dueDateChecked: true,
        content: "test dueDateChecked content",
        priority: "4",
        todoChecked: false
      }
    ]
  }

  notifyOverDueDate = (e) => {
    const { currTime, todos } = this.state
    const overTodos = todos.filter((todo) => todo.dueDateChecked && currTime > todo.dueDate)
    overTodos.forEach((todo) => {
      toast(`${todo.title}의 마감기한이 지났습니다.`)
    })
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
      warningText: ""
    })
  }

  handleChangeContent = (e) => {
    this.setState({
      content: e.target.value,
      warningText: ""
    })
  }

  handleDueDateChecked = (e) => {
    this.setState({
      dueDateChecked: e.target.checked === true ? true : false
    })
  }

  onChangeDueDate = (date) => {
    this.setState({
      dueDate: date
    })
  }

  onChangePriority = (e) => {
    const { todos } = this.state
    const index = todos.findIndex((todo) => todo.id === Number(e.target.id))

    if (isNaN(e.target.value)) {
      alert("숫자를 입력해주세요")
      todos[index]["priority"] = ""
    } else {
      todos[index]["priority"] = Number(e.target.value)
      this.setState({
        todos: [...todos]
      })
    }
  }

  handleCreate = () => {
    const { title, content, todos, dueDate, dueDateChecked } = this.state
    if (title === "" || content === "") {
      if (title !== "") {
        this.setState({
          warningText: "내용을 입력하세요."
        })
      } else if (content !== "") {
        this.setState({
          warningText: "제목을 입력하세요."
        })
      } else {
        this.setState({
          warningText: "제목과 내용을 입력하세요."
        })
      }
    } else if (dueDateChecked && dueDate === "") {
      this.setState({
        warningText: "날짜와 시간을 클릭하세요."
      })
    } else {
      this.setState({
        currTime: new Date().toLocaleDateString(),
        warningText: "",
        title: "",
        content: "",
        dueDateChecked: false,
        dueDate: "",
        priority: -1,
        todos: todos.concat({
          id: this.id++,
          title: title,
          content: content,
          todoChecked: false,
          dueDateChecked: dueDateChecked,
          dueDate: !dueDateChecked ? "" : dueDate
        })
      })
    }
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate()
    }
  }

  handleToggle = (id, isModified) => {
    const { todos } = this.state
    const index = todos.findIndex((todo) => todo.id === id)

    const selected = todos[index]

    const nextTodos = [...todos]

    nextTodos[index] = {
      ...selected,
      todoChecked: !selected.todoChecked
    }

    if (!isModified) {
      this.setState({
        todos: nextTodos
      })
    }
  }
  onModifyMode = (e) => {
    const { todos } = this.state
    const index = todos.findIndex((todo) => todo.id === Number(e.target.id))
    const nextTodos = [...todos]
    nextTodos[index][e.target.name] = e.target.value
    this.setState({
      todos: nextTodos
    })
  }

  handleRemove = (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter((todo) => todo.id !== id)
    })
  }

  render() {
    const { title, content, todos, warningText, dueDate, dueDateChecked } = this.state
    const {
      handleChangeTitle,
      handleChangeContent,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleDueDateChecked,
      onChangeDueDate,
      onChangePriority,
      onModifyMode,
      onAcceptModifyMode
    } = this
    return (
      <TodoListTemplate
        form={
          <Form
            title={title}
            content={content}
            dueDate={dueDate}
            onKeyPress={handleKeyPress}
            handleChangeTitle={handleChangeTitle}
            handleChangeContent={handleChangeContent}
            onCreate={handleCreate}
            warningText={warningText}
            onChangeDueDate={onChangeDueDate}
            onChangeCheckBox={handleDueDateChecked}
            dueDateChecked={dueDateChecked}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
          onChangePriority={onChangePriority}
          onModifyMode={onModifyMode}
          onAcceptModifyMode={onAcceptModifyMode}
        />
        <div>
          <ToastContainer autoClose={false} />
        </div>
      </TodoListTemplate>
    )
  }
}

export default App
