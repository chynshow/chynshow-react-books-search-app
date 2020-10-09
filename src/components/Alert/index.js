import React, { useContext } from 'react';
import { AlertContext } from '../../state/AlertContext';
import CheckCircleSVG from './../SVG/CheckCircleSVG';
import ExclamationSVG from './../SVG/ExclamationSVG';

const renderSVG = (condition) => {
  switch (condition) {
    case 'success':
      return <CheckCircleSVG />;

    case 'warning':
      return <ExclamationSVG />;
    default:
      return;
  }
};

const Alert = () => {
  // Get data from global app state
  const { message, condition } = useContext(AlertContext);

  return (
    <>
      {message && (
        <div className={`c-alert c-alert--${condition}`}>
          {renderSVG(condition)}
          {message}
        </div>
      )}
    </>
  );
};

export default Alert;
