import React from 'react';
import './button.scss';

const Button = ({ children, type }) => {
  let styles = 'custom-btn';

  switch (type) {
    case 'teal':
      styles += ' teal';
      break;
    default:
      break;
  }

  return (
    <button className={styles}>
      <span>{children}</span> <i />
    </button>
  );
};

export default Button;
