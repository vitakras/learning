import React, { Component } from 'react';
import './App.css';
import SelectedHero from './containers/selected-hero';

class App extends Component {
  render() {
    const title = 'Tour of Heroes';

    return (
      <div>
        <h1>{title}</h1>
        <SelectedHero />
        </div>
    );
  }
}

export default App;
