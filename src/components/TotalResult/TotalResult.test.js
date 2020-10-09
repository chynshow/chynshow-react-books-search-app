import React from 'react';
import TotalResult from './';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<TotalResult />);
});
