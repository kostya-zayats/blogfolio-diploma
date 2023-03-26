import React from 'react';
import Input from "../Input/Input";
// @ts-ignore
import logo from '../../Assets/logo.svg';

import styles from './Navigation.module.scss';
import {SearchIcon} from "../../Assets/icons";

const Navigation = () => {

  return (
    <nav>
      <div className={styles["nav-logo"]}>
        <img src={logo} alt="blogfolio"/>
      </div>
      <div className={styles["nav-search"]}>
        <SearchIcon unicClass={styles["nav-search-ico"]} />
        <Input inputType={'text'} unicClass={styles["nav-search-input"]} />
      </div>
      <div className={styles["nav-user"]}>
        <div className={styles["nav-user-initials"]}>AM</div>
        <div className={styles["nav-user-name"]}>Artem Malkin</div>
      </div>
    </nav>
  );
};

export default Navigation;