import React, { Component } from 'react';
import PropTypes from 'prop-types';
import heroPropType from '../hero';

const HeroEdit = ({hero, onHeroUpdated}) => {
    const handleChange = (event) => {
        if (onHeroUpdated !== undefined) {
            onHeroUpdated({...hero, name: event.target.value});
        }
    };

    return (
      <div>
        <label>name:
          <input id='heroName' placeholder="name" 
            value={ hero.name }
            onChange={handleChange}
            type='text'/>
        </label>
      </div>
    );
};

HeroEdit.propTypes = {
    hero: heroPropType,
    onHeroUpdated: PropTypes.func
};

export default HeroEdit;
