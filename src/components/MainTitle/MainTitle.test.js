import React from 'react';
import MainTitle from './';
import { shallow } from 'enzyme';

describe('MainTitle component', () => {
  it('should render MainTitle component', () => {
    const c = shallow(<MainTitle />);
    expect(c).toMatchSnapshot();
  });
});
