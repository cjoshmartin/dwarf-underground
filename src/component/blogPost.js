import React, { Component } from 'react'

export default class blogPost extends Component {

  constructor(props){
    super(props)
    this.state= {
      comment: "",
      name: "",
      comments: []

    } // end of state
    // binding the functions to the current `this`
    // this.comments = this.comments.bind(this)
    this.commentChange = this.commentChange.bind(this)
    this.nameChange = this.nameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  } // end of constructor

  commentChange(ev){
    this.setState({comment:ev.target.value})
  }

  nameChange(ev){
    this.setState({name: ev.target.value})
  }

  handleSubmit(ev){
    ev.preventDefault()
    const newState ={...this.state}
    newState.comments.push({
      name: this.state.name,
      comment: this.state.comment
    })
    newState.comment = ''
    newState.name = ''

    this.setState(newState)

  }
  render() {
    return (
      <div>
        <h1>
          {this.props.title}
        </h1>
        <small>{this.props.date}</small>
        <p>
          {this.props.content}
        </p>
       <ul className="no-bullet">
          {this.state.comments.map((comment) => <Comment name={comment.name} comment={comment.comment}/>)}
        </ul>
      </div>
    )
  }
}

class Comment extends Component {
  render(){
    return(
      <li>
        <h3>{this.props.name}</h3>
        <p> {this.props.comment}</p>
      </li>
    )
  }
}
