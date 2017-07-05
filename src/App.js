import React, { Component } from 'react';
import './App.css';

import { Header,Footer, Database } from './component'

import { Home } from './views'
class App extends Component {
  constructor(props){
    super(props);
    Database.init()
}
  render() {
    return (
      <div className="App">
        <Header />
          {this.props.children || <Home />}
      <Footer />
      </div>
    );
  }
}

export default App;
