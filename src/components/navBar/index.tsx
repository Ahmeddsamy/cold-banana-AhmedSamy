import React from 'react';
import Button from '../button';
import styles from './styles.module.scss';
import leftlogo from "../../../public/assests/topLeftHeader.svg"
const NavBar: React.FC = () => {
  return (
    <nav className={styles.navBar}>
        <div className={styles.left}>
        <img src={leftlogo} alt="leftlogo" />
      </div>
      <div className={styles.logo}>CHILLED GRAPE</div>
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Pricing</li>
      </ul>
      <Button text="Login" size="small" />
    </nav>
  );
};

export default NavBar;

