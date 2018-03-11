import {
    selectHero,
    updateHero
} from '../actions';

import {
    SELECT_HERO,
    UPDATE_HERO,
} from '../constans';

describe('Actions', () => {
    const hero = {
        id: 0,
        name: 'Vitaliy'
    };

    describe('Select', () => {
        it('Should create an action to select a hero', () => {
            const expectedAction = {
                type: SELECT_HERO,
                hero: hero
            };
    
            expect(selectHero(hero)).toEqual(expectedAction);
        });
    });

    describe('Update', () => {
        it('Should Update the hero', () => {
            const expectedAction = {
                type: UPDATE_HERO,
                hero: hero
            };
            
            expect(updateHero(hero)).toEqual(expectedAction);
        });
    });

});