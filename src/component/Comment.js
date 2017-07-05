import React, { Component } from 'react'

export default class Comment extends Component {
  render(){
    return(
      <li>
        <h3>{this.props.name}</h3>
        <p> {this.props.comment}</p>
      </li>
    )
  }
}
