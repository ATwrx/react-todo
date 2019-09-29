import React from 'react'
import { hot } from 'react-hot-loader'
import { Todo } from './components/Todo'

class App extends React.Component {
  state = {
    todoList: [],
    todo: {
      title: '',
      desc: '',
      created: ''
    }
  }

  timeCreated = () => {
    const d = new Date().toLocaleString()
    const utcDate = d.toLocaleString()
    this.setState({ todo: { ...this.state.todo, created: d } })
  }

  handleChange = event => {
    const target = event.target
    //const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      todo: {
        ...this.state.todo,
        [name]: target.value
      }
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    await this.timeCreated()
    this.setState({ todoList: [...this.state.todoList, this.state.todo] })
  }
  render() {
    const { todoList, todo } = this.state
    return (
      <div role="main">
        <h1>Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Title
              <input
                type="text"
                name="title"
                value={todo.name}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Description
              <textarea
                name="desc"
                value={todo.desc}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <button type="submit" value="Submit">
            Submit
          </button>
        </form>

        {todoList.length > 0 ? (
          <div>
            <Todo todoList={todoList} />
          </div>
        ) : (
          <p>add a todo.</p>
        )}
      </div>
    )
  }
}

export default hot(module)(App)
