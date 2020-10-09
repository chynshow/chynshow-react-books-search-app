import React, { useContext, useState } from 'react';
import Input from '../Input';
import { AppContext } from '../../state/AppContext';
import { AlertContext } from '../../state/AlertContext';

const Settings = ({ setShowSettings }) => {
  // Get data from global app state
  const { showAlert } = useContext(AlertContext);
  const { maxResults, setMaxResults } = useContext(AppContext);
  // Use local state for form handling
  const [value, setValue] = useState(maxResults);
  // Handle onSubmit event
  const handlerOnSubmit = (e) => {
    e.preventDefault();
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

export default Settings;
