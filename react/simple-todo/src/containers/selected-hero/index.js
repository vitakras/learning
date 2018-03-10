import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeroDetail from '../../components/hero/hero-detail/hero-detail';
import HeroEdit from '../../components/hero/hero-edit/hero-edit';

const SelectedHero = (selectedHero) => {
    return (
        <div className="selectedHero">
          <HeroDetail hero={selectedHero.selectedHero}/>
          <HeroEdit hero={selectedHero.selectedHero}/>
        </div>
      );
};

const mapStateToProps = (state) => ({
    selectedHero: state.selectedHero.selectedHero
});

const mapDispatchToProps = (dispatch) => ({
  });

export default connect(mapStateToProps, mapDispatchToProps)(SelectedHero);