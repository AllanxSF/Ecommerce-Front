import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ text, className = "", ...props }) => {
  return (
    <button className={className} {...props}>
      {text}
    </button>
  );
};

export default Button;

