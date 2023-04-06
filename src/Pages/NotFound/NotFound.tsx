import React from 'react';
import styles from './NotFound.module.scss'
import {NavLink} from "react-router-dom";
import {PageNames} from "../../Constants/@types";

const NotFound = () => {

  return (
    <div className={styles['not-found-wrapper']}>
      <div className={styles['not-found-title']}>404</div>
      <div className={styles['not-found-desc']}>PAGE NOT FOUND</div>
      <div className={styles['home-link']}><NavLink to={PageNames.Home}>{'Back to home'}</NavLink></div>
    </div>
  );
};

export default NotFound;