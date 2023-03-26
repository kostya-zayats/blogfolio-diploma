import React from 'react';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {

  return (
    <label className={styles["theme-switcher"]} htmlFor="theme-switcher-input">
      <input className={styles["theme-switcher-check"]} id='theme-switcher-input' type="checkbox"/>
      <div className={styles["theme-switcher-indicator"]} />
    </label>
  );
};

export default ThemeSwitcher;