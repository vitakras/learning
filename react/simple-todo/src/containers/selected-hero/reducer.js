import {
    fromJS
} from 'immutable';

import {
    SELECT_HERO
} from './constans';

const initialState = fromJS({
    selectedHero: null
});

// const initialState = {
//     selectedHero: {
//         id: 0,
//         name: 'Vitaliy'
//     }
// };

export default function selectedHeroReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_HERO:
            return state.set('selectedHero', action.hero);
        default:
            return state;
    }
};