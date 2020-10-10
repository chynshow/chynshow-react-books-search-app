import React from 'react';
import SearchFrom from './';
import { shallow } from 'enzyme';

it('should renders SearchFrom component', () => {
  const c = shallow(<SearchFrom />);
  expect(c).toMatchSnapshot();
});
