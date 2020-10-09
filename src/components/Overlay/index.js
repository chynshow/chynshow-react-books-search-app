import React from 'react';
import PropType from 'prop-types';

const Overlay = ({ opacity, background, zIndex = '0' }) => (
  <div style={{ opacity, background, zIndex }} className='c-overlay' />
);

Overlay.propTypes = {
  opacity: PropType.string.isRequired,
  background: PropType.string.isRequired,
  zIndex: PropType.string,
};

export default React.memo(Overlay);
