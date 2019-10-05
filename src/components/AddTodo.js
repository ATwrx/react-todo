import React from 'react'
import propTypes from 'prop-types'

export const AddTodo = props => {
  const { onSubmit, onChange } = props

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          Title
          <input type="text" name="title" onChange={onChange} />
        </label>
      </div>
      <div>
        <label>
          Description
          <textarea name="desc" onChange={onChange} />
        </label>
      </div>
      <button type="submit" value="Submit">
        Submit
      </button>
    </form>
  )
}

AddTodo.propTypes = {
  onChange: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired
}
