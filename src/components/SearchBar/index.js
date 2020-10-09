import React, { useState, useContext } from 'react';
import Input from './../Input';
import { AppContext } from '../../state/AppContext';
import { AlertContext } from '../../state/AlertContext';
import Settings from './../Settings';
import CogSVG from '../SVG/CogSVG';
import Overlay from './../Overlay';

const SearchBar = () => {
  return (
    <div className='l-search-bar'>
      <MainTitle />
      <div className='l-search-bar-container'>
        <SettingsContainer />
        <SearchForm />
      </div>
      <Overlay opacity='.3' background='#202124' />
    </div>
  );
};

export default SearchBar;

const SearchForm = () => {
  // Get data from global app state
  const {
    fetchBooks,
    startIndex,
    searchParams,
    maxResults,
    serSearchParams,
    clearState,
  } = useContext(AppContext);
  const { showAlert } = useContext(AlertContext);

  // Use local state for form handling
  const [values, setValues] = useState(searchParams);

  // Handle onSubmit event
  const handlerOnSubmit = (e) => {
    e.preventDefault();
    clearState();

    // Validation based on non empty fields
    if (!(Object.values(values).filter((v) => v !== '').length > 0))
      return showAlert(
        'Please add at least one search parameter!',
        'warning',
        5000
      );

    fetchBooks(values, startIndex, maxResults);
    serSearchParams(values);

    //  Clear inputs
    //  setValues({
    //  query: '',
    //  inauthor: '',
    //  inpublisher: '',
    //  isbn: '',
    //  });
  };

  return (
    <form className='c-search-form' onSubmit={handlerOnSubmit}>
      <Input
        className='c-search-form__input'
        name='query'
        value={values.query}
        placeholder='Your search query'
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />
      <Input
        className='c-search-form__input'
        name='inauthor'
        value={values.inauthor}
        placeholder='Author'
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />
      <Input
        className='c-search-form__input'
        name='inpublisher'
        value={values.inpublisher}
        placeholder='Publisher'
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />
      <Input
        className='c-search-form__input'
        name='isbn'
        type='number'
        value={values.isbn}
        placeholder='ISBN'
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
      />

      <button className='c-btn c-search-form__btn'>Search</button>
    </form>
  );
};

const SettingsContainer = () => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      {showSettings && <Settings setShowSettings={setShowSettings} />}
      <button
        className='c-btn c-settings__btn'
        onClick={() => setShowSettings(!showSettings)}
      >
        <CogSVG />
      </button>
    </>
  );
};

const MainTitle = () => (
  <h3 className='c-main-title'>Which book you want to read next?</h3>
);
