import React from 'react'

export default class TodoForm extends React.Component {
  render() {
    const { todo } = this.props
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
