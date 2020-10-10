import React from 'react';
import SearchBar from './';
import { shallow } from 'enzyme';

it('should renders SearchBar component', () => {
  const c = shallow(<SearchBar />);
  expect(c).toMatchSnapshot();
});
