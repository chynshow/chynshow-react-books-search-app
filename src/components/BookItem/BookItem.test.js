import React from 'react';
import BookItem from './';
import { shallow } from 'enzyme';

const setup = (props) => shallow(<BookItem {...props} />);

describe('render BookItem component', () => {
  it('should renders BookItem component with props', () => {
    const c = setup({
      title: 'Title',
      imageLinks: {
        mallThumbnail: '#',
        thumbnail: '#',
      },
      description: 'Description',
      viewType: 'four',
      infoLink: '#',
    });
    expect(c).toMatchSnapshot();
  });

  it('should renders BookItem component without props', () => {
    const c = setup();
    expect(c).toMatchSnapshot();
  });
});
