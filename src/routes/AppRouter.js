import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// import views
/* TODO: Make these views and Add the App View
  * HOME
  * About
  * Login
*/
import { Database } from '../component'


export default class AppRouter extends Component {

  constructor(props){
    super(props)
    Database.init()
  }

  render(){
    return(
      <Router history={browserHistory}>
        <Route exact={true} path='/' compoent={App}

          <IndexRoute component={Home}/>
          <Route path='/about' component={About}/>
          <Route path ='/login' component={Login}/>

       </Route>
      </Router>

    )
  }
}
