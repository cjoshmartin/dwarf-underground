import React, { Component } from 'react';

import * as firebase from 'firebase';

// import Comment from '../component'

export default class Post extends Component {
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
  //  comments(ev){
  //   //  await firebase.auth().onAuthStateChanged(function(user){
  //   //    if(user){
  //   //      return(
  //   //        <div>
  //   //        <h3>Comments</h3>
  //   //        <form>
  //   //        <textarea placeholder="enter your comment here" value={this.state.comment} onChange={this.commentChange} />
  //   //       <button type="submit" className="button">Comment</button>
  //   //      </form>
  //    //
  //   //    </div>
  //   //      )
  //   //    }
  //   //    else{
  //   //      firebase.auth().signInAnonymously()
  //    //
  //   //    }
  //   //  })
  //   <div>
  //   <h3>Comments</h3>
  //          <form>
  //          <textarea placeholder="enter your comment here" value={this.state.comment} onChange={this.commentChange} />
  //         <button type="submit" className="button">Comment</button>
  //        </form>
  //      </div>
  // }
  render(){
    return(
      <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
        <div className="avatar">
          <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
          <div className="author-info">
            <p className="author-name">By Domri, son of Flug</p>
            <p className="date">on 28 April, 3018 of the Third Age</p>
          </div>
        </div>
        <section className="article-body">
          <p><span className="article-start gold">E</span>psum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.</p>

          <p>Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.</p>

          <p>Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Gratuitous octopus niacin, sodium glutimate.</p>

          <p className="interject">Avast! A stray goblin!</p>

          <p>Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito.</p>

          <p>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.</p>

          <p>Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.</p>
        </section>
        <div className="article-links">
          {/* <a className="article-link" href="#">
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
          </a> */}
          <a className="article-link" href="#">
            <i className="fa fa-share"></i>
            <span className="article-link-text">Share Post</span>
          </a>
        </div>
      <br />
        <h3>Comments</h3>
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter your name" value={this.state.name} onChange={this.nameChange} />
                 <textarea placeholder="enter your comment here" value={this.state.comment} onChange={this.commentChange} />
                <button type="submit" className="button">Comment</button>
               </form>
               <ul className="no-bullet">
          {this.state.comments.map((comment) => <Comment name={comment.name} comment={comment.comment}/>)}
        </ul>
      </div>
    );
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
