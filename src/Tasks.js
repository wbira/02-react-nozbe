import React from 'react'
import Todo from './Todo'

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
        {this.state.todos.map(todo => <Todo key={todo.id} text={todo.text} />)}
      </div>
    )
  }
})
