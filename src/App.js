import React, { Component } from 'react';
import './App.css';
import { Header, Post,Advertisement, ClickBait, Footer } from './component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">
          <Post />

          <Advertisement />

        <ClickBait />
        </main>
      <Footer />
      </div>
    );
  }
}

export default App;
