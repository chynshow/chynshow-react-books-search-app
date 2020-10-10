import React from 'react';
import Settings from './';
import { shallow } from 'enzyme';

it('should renders Settings component', () => {
  const c = shallow(<Settings />);
  expect(c).toMatchSnapshot();
});
