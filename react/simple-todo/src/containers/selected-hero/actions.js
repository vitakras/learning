import {
    SELECT_HERO
} from './constans'

export function selectHero(hero) {
    return {
        type: SELECT_HERO,
        hero: hero
    };
};