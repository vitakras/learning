import React from 'react';
import PropTypes from 'prop-types';
import heroPropType from '../hero';

const HeroDetail = ({hero}) => (
    <div>
        <h2>{hero.name} Details</h2>
        <div><span>id: </span>{hero.id}</div>
        <div><span>name: </span>{hero.name}</div>
    </div>
);

HeroDetail.propTypes = {
    hero: heroPropType
};

export default HeroDetail;