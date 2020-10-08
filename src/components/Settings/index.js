import React, { useContext, useState } from 'react';
import Input from '../Input';
import { AppContext } from '../../state/AppContext';
import { AlertContext } from '../../state/AlertContext';

const Settings = () => {
  // Get data from global app state
  const { showAlert } = useContext(AlertContext);
  const { maxResults, setMaxResults } = useContext(AppContext);
  // Use local state for form handling
  const [value, setValue] = useState(maxResults);
  // Handle onSubmit event
  const handlerOnSubmit = (e) => {
    e.preventDefault();
    setMaxResults(value);
    showAlert('Applied new search parameter value!');
  };
  return (
    <form onSubmit={handlerOnSubmit}>
      <Input
        className='c-setting-form__input'
        name='maxResults'
        type='number'
        value={value}
        placeholder='Max Results'
        onChange={(e) => setValue(e.target.value)}
      />
      <button className='c-btn c-settings-form__btn'>Apply</button>
    </form>
  );
};

export default Settings;
