import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div>
        <nav>
          <Link to='/calendar'>Calendar</Link>
          <Link to='/tasks'>Tasks</Link>
        </nav>
      </div>
    )
  }
})
