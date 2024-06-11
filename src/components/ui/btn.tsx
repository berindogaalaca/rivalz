import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  buttonClass:string
};

const Button = ({ onClick, children, buttonClass }: ButtonProps) => {


  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
