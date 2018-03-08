import React from 'react';
import heroPropType from '../hero';

const HeroDetail = ({hero}) => (
    <div>
        <h2>{hero.name} Details</h2>
        <div><span>id: </span>{hero.id}</div>
    </div>
);

HeroDetail.propTypes = {
    hero: heroPropType
};

export default HeroDetail;