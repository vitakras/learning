import React from 'react';
import { shallow } from 'enzyme';
import SelectedHero from '../index';

describe('SelectedHero Component', () => {
    let subject;

    const initialState = {
        selectedHero: {
            selectedHero: {
                id: 0,
                name: 'Vitaliy'
            }
        }
    }

    it('should render the component', () => {
        subject = shallow(
            <SelectedHero store={initialState}/>
        );

        expect(subject.exists()).toEqual(true);
    });
});