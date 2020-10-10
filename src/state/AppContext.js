import Axios from 'axios';
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_FAIL,
  FETCH_BOOKS_SUCCESS,
  SET_MAX_RESULTS,
  SET_START_INDEX,
  SET_SEARCH_PARAMS,
  CLEAR_STATE,
  SET_VIEW,
  HIDE_ALERT,
  SHOW_ALERT,
} from './AppReducer';

export const initialState = {
  books: [],
  totalResults: null,
  startIndex: 0,
  loading: false,
  maxResults: 10,
  viewType: 'four',
  alertMessage: null,
  alertCondition: null,
  searchParams: {
    query: '',
    inauthor: '',
    inpublisher: '',
    isbn: '',
  },
};

export const AppContext = createContext(initialState);

// const urlCompilator = (
//   query,
//   inauthor,
//   inpublisher,
//   isbn,
//   startIndex,
//   maxResults
// ) => {
//   let url = 'https://www.googleapis.com/books/v1/volumes?q=';

//   if (query) {
//     url += query;
//   }

//   if (inauthor) {
//     url += `+inauthor:${inauthor}`;
//   }

//   if (inpublisher) {
//     url += `+inpublisher:${inpublisher}`;
//   }

//   if (isbn) {
//     url += `+isbn:${isbn}`;
//   }

//   return url + `&startIndex=${startIndex}&maxResults=${maxResults}`;
// };

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const showAlert = (alertMessage, alertCondition, time = 3000) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        alertMessage,
        alertCondition,
      },
    });
    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT,
      });
    }, time);
  };

  // Get data from server
  const fetchBooks = async (
    { query, inauthor, inpublisher, isbn },
    startIndex,
    maxResults
  ) => {
    // Use backticks and ternary operator in order to create URL based on inputs data
    const url = `https://www.googleapis.com/books/v1/volumes?q=${
      query ? query : ''
    }${isbn ? `+isbn:${isbn}` : ''}${inauthor ? `+inauthor:${inauthor}` : ''}${
      inpublisher ? `+inpublisher:${inpublisher}` : ''
    }
     ${maxResults ? `&maxResults=${maxResults}` : ''}&startIndex=${startIndex}
     `.trim();

    dispatch({ type: FETCH_BOOKS_REQUEST });
    try {
      const { data } = await Axios({ method: 'GET', url });
      if (data.totalItems > 0 && data.items && data.items.length) {
        dispatch({
          type: FETCH_BOOKS_SUCCESS,
          payload: {
            books: data.items,
            totalResults: data.totalItems,
          },
        });
      } else {
        dispatch({
          type: FETCH_BOOKS_SUCCESS,
          payload: {
            books: [],
            totalResults: data.totalItems,
          },
        });
      }
    } catch (error) {
      const errors = error.response.data.error.message;
      dispatch({
        type: FETCH_BOOKS_FAIL,
      });

      showAlert(error && errors ? errors : 'Server errors!', 'warning');
    }
  };

  const setMaxResults = (maxResults) =>
    dispatch({ type: SET_MAX_RESULTS, payload: maxResults });

  const setStartIndex = (startIndex) =>
    dispatch({ type: SET_START_INDEX, payload: startIndex });

  const serSearchParams = (searchParams) =>
    dispatch({ type: SET_SEARCH_PARAMS, payload: searchParams });

  const clearState = () => dispatch({ type: CLEAR_STATE });

  const setView = (viewType) => dispatch({ type: SET_VIEW, payload: viewType });

  return (
    <AppContext.Provider
      value={{
        fetchBooks,
        setView,
        setMaxResults,
        setStartIndex,
        serSearchParams,
        clearState,
        startIndex: state.startIndex,
        maxResults: state.maxResults,
        searchParams: state.searchParams,
        books: state.books,
        viewType: state.viewType,
        loading: state.loading,
        totalResults: state.totalResults,
        showAlert,
        alertMessage: state.alertMessage,
        alertCondition: state.alertCondition,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
