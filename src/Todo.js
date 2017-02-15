import React from 'react'

const Todo = ({id, text, completed, markCompleted}) => {
  var style = completed ? 'glyphicon-ok-circle' : 'glyphicon-remove-circle'
  return (
    <a className='task-item' href='#'>
      <span className='task-check' onClick={markCompleted}>
        <span className={`glyphicon ` + style} />
      </span>
      <span className='task-inner'> {text} </span>
    </a>
  )
}

Todo.propTypes = {
  id: React.PropTypes.number,
  text: React.PropTypes.string,
  completed: React.PropTypes.bool,
  markCompleted: React.PropTypes.func
}

export default Todo
