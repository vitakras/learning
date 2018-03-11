import { combineReducers, createStore } from 'redux';
import { Map } from 'immutable';


import selectedHero from './containers/selected-hero/reducer';

const reducers = combineReducers({
    selectedHero,
});

const state = {
    selectedHero: Map({
        selectedHero: {
            id: 0,
            name: 'Vitaliy Krasylovets'
        }
    })
};

export default createStore(reducers, state);