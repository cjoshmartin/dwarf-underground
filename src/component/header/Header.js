import React, { Component } from 'react'
import './Header.css'
import * as firebase from 'firebase';
class Header extends Component {
  constructor(props){
    super(props)
    this.state ={
      userState: '<a href="/login">Log in</a>'
    }
    this.isUser = this.isUser.bind(this)
  }
     componentDidMount(){
      this.isUser
    }

  async isUser(){
      await firebase.auth().onAuthStateChanged(function(user){
        if(user){
        this.setState({userState:"<a href="/" onclick={{firebase.auth().signOut()}}> Sign Out </a>"})
        }
        else{
            this.setState({userState:"<a href=\"/login\">Log in</a>"})
        }
      })
    }
  render() {
    return (
      <div className="expanded row header">
        <div className="clearfix">
          <div className="float-left logo">
          <a href="/"> <img src="http://www.iconninja.com/files/409/4/1006/axe-icon.svg" alt="axe" /></a>
          </div>
          <div className="float-right nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <span dangerouslySetInnerHTML={{__html: this.state.userState }} />
          </div>
        </div>
        <div className="headline text-center small-12 columns">
          <h1>The Dwarf Underground</h1>
          <h3>Delving deep for the <span className="gold">shiniest</span> news</h3>
        </div>
      </div>
    )
  }
}

export default Header
