import React from 'react';
import TotalResult from './';
import { shallow } from 'enzyme';

it('should renders TotalResult component', () => {
  const c = shallow(<TotalResult />);
  expect(c).toMatchSnapshot();
});
