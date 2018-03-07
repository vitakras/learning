import React from 'react';
import PropTypes from 'prop-types';

const HeroListItem = ({hero}) => (
  <li>
    <span className="badge">{hero.id}</span> {hero.name}
  </li>
);

HeroListItem.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default HeroListItem;