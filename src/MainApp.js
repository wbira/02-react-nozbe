import React from 'react'
import NavLink from './Utils/NavLink'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.any
  },
  render () {
    return (
      <div className='mainApp'>
        <div className='navbar'>
          <nav>
            <NavLink onlyActiveOnIndex to='/'>Main</NavLink>
            <NavLink to='/calendar'>Calendar</NavLink>
            <NavLink to='/tasks'>Tasks</NavLink>
          </nav>
        </div>
        <div className='taskList'>
          {this.props.children}
        </div>
      </div>
    )
  }
})
