import React from 'react'
import { hot } from 'react-hot-loader'
import { Todo } from './components/Todo'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  state = {
    todoList: [],
    todo: {}
  }

  handleChange = event => {
    const target = event.target
    //const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      todo: {
        ...this.state.todo,
        [name]: target.value,
        created: new Date().toLocaleString()
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { todo } = this.state
    this.setState({ todoList: [...this.state.todoList, todo] })
  }

  render() {
    const { todoList } = this.state
    return (
      <div role="main">
        <h1>Todo App</h1>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {todoList.length > 0 ? (
          <Todo todoList={todoList} />
        ) : (
          <p>add a todo.</p>
        )}
      </div>
    )
  }
}

export default hot(module)(App)
