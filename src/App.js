import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  state = {
    todoList: [],
    todo: {
      title: '',
      desc: ''
    }
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
  handleSubmit = event => {
    event.preventDefault()
    this.setState({ todoList: [...this.state.todoList, this.state.todo] })
  }
  render() {
    const { todoList, todo } = this.state
    return (
      <div role="main">
        <h1>Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={todo.name}
              onChange={this.handleChange}
            />
          </label>
          <label>Description</label>
          <textarea
            name="desc"
            value={todo.desc}
            onChange={this.handleChange}
          />
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>

        <div>
          <ul>
            {todoList.map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
