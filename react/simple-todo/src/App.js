import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/heroes/hero'

class App extends Component {
  render() {
      const hero = {
        "id": "1",
        "name": "Vitaliy"
      }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hero hero={hero}/>
      </div>
    );
  }
}

export default App;
