import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name,
  placeholder,
  type = 'text',
  onChange,
  className,
  value,
  ...rest
}) => (
  <input
    className={`c-input ${className ? className : ''}`}
    name={name}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    {...rest}
  />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
