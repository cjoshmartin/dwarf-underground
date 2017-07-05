import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// import views
/* TODO: Make these views and Add the App View
  * HOME
  * About
  * Login
*/

import App from '../App'
import {Home, About, Login} from '../views'

import { Database } from '../component'


export default class AppRouter extends Component {

  constructor(props){
    super(props)
    Database.init()
  }

  render(){
    return(
      <Router history={browserHistory}>
        <Route exact={true} path='/' component={App}>

          <IndexRoute component={Home}/>
          <Route path='/about' component={About}/>
          <Route path ='/login' component={Login}/>
          {/* <Route path="post/:id" component={ClickBait} /> */}
       </Route>
      </Router>

    )
  }
}
