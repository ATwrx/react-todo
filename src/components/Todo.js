import React from 'react'

export const Todo = props => {
  const { todoList } = props
  console.log(todoList)
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
