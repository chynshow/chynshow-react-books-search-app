import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name,
  placeholder,
  type,
  onChange,
  className,
  value,
  label,
  ...rest
}) => (
  <label>
    {label}
    <input
      className={`c-input ${className ? className : ''}`}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...rest}
    />
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default React.memo(Input);
