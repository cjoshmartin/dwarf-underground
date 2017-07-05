import React, { Component } from 'react';

import * as firebase from 'firebase'

export default class ClickBait extends Component {
  constructor(props){
    super(props)
    this.state ={
      post: []
    }
  }
  async componentDidMount(){

    const dbRef= await firebase.database().ref('/dwarf/post');
     await dbRef.on('value', (snapshot)=>{
       this.setState({post: snapshot.val()})
     })
  }
  render(){
    const postLinks = this.state.post.map((list, i) => {
      return(
          <div className="small-6 medium-3 columns other-article" key={i}>
            <a href="#">
              <img src={list.image} alt="orc" />
              <p>{list.title}</p>
            </a>
          </div>
      )
    })
    return (
          <div className="small-12 columns other-articles">
            {postLinks}
          </div>
    )
  }
}
