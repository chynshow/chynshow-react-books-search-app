import React from 'react';
import Input from './';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Input />);
});
