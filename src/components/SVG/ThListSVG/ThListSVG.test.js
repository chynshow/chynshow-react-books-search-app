import React from 'react';
import ThListSVG from './';
import { shallow } from 'enzyme';

it('should render ThListSVG component', () => {
  const c = shallow(<ThListSVG />);
  expect(c).toMatchSnapshot();
});
