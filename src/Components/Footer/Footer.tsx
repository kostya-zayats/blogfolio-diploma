import React from 'react';

import styles from './Footer.module.scss';
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div>{'©2022 Blogolog'}</div>
      <div className={styles["footer-theme-switcher-wrap"]}>{'Dark theme'} <ThemeSwitcher /></div>
    </footer>
  );
};

export default Footer;