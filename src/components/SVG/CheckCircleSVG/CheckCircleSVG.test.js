import React from 'react';
import CheckCircleSVG from './';
import { shallow } from 'enzyme';

it('should render CheckCircleSVG component', () => {
  const c = shallow(<CheckCircleSVG />);
  expect(c).toMatchSnapshot();
});
