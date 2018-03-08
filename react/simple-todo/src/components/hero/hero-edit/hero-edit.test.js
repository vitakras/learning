import React from 'react';
import { shallow } from 'enzyme';

import HeroEdit from './hero-edit';

describe('HeroEdit Component', () => {
    let subject;
    let hero; 

    beforeEach(() => {
        hero = {
            id: 0,
            name: "Vitaliy"
        };
    });

    it('OnChange it called the heroUpdated Function', () =>{
        let heroUpdated = (updatedHero) => {
            hero = updatedHero;
        }
    
        subject = shallow(<HeroEdit hero={hero} onHeroUpdated={heroUpdated} />);
        subject.find('input').simulate('change', {target: {
            value: 'Iron Man'
        }});

        expect(hero.name).toBe('Iron Man');
    });
});
