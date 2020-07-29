import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Master from './components/Master/Master'
import Availability from './components/Availability/Availability'

export default (
  <Switch>
    <Route exact path='/' component={Master} />
    <Route path='/availability/:day' component={Availability} />
  </Switch>
)