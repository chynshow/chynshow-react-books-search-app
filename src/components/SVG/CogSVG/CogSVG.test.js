import React from 'react';
import CogSVG from './';
import { shallow } from 'enzyme';

it('should render CogSVG component', () => {
  const c = shallow(<CogSVG />);
  expect(c).toMatchSnapshot();
});
