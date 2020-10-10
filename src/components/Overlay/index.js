import React from 'react';
import PropType from 'prop-types';

const Overlay = ({ opacity, background, zIndex }) => (
  <div style={{ opacity, background, zIndex }} className='c-overlay' />
);

Overlay.propTypes = {
  opacity: PropType.string.isRequired,
  background: PropType.string.isRequired,
  zIndex: PropType.string,
};

Overlay.defaultProps = {
  opacity: '0',
  background: '#fff',
  zIndex: '0',
};

export default React.memo(Overlay);
