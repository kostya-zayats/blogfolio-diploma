import React, {useState} from 'react';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {

  const getBody = document.body;

  const [checked, setChecked] = useState(false);

  if(!checked) {
    getBody.classList.remove("dark-theme");
  } else {
    getBody.classList.add("dark-theme");
  }

  return (
    <label className={styles["theme-switcher"]} htmlFor="theme-switcher-input">
      <input className={styles["theme-switcher-check"]} onChange={() => setChecked(!checked)} id='theme-switcher-input' type='checkbox' />
      <div className={styles["theme-switcher-indicator"]} />
    </label>
  );
};

export default ThemeSwitcher;