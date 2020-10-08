import React from 'react';
import Alert from './components/Alert';
import BooksContainer from './components/BooksContainer';
import SearchBar from './components/SearchBar';
import Settings from './components/Settings';

const App = () => {
  return (
    <div>
      <Alert />
      <Settings />
      <SearchBar />
      <BooksContainer />
    </div>
  );
};

export default App;
