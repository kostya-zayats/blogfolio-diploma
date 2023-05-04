import React, {useState} from 'react';
import Input from "../Input/Input";
import styles from './Navigation.module.scss';
import {SearchIcon} from "../../Assets/icons";
import UserName from "../UserName/UserName";
// @ts-ignore
import logo from '../../Assets/logo.svg';

const Navigation = () => {
  const [search, setSearch] = useState('');

  return (
    <nav>
      <div className={styles["nav-logo"]}>
        <img src={logo} alt="blogfolio"/>
      </div>
      <div className={styles["nav-search"]}>
        <SearchIcon unicClass={styles["nav-search-ico"]} />
        <Input
          value={search}
          onChange={setSearch}
          type={'text'}
          unicClass={styles["nav-search-input"]} />
      </div>
      <UserName title={'Kostya Zayats'} />
    </nav>
  );
};

export default Navigation;