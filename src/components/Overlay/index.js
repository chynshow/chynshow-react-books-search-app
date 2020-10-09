import React from 'react';

const Overlay = ({ opacity, background, zIndex = 0 }) => (
  <div style={{ opacity, background, zIndex }} className='c-overlay'></div>
);

export default Overlay;
