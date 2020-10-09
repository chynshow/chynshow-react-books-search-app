import React from 'react';
import ViewTypeToggler from './';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<ViewTypeToggler />);
});
