import React from 'react';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {

  const handleChange = (event: { target: { checked: any; }; }) => {
    if (event.target.checked) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  };

  return (
    <label className={styles["theme-switcher"]} htmlFor="theme-switcher-input">
      <input className={styles["theme-switcher-check"]} onChange={handleChange} id='theme-switcher-input' type='checkbox' />
      <div className={styles["theme-switcher-indicator"]} />
    </label>
  );
};

export default ThemeSwitcher;