import React from 'react';
import Input from "../Input/Input";
// @ts-ignore
import logo from '../../Assets/logo.svg';

import styles from './Navigation.module.scss';
import {SearchIcon} from "../../Assets/icons";
import UserName from "../UserName/UserName";

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
      <UserName title={'Kostya Zayats'} />
    </nav>
  );
};

export default Navigation;