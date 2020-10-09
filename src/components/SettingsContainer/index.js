import React, { useState } from 'react';
import Settings from '../Settings';
import CogSVG from '../SVG/CogSVG';

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

export default SettingsContainer;
