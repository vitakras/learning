import {
    SELECT_HERO, UPDATE_HERO
} from './constans'

export function selectHero(hero) {
    return {
        type: SELECT_HERO,
        hero: hero
    };
};

export function updateHero(hero) {
    return {
        type: UPDATE_HERO,
        hero: hero
    };
};
