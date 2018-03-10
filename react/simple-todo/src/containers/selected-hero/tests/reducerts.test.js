import {
    fromJS
} from 'immutable';

import {
    SELECT_HERO
} from '../constans';
import selectedHeroReducer from '../reducer';

describe('Selected Hero Reducer', () => {
    const initialState = fromJS({
        selectedHero: null
    });

    it('Should return intial state when no action passed', () => {
        const expectedState = initialState;
        expect(selectedHeroReducer(undefined, {})).toEqual(expectedState);
    });

    describe('When a hero is selected', () => {
        it('Should return the selected hero', () => {
            const action = {
                type: SELECT_HERO,
                hero: {
                    id: 0,
                    name: 'Vitaliy'
                }
            };

            const expectedState = initialState.set('selectedHero', {
                id: 0,
                name: 'Vitaliy'
            });

            expect(selectedHeroReducer(undefined, action)).toEqual(expectedState);
        });
    });
});