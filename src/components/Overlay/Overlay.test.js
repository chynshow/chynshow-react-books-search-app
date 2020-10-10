import React from 'react';
import Overlay from './';
import { shallow } from 'enzyme';

const setup = (props) => shallow(<Overlay {...props} />);

it('should renders Overlay component with props', () => {
  const c = setup({
    opacity: '1',
    background: '#fff',
    zIndex: '0',
  });
  expect(c).toMatchSnapshot();
});

it('should renders Overlay component without props', () => {
  const c = setup();
  expect(c).toMatchSnapshot();
});
