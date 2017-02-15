import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.any
  },
  render () {
    return (
      <div>
        <div>
          <nav>
            <Link to='/calendar'>Calendar</Link>
            <Link to='/tasks'>Tasks</Link>
          </nav>
        </div>
        {this.props.children}
      </div>
    )
  }
})
