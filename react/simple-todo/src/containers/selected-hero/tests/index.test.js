import React from 'react';
import { shallow } from 'enzyme';

import { SelectedHero } from '../index';
import HeroDetail from '../../../components/hero/hero-detail/hero-detail';
import HeroEdit from '../../../components/hero/hero-edit/hero-edit';

describe('SelectedHero Component', () => {
    let subject;
    const hero = {
        id: 0,
        name: 'Hero'
    };

    it('Should Map the hero to the HeroDetail Component', () => {
        const mockOnHeroUpdate = jest.fn();
        subject = shallow(
            <SelectedHero hero={hero} onHeroUpdated={mockOnHeroUpdate}/>
        );

        expect(subject).toContainReact(<HeroDetail hero={hero}/>);
    });

    it('Should Map the hero to the HeroEdit Component', () => {
        const mockOnHeroUpdate = jest.fn();
        subject = shallow(
            <SelectedHero hero={hero} onHeroUpdated={mockOnHeroUpdate}/>
        );

        expect(subject).toContainReact(<HeroEdit hero={hero} onHeroUpdated={mockOnHeroUpdate}/>);
    });
});