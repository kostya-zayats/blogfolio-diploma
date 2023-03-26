import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div>©2022 Blogolog</div>
      <div>Dark theme</div>
    </footer>
  );
};

export default Footer;