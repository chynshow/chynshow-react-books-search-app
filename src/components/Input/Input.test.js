import React from 'react';
import Input from './';
import { shallow } from 'enzyme';

const setup = (props) => shallow(<Input {...props} />);

describe('render Input component', () => {
  it('should renders Input component with props', () => {
    const c = setup({
      name: 'Name',
      placeholder: 'Placeholder',
      type: 'Type',
      onChange: () => {},
      label: 'Label',
    });
    expect(c).toMatchSnapshot();
  });
  it('should renders Input component without props', () => {
    const c = setup();
    expect(c).toMatchSnapshot();
  });
});
