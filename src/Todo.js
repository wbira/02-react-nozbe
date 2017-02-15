import React from 'react'

const Todo = ({text}) => (
  <a href='#'>{text}</a>
)
Todo.propTypes = {
  text: React.PropTypes.string
}

export default Todo
