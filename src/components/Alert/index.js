import React, { useContext } from 'react';
import { AlertContext } from '../../state/AlertContext';

const Alert = () => {
  // Get data from global app state
  const { message, style } = useContext(AlertContext);

  return (
    <>
      {message && <div className={`c-alert c-aler--${style}`}>{message}</div>}
    </>
  );
};

export default Alert;
