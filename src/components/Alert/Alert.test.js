import React from 'react';
import Alert from './index.js';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Alert />);
});
