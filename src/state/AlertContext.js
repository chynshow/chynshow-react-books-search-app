import React, { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';
import { SHOW_ALERT, HIDE_ALERT } from './AlertReducer';

const initialState = {
  message: null,
  condition: null,
};

export const AlertContext = createContext(initialState);

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const showAlert = (message, condition, time = 3000) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        message,
        condition,
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
      value={{ showAlert, message: state.message, condition: state.condition }}
    >
      {children}
    </AlertContext.Provider>
  );
};
