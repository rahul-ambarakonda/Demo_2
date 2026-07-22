
import React, { useState } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">My Application</a>
        </div>
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`} role="navigation">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          &#9776;
        </button>
      </div>
    </header>
  );
};

export default Header;
