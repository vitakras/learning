import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({hero}) => (
    <div>
        <h2>{hero.name} Details</h2>
        <div><span>id: </span>{hero.id}</div>
        <div><span>name: </span>{hero.name}</div>
    </div>
);

Hero.propTypes = {
    hero: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })
};

export default Hero;