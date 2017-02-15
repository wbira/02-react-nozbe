import React from 'react'

export default React.createClass({
  getInitialState () {
    return {
      todos: [
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: false },
        { id: 3, text: 'Task 3', completed: false }
      ]
    }
  },

  render () {
    return (
      <div>
        <h1>Todos</h1>
        {this.state.todos.map(todo => todo.text)}
      </div>
    )
  }
})
