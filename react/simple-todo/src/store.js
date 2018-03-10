import { combineReducers, createStore } from 'redux';

import selectedHero from './containers/selected-hero/reducer';

const reducers = combineReducers({
    selectedHero,
});

export default createStore(reducers);