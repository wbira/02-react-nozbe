import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Calendar from './Calendar'
import Tasks from './Tasks'
import MainApp from './MainApp'

render(
  <Router history={browserHistory}>
    <Route path='/' component={MainApp}>
      <IndexRoute component={Tasks} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/tasks' component={Tasks} />
    </Route>
  </Router>,
  document.getElementById('app')
)
