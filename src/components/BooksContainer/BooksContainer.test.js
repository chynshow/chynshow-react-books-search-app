import React from 'react';
import BooksContainer from './';
import { mount } from 'enzyme';

it('should renders BooksContainer component', () => {
  const c = mount(<BooksContainer />);
  expect(c).toMatchSnapshot();
});
