import React from 'react';
import ChevronUpSVG from './';
import { shallow } from 'enzyme';

it('should render ChevronUpSVG component', () => {
  const c = shallow(<ChevronUpSVG />);
  expect(c).toMatchSnapshot();
});
