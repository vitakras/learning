import {
    selectHero
} from '../actions';
import {
    SELECT_HERO
} from '../constans';

describe('Actions', () => {
    const hero = {
        id: 0,
        name: 'Vitaliy'
    };

    it('Should create an action to select a hero', () => {
        const expectedAction = {
            type: SELECT_HERO,
            hero: hero
        };

        expect(selectHero(hero)).toEqual(expectedAction);
    });
});