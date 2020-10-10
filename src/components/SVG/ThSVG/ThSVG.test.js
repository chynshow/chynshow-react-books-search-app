import React from 'react';
import ThSVG from './';
import { shallow } from 'enzyme';

it('should render ThSVG component', () => {
  const c = shallow(<ThSVG />);
  expect(c).toMatchSnapshot();
});
