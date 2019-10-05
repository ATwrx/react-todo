import React from 'react'
import propTypes from 'prop-types'

export const Todo = props => {
  const { todoList } = props
  const todoItems = todoList.map(({ title, desc, created }, i) => (
    <li key={i}>
      <p>
        <b>{title}: </b>
        {desc} (created on {created})
      </p>
    </li>
  ))
  return <ul>{todoItems}</ul>
}

Todo.propTypes = {
  todoList: propTypes.array.isRequired
}
