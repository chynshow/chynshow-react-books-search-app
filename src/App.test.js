import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Alert from './components/Alert';
import BooksContainer from './components/BooksContainer';
import SearchBar from './components/SearchBar';
import TotalResult from './components/TotalResult';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders Alert component', () => {
  const wrapper = shallow(<App />);
  const c = <Alert />;
  expect(wrapper.contains(c)).toEqual(true);
});

it('renders BooksContainer component', () => {
  const wrapper = shallow(<App />);
  const c = <BooksContainer />;
  expect(wrapper.contains(c)).toEqual(true);
});

it('renders SearchBar component', () => {
  const wrapper = shallow(<App />);
  const c = <SearchBar />;
  expect(wrapper.contains(c)).toEqual(true);
});

it('renders TotalResult component', () => {
  const wrapper = shallow(<App />);
  const c = <TotalResult />;
  expect(wrapper.contains(c)).toEqual(true);
});
