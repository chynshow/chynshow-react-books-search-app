import React from 'react';
import Alert from './components/Alert';
import BooksContainer from './components/BooksContainer';
import SearchBar from './components/SearchBar';
import TotalResult from './components/TotalResult';

const App = () => {
  return (
    <div className='l-app-container'>
      <Alert />
      <SearchBar />
      <TotalResult />
      <BooksContainer />
    </div>
  );
};

export default App;
