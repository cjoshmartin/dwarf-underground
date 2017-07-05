import React, { Component } from 'react';
import './App.css';

import { Header,Footer, Database, Advertisement, ClickBait } from './component'

import { Home } from './views'
class App extends Component {
  constructor(props){
    super(props);
}
  render() {
    return (
      <div className="App">
        <Header />
          <main className="expanded row">

            {this.props.children || <Home />}

            <Advertisement />

            <ClickBait />
          </main>
      <Footer />
      </div>
    );
  }
}

export default App;
