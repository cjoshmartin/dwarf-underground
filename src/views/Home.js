import React, { Component } from 'react'
import { Header, Post,Advertisement, ClickBait } from '../component'

export default class Home extends Component {

  render(){
    return(
      <main className="expanded row">
      <Post />

      <Advertisement />

      <ClickBait />

      </main>

    )
  }
}
