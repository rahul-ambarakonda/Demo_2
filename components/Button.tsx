import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  const className = `${styles.button} ${styles[variant]}`;
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;