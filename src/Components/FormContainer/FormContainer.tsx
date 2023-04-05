import React, {FC, ReactElement} from 'react';

import styles from './FormContainer.module.scss'
import Header from "../Header";
import {NavLink} from 'react-router-dom';
import {PageNames} from "../../Constants/@types";

type FormContainerProps = {
  title: string;
  children: ReactElement;
}

const FormContainer: FC<FormContainerProps> = ({title, children}) => {

  return (
    <div className={styles['registration-container']}>
      <div className={styles['home-link']}><NavLink to={PageNames.Home}>{'Back to home'}</NavLink></div>
      <Header title={title} />
      <div className={styles.registration}>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;