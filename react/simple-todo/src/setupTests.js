import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import React from 'react';
import 'jest-enzyme';

configure({ adapter: new Adapter() });