import React from 'react';
import { shallow } from 'enzyme';

import HeroesList from './heroesList'
import HeroListItem from "./heroListItem"

describe('HeroesList', () => {
  let subject;
  let heroes = [
    {
      id: 0,
      name: 'Iron Man'
    },
    {
      id: 1,
      name: 'Batman'
    }
  ];

  beforeEach(() => {
    subject = shallow(<HeroesList heroes={heroes}/>)
  })

  it('Displays "No Heroes" when the list is empty', () => {
    subject = shallow(<HeroesList heroes={[]} />);
    expect(subject.find('.heroes')).toHaveText('No Heroes');
  });

  it('Renders HeroListItems when there are heroes', () => {
    expect(subject).toContainReact(<HeroListItem hero={heroes[0]}/>)
    expect(subject).toContainReact(<HeroListItem hero={heroes[1]}/>)
  });
});