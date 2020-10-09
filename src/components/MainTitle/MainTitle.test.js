import React from 'react';
import MainTitle from './';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<MainTitle />);
});
