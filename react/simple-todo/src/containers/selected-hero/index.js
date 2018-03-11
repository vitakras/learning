import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeroDetail from '../../components/hero/hero-detail/hero-detail';
import HeroEdit from '../../components/hero/hero-edit/hero-edit';
import heroPropType from '../../components/hero/hero';

import { updateHero } from './actions';

const SelectedHero = ({hero, onHeroUpdated}) => {
    return (
        <div className="selectedHero">
          <HeroDetail hero={hero} />
          <HeroEdit hero={hero} onHeroUpdated={onHeroUpdated}/>
        </div>
      );
};

SelectedHero.propTypes = {
  hero: heroPropType,
  onHeroUpdated: PropTypes.func
};

const mapStateToProps = (state) => {
  console.log(state.selectedHero.name);
  return {
    hero: state.selectedHero.get('selectedHero')
}};

const mapDispatchToProps = (dispatch) => ({
    onHeroUpdated: (hero) => {
      console.log(hero)
      dispatch(updateHero(hero))
    }
  });



export default connect(mapStateToProps, mapDispatchToProps)(SelectedHero);