import React, {useState} from 'react';

import styles from './ThemeSwitcher.module.scss';
import {useThemeContext} from "../../Context/Theme";
import {Theme} from "../../Constants/@types";

const ThemeSwitcher = () => {

  const { theme, onChangeTheme } = useThemeContext();

  return (
    <label className={styles["theme-switcher"]}>
      <input
        className={styles["theme-switcher-check"]}
        onChange={() => onChangeTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)}
        type='checkbox' />
      <div className={styles["theme-switcher-indicator"]} />
    </label>
  );
};

export default ThemeSwitcher;