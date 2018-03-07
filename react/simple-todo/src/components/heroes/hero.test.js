import React from 'react';
import { shallow } from 'enzyme'; 

import Hero from './hero';

describe('Hero Component', () => {
    let subject;
    let hero;

    beforeEach(() => {
        hero = {
            id: 0,
            name: "Vitaliy"
        };
        
        subject =  shallow(<Hero hero={hero}/>);
    });

    it('includes the heroes name', () => {
        expect(subject).toIncludeText(hero.name);
    });

    it('includes the heroes id', () => {
        expect(subject).toIncludeText('id: 0');
    });

});