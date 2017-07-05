import React, { Component } from 'react'
import * as firebase from 'firebase';

export default class Login extends Component {
 constructor(props){
   super(props)

   this.state ={
     email: '',
     password:''
   } // end of state
   this.emailChange = this.emailChange.bind(this)
   this.passwordChange = this.passwordChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
 } // end of constructor

  emailChange(ev){
    this.setState({email: ev.target.value})
  }
  passwordChange(ev){
    this.setState({password: ev.target.value})
  }
  async handleSubmit(ev){
    ev.preventDefault()
    // .catch(function(e) {}).then(()=>{})
    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    } catch (e) {
      alert(e.code +"\n" +e.message)
    } finally {
      // I was going to do something here but I have totally forgot... put at pin in it 📍
    }

  }

  render(){
    return(
      <div className="large-8 medium-12 columns article">
        <h1>
          Login
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input type="email" placeholder="Please Enter your Email" value={this.state.email} onChange={this.emailChange} />
          <input type="password" placeholder="Please enter your password" value={this.state.password} onChange={this.passwordChange} />
          <button type="submit" className="button"> Login</button>
        </form>
      </div>
    )
  }
}
