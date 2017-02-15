import React from 'react'
import Todo from './Todo'
import _ from 'lodash'

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

  markTaskAsCompleted (taskId) {
    var task = _.find(this.state.todos, todo => todo.id === taskId)
    task.completed = !task.completed

    this.setState({ todos: this.state.todos })
  },

  render () {
    return (
      <div>
        <h1>Todos</h1>
        {this.state.todos.map(todo =>
          <Todo
            key={todo.id} {...todo}
            markCompleted={() => this.markTaskAsCompleted(todo.id)} />)
        }
      </div>
    )
  }
})
