import React from 'react';
import Loader from './';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Loader />);
});
