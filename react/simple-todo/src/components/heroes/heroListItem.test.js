import React from 'react';
import { shallow } from 'enzyme';

import HeroListItem from './heroListItem'

describe('HeroListItem', () => {
  let subject;
  let hero;

  beforeEach(() => {
    hero = {
      id: 0,
      name: 'Iron Man'
    };

    subject = shallow(<HeroListItem hero={hero}/>)
  });

  it('is a list Item', () => {
    expect(subject).toHaveTagName('li');
  });

  it('includes the heroes name', () => {
    expect(subject).toIncludeText('Iron Man');
  });
});