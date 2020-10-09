import React, { useContext, useState } from 'react';
import Input from '../Input';
import { AppContext } from '../../state/AppContext';
import PropTypes from 'prop-types';

const Settings = ({ setShowSettings }) => {
  // Get data from global app state
  const { showAlert } = useContext(AppContext);
  const { maxResults, setMaxResults } = useContext(AppContext);
  // Use local state for form handling
  const [value, setValue] = useState(maxResults);
  // Handle onSubmit event
  const handlerOnSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (value > 40 || value < 1)
      return showAlert(
        'Invalid input! Maximum allowable value is 40, minimum is 1!',
        'warning',
        7000
      );
    setMaxResults(value);
    showAlert('Applied new search parameter value!', 'success', 5000);
    setShowSettings(false);
  };

  return (
    <div className='c-settings'>
      <h3 className='c-settings__title'>Settings</h3>

      <form className='c-settings-form' onSubmit={handlerOnSubmit}>
        <Input
          className='c-settings-form__input'
          name='maxResults'
          type='number'
          value={value}
          placeholder='Max Results'
          onChange={(e) => setValue(e.target.value)}
          label='Max Results'
        />
        <div className='c-settings-form__btn-box'>
          <button className='c-btn c-btn--primary c-settings-form__btn'>
            Apply
          </button>
          <button
            onClick={() => setShowSettings(false)}
            className='c-btn c-btn--secondary c-settings-form__btn'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

Settings.propTypes = {
  setShowSettings: PropTypes.func.isRequired,
};

export default Settings;
