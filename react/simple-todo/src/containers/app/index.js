import React from 'react';
import './app.css';
import SelectedHero from '../selected-hero';

const App = () => {
    const title = 'Tour of Heroes';
    return (
      <div>
        <h1>{title}</h1>
        <SelectedHero />
      </div>
    );
};

export default App;
