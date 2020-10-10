import React from 'react';
import SettingsContainer from './';
import { shallow } from 'enzyme';

describe('render SettingsContainer component', () => {
  it('should renders SettingsContainer component', () => {
    const c = shallow(<SettingsContainer />);
    expect(c).toMatchSnapshot();
  });
});
