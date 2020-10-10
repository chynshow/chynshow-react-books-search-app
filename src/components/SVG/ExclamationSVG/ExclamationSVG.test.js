import React from 'react';
import ExclamationSVG from './';
import { shallow } from 'enzyme';

it('should render ExclamationSVG component', () => {
  const c = shallow(<ExclamationSVG />);
  expect(c).toMatchSnapshot();
});
