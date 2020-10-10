import React from 'react';
import ViewTypeToggler from './';
import { shallow } from 'enzyme';

it('should renders ViewTypeToggler component', () => {
  const c = shallow(<ViewTypeToggler />);
  expect(c).toMatchSnapshot();
});
