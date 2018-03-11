import {
    fromJS
} from 'immutable';

import {
    SELECT_HERO, UPDATE_HERO
} from './constans';

let initialState = fromJS({
    selectedHero: null
});

export default function selectedHeroReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_HERO:
        case UPDATE_HERO:
            return state.set('selectedHero', action.hero);
        default:
            return state;
    }
};