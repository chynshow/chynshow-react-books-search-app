import React from 'react';
import Alert from './';
import { mount, shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Alert />);
});
