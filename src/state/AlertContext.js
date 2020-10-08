import React, { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';
import { SHOW_ALERT, HIDE_ALERT } from './AlertReducer';

const initialState = {
  message: null,
  style: null,
};

export const AlertContext = createContext(initialState);

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const showAlert = (message, style, time = 3000) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        message,
        style,
      },
    });
    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT,
      });
    }, time);
  };

  return (
    <AlertContext.Provider
      value={{ showAlert, message: state.message, style: state.style }}
    >
      {children}
    </AlertContext.Provider>
  );
};
