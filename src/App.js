import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import { Todo } from './components/Todo'
import { AddTodo } from './components/AddTodo'

const App = () => {
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState({})

  const onChange = event => {
    const target = event.target
    //const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    setTodo({
      ...todo,
      [name]: target.value
    })
  }

  const onSubmit = event => {
    event.preventDefault()
    setTodo({ ...todo, created: new Date().toLocaleTimeString })
    setTodoList([...todoList, todo])
  }

  return (
    <div role="main">
      <h1>Todo App</h1>

      <AddTodo onSubmit={onSubmit} onChange={onChange} />

      {todoList.length > 0 ? <Todo todoList={todoList} /> : <p>add a todo.</p>}
    </div>
  )
}

export default hot(module)(App)
