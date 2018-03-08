import React, { Component } from 'react';

import HeroDetail from '../components/hero/hero-detail/hero-detail';
import HeroEdit from '../components/hero/hero-edit/hero-edit';

class SelectedHero extends Component {

  render() {
    const hero = {
      "id": "1",
      "name": "Vitaliy"
    };

    return (
      <div className="selectedHero">
        <HeroDetail hero={hero}/>
        <HeroEdit hero={hero}/>
      </div>
    );
  }
}

export default SelectedHero;