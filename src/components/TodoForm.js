import React from 'react'
import propTypes from 'prop-types'

export default class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label>
            Title
            <input
              type="text"
              name="title"
              onChange={this.props.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description
            <textarea name="desc" onChange={this.props.handleChange} />
          </label>
        </div>

        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    )
  }
}

TodoForm.propTypes = {
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired
}
