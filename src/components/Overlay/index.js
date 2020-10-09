import React from 'react';
import PropType from 'prop-types';

const Overlay = ({ opacity, background, zIndex = '0' }) => (
  <div style={{ opacity, background, zIndex }} className='c-overlay'></div>
);

Overlay.propTypes = {
  opacity: PropType.string.isRequired,
  background: PropType.string.isRequired,
  zIndex: PropType.number,
};

export default React.memo(Overlay);
