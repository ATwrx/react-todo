import React from 'react'
import propTypes from 'prop-types'

export const Todo = props => {
  const { todoList } = props
  return (
    <ul>
      {todoList.map(({ title, desc, created }, i) => {
        return (
          <li key={i}>
            <p>
              <b>{title}: </b>
              {desc} (created on {created})
            </p>
          </li>
        )
      })}
    </ul>
  )
}

Todo.propTypes = {
  todoList: propTypes.array.isRequired
}
