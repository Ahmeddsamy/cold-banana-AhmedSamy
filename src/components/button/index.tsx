import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  text: string;
  size: 'large' | 'small';
}

const Button: React.FC<ButtonProps> = ({ text, size }) => {
  return (
    <button className={`${styles.button} ${styles[size]}`}>
      {text}
    </button>
  );
};

export default Button;

