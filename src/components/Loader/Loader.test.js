import React from 'react';
import Loader from './';
import { shallow } from 'enzyme';

describe('Loader component', () => {
  it('should render Loader component', () => {
    const c = shallow(<Loader />);
    expect(c).toMatchSnapshot();
  });
});
