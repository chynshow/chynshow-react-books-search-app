import React from 'react';
import Overlay from '../Overlay';
import SettingsContainer from '../SettingsContainer';
import MainTitle from '../MainTitle';
import SearchForm from '../SearchForm';

const SearchBar = () => (
  <div className='l-search-bar'>
    <MainTitle />
    <div className='l-search-bar-container'>
      <SettingsContainer />
      <SearchForm />
    </div>
    <Overlay opacity='.3' background='#202124' />
  </div>
);

export default SearchBar;
