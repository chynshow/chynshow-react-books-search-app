import React from 'react';
import Overlay from './';
import { mount, shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Overlay />);
});
