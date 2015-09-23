import React from 'react'
import { Router, Route, Link } from 'react-router'

const routes = {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: require('./App')
  }]
}

React.render((
  <Router routes={routes} />
), document.getElementById('root'))
