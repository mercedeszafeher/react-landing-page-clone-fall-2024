import React, { useState } from 'react';
import styles from '../css/Header.module.css';
import dropdownButton from '../images/hamburger.webp';
import logo from '../images/logo.png';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          // src={logoWithText}
          alt="ReturnQueen Logo"
          className={styles.fullLogo}
        />
        <img
          // src={smallLogo}
          alt="ReturnQueen Small Logo"
          className={styles.smallLogo}
        />
      </div>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <a href="#pricing">Pricing</a>
          <a href="#partners">Partners</a>
          <a href="#blog">Blog</a>
        </div>
        <button className={styles.appButton}>Download App</button>
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown} className={styles.dropdownButton}>
            <img src={dropdownButton} alt="Dropdown Icon" />
          </button>
          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#partners">Partners</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
