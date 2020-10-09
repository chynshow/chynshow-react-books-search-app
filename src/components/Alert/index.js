import React, { useContext } from 'react';
import { AppContext } from '../../state/AppContext';
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
  const { alertMessage, alertCondition } = useContext(AppContext);

  return (
    <>
      {alertMessage && (
        <div className={`c-alert c-alert--${alertCondition}`}>
          {renderSVG(alertCondition)}
          {alertMessage}
        </div>
      )}
    </>
  );
};

export default Alert;
