import React, { Component } from 'react';
import PropTypes from 'prop-types';
import heroPropType from '../hero';

class HeroEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.hero ? props.hero.name : ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });

        if (this.props.onHeroUpdated != undefined) {
            this.props.onHeroUpdated({...this.props.hero, name: this.state.name})
        }
    }

    render() {
      return (
      <div>
        <label>name:
          <input id='heroName' placeholder="name" 
            value={ this.state.name }
            onChange={this.handleChange}
            type='text'/>
        </label>
      </div>
      )
    }
};

HeroEdit.propTypes = {
    hero: heroPropType,
    onHeroUpdated: PropTypes.func
};

export default HeroEdit;
