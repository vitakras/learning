import React from 'react'
import PropTypes from 'prop-types';

import HeroListItem from './heroListItem'

const HeroesList = ({heroes}) => {
  const heroItems = heroes.map(hero => <HeroListItem key={hero.id} hero={hero}/>);
  return (
    <ul className="heroes">
      { heroItems.length > 0 ? heroItems : 'No Heroes'}
    </ul>
  );
};

HeroesList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }))
};

export default HeroesList;